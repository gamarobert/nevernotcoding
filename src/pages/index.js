import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout.js"
import SEO from "../components/Seo.js"
import logo from "../../content/assets/Logo.svg"
import Tabs from "../components/Tabs.js"

import indexStyle from "./index.module.css"

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  const categories = [
    ...new Set(
      posts.map(({ node }) => {
        return node.frontmatter.category
      })
    ),
  ]

  console.log(categories)

  return (
    <Layout title={data.site.siteMetadata.title}>
      <SEO title="Blog" />
      <div className={indexStyle.banner}>
        <img className={indexStyle.logo} src={logo} alt="Logo" />
      </div>

      <Tabs>
        {categories.map(category => {
          return (
            <div key={category} label={category}>
              {posts.map(({ node }) => {
                if (node.frontmatter.category === category) {
                  return (
                    <>
                      <h1>{node.frontmatter.title}</h1>
                      <p>{node.excerpt}</p>
                    </>
                  )
                } else {
                  return undefined
                }
              })}
            </div>
          )
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
          excerpt
        }
      }
    }
  }
`

export default BlogIndex
