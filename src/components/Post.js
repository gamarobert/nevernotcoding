import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Post = props => {
  return (
    <div className="post-item">
      <span className="overlay"></span>
      <Img className="featured-image" fluid={props.fluid} />
      <div className="post-content">
        <h2 className="post-title">{props.title}</h2>
        <p>{props.excerpt}</p>
        <Link to={props.slug}>
          <button className="button">Read</button>
        </Link>
      </div>
    </div>
  )
}

export default Post