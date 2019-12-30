import React from "react"
import PropTypes from "prop-types"
import bannerImg from "../../content/assets/banner.jpg"
import bannerStyles from "./banner.module.css"
const { banner, center } = bannerStyles

const Banner = ({ logo }) => {
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

Banner.propTypes = {
  logo: PropTypes.string,
}

export default Banner
