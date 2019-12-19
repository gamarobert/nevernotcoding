import React from "react"
import Layout from "../components/Layout.js"
import SEO from "../components/Seo.js"
import { graphql } from "gatsby"
import pepecoff from "../../content/assets/pepecoff.jpg"
import aboutStyles from "./about.module.css"

const About = ({ data }) => {
  const { container, item, img } = aboutStyles
  return (
    <Layout title={data.site.siteMetadata.title}>
      <SEO title="./nevernotcoding" />
      <div className={container}>
        <div className={item}>
          <img class={img} src={pepecoff} alt="#" />
        </div>
        <div className={item}>
          <h1>about nevernotcoding</h1>
        </div>
        <div className={item}>
          <p>
            this blog aspires to be a source of interesting and useful
            information, as well as relatable experiences as a programmer.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default About
