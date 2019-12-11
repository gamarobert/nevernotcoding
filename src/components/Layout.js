import React from "react"
import Footer from "../components/Footer.js"
import Header from "../components/Header.js"
import "../global.css"
import layoutStyles from "./layout.module.css"

const { site, siteContent } = layoutStyles

const Layout = ({ title, children }) => {
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

export default Layout
