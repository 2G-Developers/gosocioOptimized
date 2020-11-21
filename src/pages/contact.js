import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import '../style/main.scss'
import Carousel from "../components/Carousel/Carousel"
import Location from "../components/Location/Location"
import Enquiry from "../components/Enquiry/Enquiry"
import Navbar from "../components/Navbar/Navbar"

const ContactPage = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "3.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: {eq: "3_Mobile.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
  <Layout>
    <SEO title="Contact" />
    <Navbar isSecondary={false} class3="navbar-list-active" />
    <Carousel images={data.placeholderImage.childImageSharp.fluid} imagesMobile={data.mobileImage.childImageSharp.fluid} altText="Hero" />
    <Enquiry />
    <Location />
  </Layout>
)
  }

export default ContactPage
