import React from "react"
import Footer from "../components/Footer.js"
import Header from "../components/Header.js"
import "../global.css"

const Layout = ({ title, children }) => {
  return (
    <>
      <div className="site">
        <Header title={title} />
        <main className="site-content">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
