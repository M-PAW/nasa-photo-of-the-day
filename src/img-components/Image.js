import React, {useState, useEffect} from "react";
import './Image.css';
import './textContent.css';
import Text from "./title";
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import {Caption, Header, Star, Title, Para} from "./frame-styles";

function Image(props){
    console.log(props);
    // console.log(props.data.date);
    return (
        <Container className="imgContainer">
            <Col>
                <Row>
                    <div className="textContainter">
                        <Header>
                            {/* <img src="../NASA.png" />    */}
                            <h1> NASA Photo of the Day</h1>
                            <h2>Date: {props.data.date}</h2>
                            <Title>                     
                                <Text title={props.data.title}/>
                            </Title> 
                        </Header> 
                    </div>
                </Row>
                <Star className="image">
                    <img src={props.data.url} alt="A photo of {props.data.title}"/>

                    <Caption>By: {props.data.copyright}</Caption>
                    <Row className="description">

                        <Para>{props.data.explanation}</Para>
                    </Row>
                </Star>
            </Col>
        </Container>
    );

    

}

export default Image;