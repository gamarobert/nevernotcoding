import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.css"

const { navbar, logo, logoLink, links, linkItem, menuIcon } = headerStyles

const Header = ({ title }) => {
  return (
    <header>
      <nav className={navbar}>
        <span className={logo}>
          <Link className={logoLink} to={"/"}>
            {title}
          </Link>
        </span>
        <div>
          <ul className={links}>
            <li>
              <Link className={linkItem} to={"/"}>
                home
              </Link>
            </li>
            <li>
              <Link className={linkItem} to={"/about"}>
                about
              </Link>
            </li>
          </ul>
          <div className={`${menuIcon} fa fa-bars`} />
        </div>
      </nav>
    </header>
  )
}

export default Header
