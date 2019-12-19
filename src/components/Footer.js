import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import footerStyles from "./footer.module.css"

const Footer = () => {
  const [state, setState] = useState({
    email: "",
    result: "",
  })

  const handleEmailChange = e => {
    setState({
      ...state,
      email: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const result = await addToMailchimp(state.email)
    setState({
      ...state,
      result,
    })
  }

  return (
    <footer className={footerStyles.footer}>
      <form className={footerStyles.newsLetter} onSubmit={handleSubmit}>
        <h3>Sign Up For Our News Letter</h3>
        <input
          className={footerStyles.newsLetterInput}
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input
          type="submit"
          className={footerStyles.submitBtn}
          placeholder="Submit"
        />

        {state.result.result === "error" ? (
          <div style={{ display: "block", marginTop: "20px", color: "red" }}>
            {/* manipulation of mail chimp response for error */}
            {state.result.msg.split(". ")[0]}
          </div>
        ) : (
          <div style={{ display: "block", marginTop: "20px" }}>
            {state.result.msg}
          </div>
        )}
      </form>
      <div className={footerStyles.socialContainer}>
        <a href="https://www.youtube.com/channel/UCD58OI8Vu_81SvbzOXhOOHA">
          <span
            className={`${footerStyles.socialIcon} ${footerStyles.youtube} fa fa-youtube-play`}
          />
        </a>

        <a href="https://www.instagram.com/nevernotcoding">
          <span
            className={`${footerStyles.socialIcon} ${footerStyles.instagram} fa fa-instagram`}
          />
        </a>

        {/* <a href="https://www.linkedin.com">
          <span
            className={`${footerStyles.socialIcon} ${footerStyles.linkedin} fa fa-linkedin`}
          />
        </a> */}

        <a href="https://www.twitter.com/nevernotcoding1">
          <span
            className={`${footerStyles.socialIcon} ${footerStyles.twitter} fa fa-twitter`}
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
