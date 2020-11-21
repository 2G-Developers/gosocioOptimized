import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Slider from "react-slick";

import Aos from 'aos';

// Bootstrap
import {Col, Container, Row} from 'react-bootstrap'

const About = () => {
    const singleSettings = {
        dots: false,
        autoplay: true,
        fade: true,
        infinite: true,
        arrows: false,
        speed: 1500,
        slidesToShow: 1
    };

    useEffect(() => {
        Aos.init({
            duration: 1000,
        })
    }, [])

    const data = useStaticQuery(graphql`
        query {
            sooja: file(relativePath: {eq: "sooja.png"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80 ) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              untold: file(relativePath: {eq: "untold.jpg"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              Skylon2: file(relativePath: {eq: "skylon-2.png"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              skylon: file(relativePath: {eq: "skylon.png"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              vr: file(relativePath: {eq: "vr.png"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              amaas: file(relativePath: {eq: "amaas.png"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              ammus: file(relativePath: {eq: "ammus.jpg"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              arjee: file(relativePath: {eq: "arjee.jpg"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              raziya: file(relativePath: {eq: "raziya.jpg"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              hair: file(relativePath: {eq: "hair.jpg"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              hair1: file(relativePath: {eq: "intro_the.jpg"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              hair2: file(relativePath: {eq: "sam.jpg"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              hair3: file(relativePath: {eq: "hair3.jpg"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              hairDiwaliA: file(relativePath: {eq: "thediwalia.jpg"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              hairDiwaliB: file(relativePath: {eq: "thediwalib.jpg"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              hairDiwaliC: file(relativePath: {eq: "thediwalic.jpg"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              couchy: file(relativePath: {eq: "couchy.png"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              couchyComfy: file(relativePath: {eq: "couchyComfy.jpg"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              couchyIndependence: file(relativePath: {eq: "couchyIndependence.jpg"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
              couchyWebsite: file(relativePath: {eq: "couchyWebsite.jpg"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }eclectic: file(relativePath: {eq: "eclectic.jpg"}) {
                childImageSharp {
                      fluid(maxHeight: 470, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
            }
        }
    `)
    
    return (
        <section id="about" className="about">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="about__heading">
                            <h3>
                                We are a multi-disciplinary digital marketing agency
                            </h3>
                            <p>Go Socio Butterfly is a fully integrated digital marketing and branding agency that
utilises our strategic, creative and innovative digital ideas to transform your business.
We create leading ideas that are unique and help your brand progress digitally. We
think, envision and create with you to build a strong digital future.</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={8} style={{padding: "5px 0"}}>
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <Slider {...singleSettings}>
                                <div id="test1" className="about__img">
                                    <Img fluid={data.ammus.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.Skylon2.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.untold.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.sooja.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                    <Col md={4} style={{padding: "5px 0"}}>
                        <div  data-aos="zoom-in" className="about__wrapper" >
                            <Slider {...singleSettings}>
                                <div id="test1" className="about__img">
                                    <Img fluid={data.hair.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.hair1.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.hair2.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.hairDiwaliB.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.hairDiwaliC.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={4} style={{padding: "5px 0"}}>
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <Slider {...singleSettings}>
                                <div id="test1" className="about__img">
                                    <Img fluid={data.couchy.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.couchyComfy.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.couchyIndependence.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.couchyWebsite.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                    <Col md={8} className="order" style={{padding: "5px 0"}}>
                        <div  data-aos="zoom-in" className="about__wrapper">
                            <Slider {...singleSettings}>
                                <div id="test1" className="about__img">
                                    <Img fluid={data.raziya.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.amaas.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.eclectic.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.arjee.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={8} style={{padding: "5px 0"}}>
                        <div data-aos="zoom-in" className="about__wrapper">
                            <Slider {...singleSettings}>
                                <div className="about__img">
                                    <Img fluid={data.untold.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.sooja.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">                                    
                                    <Img fluid={data.Skylon2.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.ammus.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                    <Col md={4} style={{padding: "5px 0"}}>
                        <div data-aos="zoom-in" className="about__wrapper">
                            <Slider {...singleSettings}>
                                <div id="test1" className="about__img">
                                    <Img fluid={data.skylon.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.vr.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.hair3.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.hairDiwaliA.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={4} style={{padding: "5px 0"}}>
                        <div data-aos="zoom-in" className="about__wrapper">
                            <Slider {...singleSettings}>
                                <div className="about__img">
                                    <Img fluid={data.hair1.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.couchyComfy.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div id="test1" className="about__img">
                                    <Img fluid={data.couchy.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.hairDiwaliB.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                    <Col md={8} className="order" style={{padding: "5px 0"}}>
                        <div data-aos="zoom-in" className="about__wrapper">
                            <Slider {...singleSettings}>
                                <div className="about__img">
                                    <Img fluid={data.eclectic.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.arjee.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.raziya.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                                <div className="about__img">
                                    <Img fluid={data.amaas.childImageSharp.fluid} className="img-fluid small-margin" alt="ammus" />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
