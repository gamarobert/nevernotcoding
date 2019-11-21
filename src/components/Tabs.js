import React, { useState } from "react"
import Tab from "../components/Tab.js"
import "../global.css"

const Tabs = props => {
  const [active, setActive] = useState(props.children[0].props.label)

  const onClickTab = label => {
    setActive(label)
  }
  return (
    <>
      <div className="tabs">
        <ul className="tab-list" role="tablist">
          {props.children.map(child => {
            const { label } = child.props
            return (
              <Tab
                active={active}
                onClick={onClickTab}
                key={label}
                label={label}
              />
            )
          })}
        </ul>
      </div>

      <div className="tab-content">
        {props.children.map(child => {
          if (child.props.label === active) return child.props.children
          return undefined
        })}
      </div>
    </>
  )
}

export default Tabs

/*
1. categories for blog posts
2. graphql for getting posts
3. display as tabs
4. display posts in tabs respectively
*/
