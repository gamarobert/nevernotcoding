import React from "react"
import Layout from "../components/Layout.js"
import SEO from "../components/Seo.js"
import SideSocial from "../components/SideSocial.js"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import blogpostStyles from "./blogpost.module.css"

const { blogText, featuredImage, divider, author } = blogpostStyles

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <SideSocial />
      <Layout title="./nevernotcoding">
        <div className="blog-post-container">
          <SEO title="Blog Post Title" />
          <h1>{post.frontmatter.title}</h1>
          <span className={divider}>
            {post.frontmatter.author ? (
              <h3 className={author}>
                <div className={`${userIcon} fa fa-user-circle`} />
                by {post.frontmatter.author}
              </h3>
            ) : null}
          </span>
          <Img
            className={featuredImage}
            fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
          />
          <div
            className={blogText}
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
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
    }
  }
`
