import { Component } from "react";
import { Card, Button, Badge } from "react-bootstrap";

class Product extends Component {

  state = {
    count : this.props.product.like,
    quantity : this.props.product.quantity,
    showAlert : false,
  }
  likeHandler = () => {
    console.log(this.state.count)
    this.setState((prevState) => ({
      ...prevState,
      count : prevState.count + 1,
    }))
  }

  decrementProdQuantity = (quantity) => {
    if (quantity>0) {
      this.setState((prevState)=> ({
        ...prevState,
        quantity : prevState.quantity - 1

      }))
    }
  }

  buyProdHandler = () => {
    this.props.buyHandler();
    this.decrementProdQuantity(this.state.quantity);
  }
    render(){
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require(`../../assets/images/${this.props.product.img}`)} />
            <Card.Body>
              <Card.Title>{this.props.product.name}</Card.Title>
              <Card.Text>{this.props.product.description}</Card.Text>
              <Card.Text><Badge bg="warning" text="dark">price :</Badge>&nbsp;{this.props.product.price}</Card.Text>
              <Card.Text><Badge bg="warning" text="dark">like :</Badge>&nbsp;{this.state.count}</Card.Text>
              <Card.Text><Badge bg="warning" text="dark">Quantity :</Badge>&nbsp;{this.state.quantity}</Card.Text>
              <Button variant="info" onClick={this.likeHandler} className="mx-5">Like</Button>{"  "}
              <Button variant="primary" onClick={this.buyProdHandler} disabled={this.props.product.quantity === 0}>{" "} Buy</Button>
            </Card.Body>
          </Card>
        )
    }
}
export default Product;