import React from 'react'
import Img from "gatsby-image"

const Carousel = ({images, imagesMobile, altText}) => {
    return (
        <header id="hero" className="hero">
            <div className="hero__img">
                <Img fluid={images} className="img-fluid desktop" alt={altText} />
                <Img fluid={imagesMobile} className="img-fluid mobile" alt={altText} />
            </div>
        </header>
    )
}

export default Carousel
