import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, Button, CardOverlay } from 'reactstrap';

function DishDetail(props) {

    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name}></CardImg>
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>
                        <strong>{props.dish.name}</strong>
                    </CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <CardText><strong>{props.dish.price}/-</strong></CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;