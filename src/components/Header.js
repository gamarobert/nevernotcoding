import React from "react"
import { Link } from "gatsby"

const Header = ({ title }) => {
  return (
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
  )
}

export default Header
