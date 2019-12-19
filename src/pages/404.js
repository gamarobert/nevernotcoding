import React from "react"
import { graphql, Link } from "gatsby"
import errorStyles from "./404.module.css"

export default ({ data }) => {
  const pages = data.allSitePage.edges
  const { container, title, text, button, list } = errorStyles

  return (
    <div className={container}>
      <h1 className={title}>404</h1>
      <p className={text}>Oops! This page seems to be missing... :(</p>

      <button className={button}>
        <Link to="/">Go Back Home!</Link>
      </button>

      <p>Maybe some of these links are what you were looking for?</p>
      <ul className={list}>
        {pages.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.path}>{node.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    allSitePage(
      filter: { path: { nin: ["/dev-404-page/", "/404/", "/404.html", "/"] } }
    ) {
      edges {
        node {
          id
          path
        }
      }
    }
  }
`
