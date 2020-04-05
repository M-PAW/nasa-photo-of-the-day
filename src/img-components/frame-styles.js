import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

export const Caption = styled.h3 `
    text-align: center;
    font-weight: bold;
`

export const Header = styled.div `
    left: 4.7%;
    width: 37%;
    margin: 1.2% auto;
    color: white;
    position: absolute;
    height: 5%;
    z-index: 3;
`

export const Star = styled.div `
    position: absolute;
    // top: 60%;
    left: 4.7%;
    z-index: 1;
`

export const Title = styled.div `
    margin-top: 690px;
    width: 100%;
    padding-left: 6%;
    color: white;
    position: absolute;
    z-index: 2;
`
export const Para = styled.p `
    font-size: 1.6rem;
    width: 92%;
    margin: 0 auto 35px auto;
`