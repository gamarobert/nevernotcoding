import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout.js"
import SEO from "../components/Seo.js"
import Tabs from "../components/Tabs.js"
import Post from "../components/Post.js"
import Banner from "../components/Banner.js"

import "../global.css"
import indexStyles from "./index.module.css"

const BlogIndex = ({ data }) => {
  const { postContainer } = indexStyles

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
      <SEO title="Home" />
      <Banner logo={data.site.siteMetadata.logo} />
      <Tabs>
        {categories.map((category, id) => {
          return (
            <div key={id} label={category}>
              <div className={postContainer}>
                {posts.map(({ node }) => {
                  if (node.frontmatter.category === category) {
                    return (
                      <Post
                        key={node.id}
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

BlogIndex.propTypes = {
  data: PropTypes.object.isRequired,
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        logo
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
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
