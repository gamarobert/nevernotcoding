import React from "react"
import Layout from "../components/Layout.js"
import SEO from "../components/Seo.js"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import blogpostStyles from "./blogpost.module.css"

const {
  blogTitle,
  blogText,
  featuredImage,
  divider,
  author,
  userIcon,
  date,
  calenderIcon,
} = blogpostStyles

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <Layout title="./nevernotcoding">
        <SEO title={post.frontmatter.title} />
        <h1 className={blogTitle}>{post.frontmatter.title}</h1>
        <span className={divider}>
          {post.frontmatter.author ? (
            <h3 className={author}>
              <div className={`${userIcon} fa fa-user-circle`} />
              by {post.frontmatter.author}
            </h3>
          ) : null}
          {post.frontmatter.date ? (
            <h3 className={date}>
              <div className={`${calenderIcon} fa fa-calendar`} />
              Posted on {post.frontmatter.date}
            </h3>
          ) : null}
        </span>
        <Img
          className={featuredImage}
          draggable={false}
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
          alt="Featured Image"
        />
        <div
          className={blogText}
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
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
        date(formatString: "MMMM DD, YYYY")
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
