import React from "react"
import Layout from "../components/Layout.js"
import SEO from "../components/Seo.js"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout title="./nevernotcoding">
      <div className="blog-post-container">
        <SEO title="Blog Post Title" />
        <h1 className="blog-post">{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}
