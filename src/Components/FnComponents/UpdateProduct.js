import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
const UpdateProduct = () => {

    return(
        <Container style={{ marginTop: "50px" }}>
            <h2>Update Your Product</h2>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter email" />
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="Enter email" />
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" placeholder="Enter email" />
        </Form.Group>
    
    
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
      </Container>
    )

}
export default UpdateProduct;