import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { editProduct, getallProducts } from "../../service/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const UpdateProduct = () => {

    const navigate = useNavigate();
    const param = useParams();
    const [product, setProduct] = useState({
      name: "",
      price: 0,
      img: "",
      like: 0,
      quantity: 0,
      description: "",
  });

  const { id, name, price, img, like, quantity, description } = product;

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await getallProducts(param.id);
    setProduct(response.data);
  };

  const onValueChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const onFileHandle = (e) => {
    console.log(e.target.files);
    setProduct({ ...product, [e.target.name]: e.target.files[0].name });
  };
  const UpdateP= async () => {
    const res = await editProduct(param.id,product);
    if(res.status ===200)
    navigate("/products");
    
  };

    return(
        <Container style={{ marginTop: "50px" }}>
        <h2>Add Your Product</h2>
      <Form onSubmit={UpdateP}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
         type="text"
         name="name"
         value={name} 
         placeholder="Name" 
         onChange={(e) => onValueChange(e)}/>
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control 
        onChange={(e) => onValueChange(e)}
        type="text" 
        name="description"
        value={description} 
        placeholder="description" />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control 
        type="number"
        value={price} 
        name="price"
        placeholder="Price"
        onChange={(e) => onValueChange(e)} />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Quantity</Form.Label>
        <Form.Control 
        type="number"
        name="quantity"
        value={quantity}
        placeholder="Quantity"
        onChange={(e) => onValueChange(e)} />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control 
        type="file" 
        placeholder="Image"
        name="img"
        onChange={(e) => onFileHandle(e)} />
      </Form.Group>
  
  
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    )

}
export default UpdateProduct;