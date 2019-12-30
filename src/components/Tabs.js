import React, { useState } from "react"
import PropTypes from "prop-types"
import Tab from "../components/Tab.js"
import "../global.css"
import tabsStyles from "./tabs.module.css"

const Tabs = props => {
  const [active, setActive] = useState(props.children[0].props.label)

  const onClickTab = label => {
    setActive(label)
  }

  const { tabs, tabList } = tabsStyles

  return (
    <>
      <div className={tabs}>
        <div className={tabList} role="tablist">
          {props.children.map(child => {
            const { label } = child.props
            return (
              <Tab
                isActive={active}
                onClick={onClickTab}
                key={label}
                label={label}
              />
            )
          })}
        </div>
      </div>

      <div>
        {props.children.map(child => {
          if (child.props.label === active) return child.props.children
          return undefined
        })}
      </div>
    </>
  )
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Tabs
