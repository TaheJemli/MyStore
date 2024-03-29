import { useEffect, useState } from "react";
import products from "../../mock/Project";
import { Container, Alert , Row, Col } from "react-bootstrap";
import Product from "./Product";
import { getallProducts, deleteProduct } from "../../service/api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductReducer, selectProducts } from "../../redux/slices/productsSlice";

const Products = () => {
  const [isBuy, setIsBuy] = useState(false);
  const [isWelcome, setIsWelcome] = useState(true);
  const [listproducts, setListProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [prods] = useSelector(selectProducts);

  useEffect(() => {
    setTimeout(() => {
      setIsWelcome(false);
    }, 3000);
  }, []);

  const buyHandler = () => {
    setIsBuy(true);

    setTimeout(() => {
      setIsBuy(false);
    }, 2000);
  };

  // const loadProducts = async () => {
  //   const response = await getallProducts();
  //   console.log("response", response.data);
  //   setListProducts(response.data);
  // };


  const deleteProd = async (id) => {
    const result = window.confirm("Are you sure you want to delete?");
  if (result) {
    await deleteProduct(id).then(()=>navigate('/products'))
    dispatch(deleteProductReducer(id));
    //loadProducts(); 
  }
}
// useEffect(()=>{
//   loadProducts();
// },[])

  return (
    <Container>
      { isWelcome && (
        <Alert style={{ width: "70%", marginTop: 20 }} variant="success">
          {" "}
          Hey , welcome to the shop
        </Alert>
      )}
      { isBuy && (
        <Alert style={{ width: "70%", marginTop: 20 }} variant="primary">
          {" "}
          You Bought an Item
        </Alert>
      )}

      <Row>
        { prods.map((prod, index) => (
          <Col key={index}>
            <Product
              product={prod}
              buyHandler={buyHandler}
              deleteProd={deleteProd}
            ></Product>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Products;
