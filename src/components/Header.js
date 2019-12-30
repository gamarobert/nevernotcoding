import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"
import PropTypes from "prop-types"

const Header = ({ title }) => {
  const {
    navbar,
    mainNav,
    navItem,
    logo,
    toggle,
    menuIcon,
    active,
  } = headerStyles

  const handleClick = e => {
    e.preventDefault()
    let mainNav = document.getElementById("menu")
    let menuIcon = document.getElementById("menu-icon")

    if (!mainNav.classList.contains(toggle)) {
      mainNav.classList.add(toggle)
      menuIcon.classList.remove("fa-bars")
      menuIcon.classList.add("fa-times")
    } else {
      mainNav.classList.remove(toggle)
      menuIcon.classList.remove("fa-times")
      menuIcon.classList.add("fa-bars")
    }
  }
  return (
    <header>
      <nav className={navbar}>
        <span
          className={`${menuIcon} fa fa-bars`}
          id="menu-icon"
          onClick={handleClick}
          onKeyDown={handleClick}
          role="button"
          tabIndex="0"
        />
        <div className={logo}>
          <Link to={"/"}>{title}</Link>
        </div>
        <ul className={mainNav} id="menu">
          <li className={navItem}>
            <Link activeClassName={active} to={"/"}>
              ./home
            </Link>
          </li>
          <li className={navItem}>
            <Link activeClassName={active} to={"/about"}>
              ./about
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
