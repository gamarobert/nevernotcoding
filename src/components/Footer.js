import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

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
    <footer className="footer">
      <form className="news-letter" onSubmit={handleSubmit}>
        <h3>Sign Up For Our News Letter</h3>
        <input
          className="news-letter-input"
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input
          type="submit"
          className="button submit-btn"
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
      <div className="social-container">
        <span className="social-icon fa fa-youtube-play"></span>
        <span className="social-icon fa fa-instagram"></span>
        <span className="social-icon fa fa-linkedin"></span>
        <span className="social-icon fa fa-twitter"></span>
      </div>
    </footer>
  )
}

export default Footer
