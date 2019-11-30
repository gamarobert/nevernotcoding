import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout.js"
import SEO from "../components/Seo.js"
import logo from "../../content/assets/Logo.svg"
import Tabs from "../components/Tabs.js"
import Post from "../components/Post.js"
import "../global.css"

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  const categories = [
    ...new Set(
      posts.map(({ node }) => {
        return node.frontmatter.category
      })
    ),
  ]

  return (
    <Layout title={data.site.siteMetadata.title}>
      <SEO title="Blog" />
      <div className="banner">
        <img className="center" src={logo} alt="Logo" />
      </div>

      <Tabs>
        {categories.map(category => {
          return (
            <div key={category} label={category}>
              <div className="post-container">
                {posts.map(({ node }) => {
                  if (node.frontmatter.category === category) {
                    return (
                      <Post
                        title={node.frontmatter.title}
                        slug={node.fields.slug}
                        excerpt={node.excerpt}
                        fluid={
                          node.frontmatter.featuredImage.childImageSharp.fluid
                        }
                      />
                    )
                  } else return undefined
                })}
              </div>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex
