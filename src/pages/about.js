import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import '../style/main.scss'
import Carousel from "../components/Carousel/Carousel"
import Client from "../components/Client/Client"
import Contact from "../components/Contact/Contact"
import Service from "../components/Service/Service"
import Navbar from "../components/Navbar/Navbar"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "2.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: {eq: "2_Mobile.jpg"}) {
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
    <SEO title="About" />
    <Navbar isSecondary={true} class2="navbar-list-active" color="#000"/>
    <Carousel images={data.placeholderImage.childImageSharp.fluid} imagesMobile={data.mobileImage.childImageSharp.fluid} altText="Hero" />
    <Service />
    <Contact isgrey={true} />
    <Client />
  </Layout>
)
  }

export default AboutPage
