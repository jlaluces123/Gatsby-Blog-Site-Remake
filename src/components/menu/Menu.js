import React from "react"
import { Link } from "gatsby"
import "./Menu.css"

export const Menu = () => {
  return (
    <div className = "menu-component-wrapper">
      <ul className = "page-nav">
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/blog">Blog</Link></li>
        <li><Link to = "/about">About</Link></li>
      </ul>
    </div>
  )
}