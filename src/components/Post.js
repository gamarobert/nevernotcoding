import React from "react"
import truncate from "lodash/truncate"
import { Link } from "gatsby"
import Img from "gatsby-image"
import postStyles from "./post.module.css"

const {
  postItem,
  overlay,
  featuredImage,
  postContent,
  postTitle,
  button,
} = postStyles

const Post = props => {
  return (
    <div className={postItem}>
      <span className={overlay}></span>
      <Img className={featuredImage} fluid={props.fluid} />
      <div className={postContent}>
        <h2 className={postTitle}>
          {truncate(props.title, { length: 48, seperator: " " })}
        </h2>
        <p>{props.excerpt}</p>
        <Link to={props.slug}>
          <button className={button}>Read</button>
        </Link>
      </div>
    </div>
  )
}

export default Post
