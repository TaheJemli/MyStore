import { useEffect, useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Product.css"

const Product = (props) => {
  const [count, setCount] = useState(props.product.like);
  const [quantity, setQuantity] = useState(props.product.quantity);
  const [BestProduct,setBestProduct] = useState(false);
  const [BestProductClass,setBestProductClass] = useState("");

  const likeHandler = () => {
    setCount(count + 1);
  };

  const decrementProdQuantity = (quantity) => {
    if (quantity > 0) {
        setQuantity(quantity - 1);
    }
  }

  const buyProdHandler = () => {
    props.buyHandler();
    decrementProdQuantity(quantity);
  }

  useEffect(() => {
    if(count>5) {
        setBestProduct(true);
        setBestProductClass("bestProduct");
    }
  })

  return(
    <Card style={{ width: '18rem' }} className={BestProduct?BestProductClass:''}>
    <Card.Img variant="top" src={require(`../../assets/images/${props.product.img}`)} />
    <Card.Body>
        <NavLink to={`/products/${props.product.name}`}>
      <Card.Title>{props.product.name}</Card.Title>
      </NavLink>
      <Card.Text>{props.product.description}</Card.Text>
      <Card.Text><Badge bg="warning" text="dark">price :</Badge>&nbsp;{props.product.price}</Card.Text>
      <Card.Text><Badge bg="warning" text="dark">like :</Badge>&nbsp;{count}</Card.Text>
      <Card.Text><Badge bg="warning" text="dark">Quantity :</Badge>&nbsp;{quantity}</Card.Text>
      <Button variant="info" onClick={likeHandler} className="mx-5">Like</Button>{"  "}
      <Button variant="primary" onClick={buyProdHandler} disabled={props.product.quantity === 0}>{" "} Buy</Button>
    </Card.Body>
  </Card>
)
};
export default Product;
