import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.css"

const { navbar, logo, logoLink, links, linkItem } = headerStyles

const Header = ({ title }) => {
  return (
    <header>
      <nav className={navbar}>
        <span className={logo}>
          <Link className={logoLink} to={"/"}>
            {title}
          </Link>
        </span>
        <ul className={links}>
          <li>
            <Link className={linkItem} to={"/"}>
              blog
            </Link>
          </li>
          <li>
            <Link className={linkItem} to={"/about"}>
              about
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
