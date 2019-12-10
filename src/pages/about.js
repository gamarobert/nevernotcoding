import React from "react"
import Layout from "../components/Layout.js"
import SEO from "../components/Seo.js"
import { graphql } from "gatsby"
const About = ({ data }) => {
  return (
    <Layout title={data.site.siteMetadata.title}>
      <SEO title="./nevernotcoding" />
      <h1>About</h1>
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
