import React from "react"
import { Link } from "gatsby"
import "../global.css"

import layoutStyles from "./layout.module.css"

const Layout = ({ title, children }) => {
  return (
    <>
      <div className='site'>
        <header>
          <nav className={layoutStyles.navbar}>
            <span className={layoutStyles.logo}>
              <Link className={layoutStyles.logoLink} to={"/"}>
                {title}
              </Link>
            </span>
            <ul className={layoutStyles.links}>
              <li>
                <Link className={layoutStyles.linkItem} to={"/"}>
                  blog
                </Link>
              </li>
              <li>
                <Link className={layoutStyles.linkItem} to={"/about"}>
                  about
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className='site-content'>{children}</main>
        <footer style={{ height: "3rem", background: "black", color: "white" }}>
          Footer
        </footer>
      </div>
    </>
  )
}

export default Layout
