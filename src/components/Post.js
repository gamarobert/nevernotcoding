import React from "react"
import PropTypes from "prop-types"
import truncate from "lodash/truncate"
import { Link } from "gatsby"
import Img from "gatsby-image"
import postStyles from "./post.module.css"

const Post = ({ fluid, title, excerpt, slug }) => {
  const {
    postItem,
    overlay,
    featuredImage,
    postContent,
    postTitle,
    button,
  } = postStyles

  return (
    <div className={postItem}>
      <span className={overlay}></span>
      <Img className={featuredImage} fluid={fluid} />
      <div className={postContent}>
        <h2 className={postTitle}>
          {truncate(title, { length: 48, seperator: " " })}
        </h2>
        <p>{excerpt}</p>
        <Link to={slug}>
          <button className={button}>Read</button>
        </Link>
      </div>
    </div>
  )
}

Post.propTypes = {
  allMarkdownRemark: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
}

export default Post
