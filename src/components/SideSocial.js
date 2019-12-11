import React from "react"
import sideSocialStyles from "./sidesocial.module.css"

const {
  socialContainer,
  socialIcon,
  twitter,
  linkedin,
  youtube,
  instagram,
} = sideSocialStyles

const SideSocial = () => {
  return (
    <div className={socialContainer}>
      <p>Share!</p>
      <span className={`${socialIcon} ${youtube} fa fa-youtube-play`}></span>
      <span className={`${socialIcon} ${instagram} fa fa-instagram`}></span>
      <span className={`${socialIcon} ${linkedin} fa fa-linkedin`}></span>
      <span className={`${socialIcon} ${twitter} fa fa-twitter`}></span>
    </div>
  )
}

export default SideSocial
