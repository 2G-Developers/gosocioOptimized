import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import '../style/main.scss'
import Carousel from "../components/Carousel/Carousel"
import About from "../components/About/About"
import Client from "../components/Client/Client"
import Contact from "../components/Contact/Contact"
import Navbar from "../components/Navbar/Navbar"

const IndexPage = () => {
  
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "Home-Banner.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: {eq: "Home-Mobile-Banner.jpg"}) {
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
    <SEO title="Home" />
    <Navbar isSecondary={false} class1="navbar-list-active" />
    <Carousel images={data.placeholderImage.childImageSharp.fluid} imagesMobile={data.mobileImage.childImageSharp.fluid} altText="Hero" />
    <About />
    <Contact />
    <Client />
  </Layout>
)
  }

export default IndexPage
