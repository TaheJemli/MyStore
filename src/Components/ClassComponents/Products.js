import { Component } from "react";
import {  Container, Col, Row, Alert } from "react-bootstrap";
import products from "../../mock/Project";
import Product from "./Product";

class Products extends Component {
    state = {
        listproducts : products,
        isWelcome : true,
        isBuy : false,
    };

    welcomeHandler() {
        setTimeout(() => {
          this.setState({
            isWelcome: false
          });
        }, 3000);
      }
    buyHandler = () => {
        this.setState((prevState) => ( {
            ...prevState,
            isBuy : true
        }))
        setTimeout(() => {
            this.setState((prevState) => ({
                ...prevState,
                isBuy : false
            }))

        },2000)

    }

    render() {
        return(
            <Container>    
                                                {
                    this.state.isWelcome && (
                    <Alert style={{ width: '70%', marginTop: 20}} variant='success'> Hey , welcome to the shop</Alert>
                    )
                }                    
                 {
                    this.state.isBuy && (
                        <Alert style={{ width: '70%', marginTop: 20}} variant='primary'> You Bought an Item</Alert>
                    )
                }

                <Row>
                {this.state.listproducts.map((prod, index) =>
                (
                    <Col key={index}>
                        <Product product={prod} buyHandler = {this.buyHandler} welcomeHandler = {this.welcomeHandler}></Product>
                    </Col>
                ))}
                </Row>
            </Container>
        )
    }
}
export default Products;