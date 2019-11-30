import React from "react"
import { Link } from "gatsby"
import "../global.css"

const Layout = ({ title, children }) => {
  return (
    <>
      <div className="site">
        <header>
          <nav className="navbar">
            <span className="logo">
              <Link className="logo-link" to={"/"}>
                {title}
              </Link>
            </span>
            <ul className="links">
              <li>
                <Link className="link-item" to={"/"}>
                  blog
                </Link>
              </li>
              <li>
                <Link className="link-item" to={"/about"}>
                  about
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="site-content">{children}</main>
        <footer className="footer">Footer</footer>
      </div>
    </>
  )
}

export default Layout
