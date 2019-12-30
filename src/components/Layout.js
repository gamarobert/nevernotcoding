import React from "react"
import PropTypes from "prop-types"
import Footer from "../components/Footer.js"
import Header from "../components/Header.js"
import layoutStyles from "./layout.module.css"
import "../global.css"

const Layout = ({ title, children }) => {
  const { site, siteContent } = layoutStyles

  return (
    <>
      <div className={site}>
        <Header title={title} />
        <main className={siteContent}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
}

export default Layout
