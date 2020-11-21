import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Call from '../../images/CallIcon.svg'
import LocationIcon from '../../images/LocationIcon.svg'

const Location = () => {
    const data = useStaticQuery(graphql`
        query {
        placeholderImage: file(relativePath: { eq: "Central.png" }) {
            childImageSharp {
            fluid(quality: 80) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
    `)

    return (
        <section id="location" className="location">
            <div className="location--red">
                <h2>Our Location</h2>
            </div>
            <Container className="location__negative-margin">
                <Row style={{justifyContent: "center"}}>
                    <Col md={8}>
                        <div className="location__wrapper">
                            <div className="location__image">
                                <Img fluid={data.placeholderImage.childImageSharp.fluid} className="img-fluid" alt="Central Location" />
                            </div>
                            <div className="location__details">
                                <a href="tel:+918939907815" className="location__link">
                                    <p><img src={Call} alt="phone number" style={{width: "16px", height: "16px"}} /> +918939907815</p>
                                </a>
                                <p className="location__address">
                                    <img src={LocationIcon} alt="Address" style={{width: "18px", height: "18px"}} />
                                    <span className="p-0"> The Executive Zone, Shakti Towers-1, <br />
                                    </span><span className="pl-3">
                                    766, Anna Salai, Chennai - 600002.</span>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Location
