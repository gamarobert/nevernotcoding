import React from "react"
import PropTypes from "prop-types"
import "../global.css"
import tabStyles from "./tab.module.css"

const { tabListItem, active } = tabStyles

const Tab = props => {
  const onClick = () => {
    props.onClick(props.label)
  }

  return (
    <li
      onClick={onClick}
      className={
        props.label === props.active ? `${tabListItem} ${active}` : tabListItem
      }
    >
      {props.label}
    </li>
  )
}

Tab.propTypes = {
  label: PropTypes.string,
}

export default Tab
