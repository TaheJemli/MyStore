import { useState, useEffect } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import products from "../../mock/Project";
import { useParams } from "react-router-dom";
import { getallProducts } from "../../service/api";

const ProductDetails = () => {
    //const {name} = useParams();
    //const product = products.find((product) => product.name === name)

    const {id} = useParams();
    const [product, setProduct] = useState();

    const getProdById = async () => {
        const response = await getallProducts();
        const product = response.data.find((product) => product.id === id);
        setProduct(product);
    }


    return (<>
    {product === undefined ? (
        <h1> Not Found </h1>
    ) : (
        <Container style={{ marginTop: "30px" }}>
        <Row>
            <Col md={4}>
                <Card.Img
                    variant="top"
                    src={require("../../assets/images/" + product.img)}
                    alt="Product Img"
                    height="300"
                />
            </Col>
            <Col md={8}>
                <Row>
                    <Col md={12}>
                        <h1>{product.name}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h5>Description</h5>
                    </Col>
                    <Col>
                        <p style={{ marginLeft: "50px" }}>
                            {product.description}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h5>Price</h5>
                    </Col>
                    <Col>
                        <p style={{ marginLeft: "50px" }}>{product.price} DT</p>

                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h5>Likes</h5>
                    </Col>
                    <Col>
                        <p style={{ marginLeft: "50px" }}>{product.like}</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    )}
    </>)

}
export default ProductDetails;