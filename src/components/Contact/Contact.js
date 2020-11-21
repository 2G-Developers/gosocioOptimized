import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick";

import skylon from '../../images/skylon-client.svg'
import arjeeSvg from '../../images/arjeeSvg.svg'
import raziya from '../../images/raziya-client.svg'

const Contact = ({isgrey}) => {
    let colorStyle = isgrey ? '#f4f4f4' : '#fff';

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        speed: 2000,
        arrows: false,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    infinite: true
                }
            },
            {
            breakpoint: 480,
            settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    infinite: true
                }
            }
        ]
    };

    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {relativePath: {regex: "/^Client/"}}) {
                edges {
                  node {
                    base
                    childImageSharp {
                      fixed(width: 210) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
        }
    `)

    return (
        <section id="contact" className="contact" style={{background: colorStyle}}>
            <Container>
                <Row>
                    <Col md={12}>
                        <h2 className="heading">Our Awesome Clients</h2>
                        <div className="contact__carousel">
                            <Slider {...settings}>
                                <div className="contact__image">
                                    <img src={skylon} alt="Raziya" className="img-fluid" />
                                </div>
                                <div className="contact__image">
                                    <Img fixed={data.allFile.edges[1].node.childImageSharp.fixed} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="contact__image">
                                    <img src={arjeeSvg} alt="Arjee" className="img-fluid" style={{width: "215px"}}/>
                                </div>
                                <div className="contact__image">
                                    <Img fixed={data.allFile.edges[2].node.childImageSharp.fixed} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="contact__image">
                                    <img src={raziya} alt="Raziya" className="img-fluid" style={{width: "215px"}}/>
                                </div>
                                <div className="contact__image">
                                    <Img fixed={data.allFile.edges[3].node.childImageSharp.fixed} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="contact__image">
                                    <Img fixed={data.allFile.edges[0].node.childImageSharp.fixed} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="contact__image">
                                    <Img fixed={data.allFile.edges[4].node.childImageSharp.fixed} className="img-fluid small-margin" alt="ammus" />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact
