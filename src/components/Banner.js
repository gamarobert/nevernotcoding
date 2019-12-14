import React from "react"
import logo from "../../content/assets/Logo.svg"
import bannerImg from "../../content/assets/banner.jpg"
import bannerStyles from "./banner.module.css"
const { banner, center } = bannerStyles

const Banner = () => {
  return (
    <div
      style={{
        backgroundPosition: "bottom",
        backgroundSize: "900px",
        backgroundImage: `url('${bannerImg}')`,
      }}
      className={banner}
    >
      <img className={center} src={logo} alt="Logo" />
    </div>
  )
}

export default Banner
