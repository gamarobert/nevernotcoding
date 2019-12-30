import React from "react"
import PropTypes from "prop-types"
import "../global.css"
import tabStyles from "./tab.module.css"

const Tab = ({ label, isActive, onClick }) => {
  const { tabListItem, active } = tabStyles

  const handleClick = () => {
    onClick(label)
  }

  return (
    <button
      className={label === isActive ? `${tabListItem} ${active}` : tabListItem}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      {label}
    </button>
  )
}

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Tab
