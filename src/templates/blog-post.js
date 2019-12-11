import React from "react"
import Layout from "../components/Layout.js"
import SEO from "../components/Seo.js"
import SideSocial from "../components/SideSocial.js"
import { graphql } from "gatsby"
import blogpostStyles from "./blogpost.module.css"

const { blogText } = blogpostStyles

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <SideSocial />
      <Layout title="./nevernotcoding">
        <div className="blog-post-container">
          <SEO title="Blog Post Title" />
          <h1>{post.frontmatter.title}</h1>
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
        title
      }
    }
  }
`
