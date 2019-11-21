import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout.js"
import SEO from "../components/Seo.js"
import logo from "../../content/assets/Logo.svg"
import Tabs from "../components/Tabs.js"

import indexStyle from "./index.module.css"
const BlogIndex = ({ data }) => {
  return (
    <Layout title={data.site.siteMetadata.title}>
      <SEO title="Blog" />
      <div className={indexStyle.banner}>
        <img className={indexStyle.logo} src={logo} alt="Logo" />
      </div>

      <Tabs>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return <div key={node.id} label={node.frontmatter.category}></div>
        })}
      </Tabs>
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
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            category
          }
        }
      }
    }
  }
`

export default BlogIndex
