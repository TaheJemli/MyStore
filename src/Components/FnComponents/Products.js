import { useEffect, useState } from "react";
import products from "../../mock/Project";
import { Container, Alert , Row, Col } from "react-bootstrap";
import Product from "./Product";
import { getallProducts } from "../../service/api";

const Products = () => {
  const [isBuy, setIsBuy] = useState(false);
  const [isWelcome, setIsWelcome] = useState(true);
  const [listproducts, setListProducts] = useState(products);

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

  const loadProducts = async () => {
    const response = await getallProducts();
    console.log("response", response.data);
    setListProducts(response.data);
  };

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
        { listproducts.map((prod, index) => (
          <Col key={index}>
            <Product
              product={prod}
              buyHandler={buyHandler}
            ></Product>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Products;
