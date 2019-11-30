import React from "react"
import Layout from "../components/Layout.js"
import SEO from "../components/Seo.js"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout title="./nevernotcoding">
      <div className="blog-post-container">
        <SEO title="Blog Post Title" />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
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
