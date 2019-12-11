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
          // className="button submit-btn"
          className={footerStyles.submitBtn}
          placeholder="Submit"
        />

        {state.result.result === "error" ? (
          <div style={{ display: "block", marginTop: "20px", color: "red" }}>
            {state.result.msg.split(". ")[0]}
          </div>
        ) : (
          <div style={{ display: "block", marginTop: "20px" }}>
            {state.result.msg}
          </div>
        )}
      </form>
      <div className={footerStyles.socialContainer}>
        <span className={`${footerStyles.socialIcon} fa fa-youtube-play`} />
        <span className={`${footerStyles.socialIcon} fa fa-instagram`} />
        <span className={`${footerStyles.socialIcon} fa fa-linkedin`} />
        <span className={`${footerStyles.socialIcon} fa fa-twitter`} />
      </div>
    </footer>
  )
}

export default Footer
