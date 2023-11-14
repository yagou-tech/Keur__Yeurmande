import React from "react";
import Slidebg from "../assets/slide-one.jpg";
import { Button, Carousel, Col, Row } from "antd";
import styled from "styled-components";
import Imgbg from "../assets/slide-one.jpg"

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
};


const Slide = styled.div`
    background-image: url(${Imgbg});
    height: 100%;
    width: 100%;
    color: #fff;
    background: cover;

    .carousel{
        display: flex;
        align-items: center;
        width: 90%;
        margin: 0 auto;
    }
`
const Content = styled.div`
    width: 694px;
    padding: 50px;
    position: relative;
    padding-bottom: 100px;

    h1{
        height: 100px !important;
    };
    p{
        width: 538px;
        text-align: justify;
        line-height: 25px;
        margin-left: 100px;
    };
    .btn{
        background-color: transparent;
        color: #fff;
        font-size: 13.5px;
        border-radius: 0px !important;

        &:hover{
            border: solid 1px #FF0390 !important;
            color: #fff !important;
            
        }
    }
`
const Action = styled.div`
    margin-top: 30px;
    margin-left: 100px;

    
`

const Hero = () => {
  return (
      <Carousel className="carousel">
        <Slide>
            <Content>
          <h1 style={contentStyle}>NOUS POUVONS AIDER QUELQU'UN</h1>
          <p>
            L'orphelinat "Keur Yeurmandé" est un orphelinat que nous avons eu le
            privilège de découvrir lors d'une activité de bénévolat organisée
            par les Bakelistes. Aujourd'hui, en tant que Bakeli School of
            Technology, une école de formation dans le domaine du numérique,
            nous nous engageons à apporter notre soutien à cet orphelinat en
            favorisant sa digitalisation, notamment dans le traitement de leurs
            images numériques et la gestion de leurs demandes de soutien. Cette
            note conceptuelle a été élaborée dans le but de concrétiser cette
            vision et d'assister l'orphelinat dans la création d'un site
            internet dédié à sa cause.
          </p>
            <Action>
            <Row>
                <Col span={8}><Button className="btn">FAIRE UN DON MAINTENANT</Button></Col>
                <Col span={12}><Button className="btn">APPRENDRE ENCORE PLUS</Button></Col>
            </Row>
          
          </Action>
          </Content>
        </Slide>
        <Slide>
          <h2 style={contentStyle}>NOUS POUVONS AIDER QUELQU'UN</h2>
          <p>
            L'orphelinat "Keur Yeurmandé" est un orphelinat que nous avons eu le
            privilège de découvrir lors d'une activité de bénévolat organisée
            par les Bakelistes. Aujourd'hui, en tant que Bakeli School of
            Technology, une école de formation dans le domaine du numérique,
            nous nous engageons à apporter notre soutien à cet orphelinat en
            favorisant sa digitalisation, notamment dans le traitement de leurs
            images numériques et la gestion de leurs demandes de soutien. Cette
            note conceptuelle a été élaborée dans le but de concrétiser cette
            vision et d'assister l'orphelinat dans la création d'un site
            internet dédié à sa cause.
          </p>
        </Slide>
        <Slide>
          <h2 style={contentStyle}>NOUS POUVONS AIDER QUELQU'UN</h2>
          <p>
            L'orphelinat "Keur Yeurmandé" est un orphelinat que nous avons eu le
            privilège de découvrir lors d'une activité de bénévolat organisée
            par les Bakelistes. Aujourd'hui, en tant que Bakeli School of
            Technology, une école de formation dans le domaine du numérique,
            nous nous engageons à apporter notre soutien à cet orphelinat en
            favorisant sa digitalisation, notamment dans le traitement de leurs
            images numériques et la gestion de leurs demandes de soutien. Cette
            note conceptuelle a été élaborée dans le but de concrétiser cette
            vision et d'assister l'orphelinat dans la création d'un site
            internet dédié à sa cause.
          </p>
        </Slide>
      </Carousel>
  );
};

export default Hero;
