import React from "react"
import PropTypes from "prop-types"
import "../global.css"

const Tab = props => {
  let className = "tab-list-item"

  if (props.label === props.active) {
    className += " active"
  }

  const onClick = () => {
    props.onClick(props.label)
  }

  return (
    <li onClick={onClick} className={className}>
      {props.label}
    </li>
  )
}

Tab.propTypes = {
  label: PropTypes.string,
}

export default Tab
