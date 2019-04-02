import React from "react"
import { Link } from "gatsby"
import "./Menu.css"

export const Menu = () => {
  return (
    <div className = "menu-component-wrapper">
      <ul className = "page-nav">
        <li><Link to = "/" className = "nav-item">Home</Link></li>
        <li><Link to = "/blog" className = "nav-item">Blog</Link></li>
        <li><Link to = "/about" className = "nav-item">About</Link></li>
      </ul>

      <ul className = "page-nav">
        <li><Link to = "/" className = "nav-item">Home</Link></li>
        <li><Link to = "/blog" className = "nav-item">Blog</Link></li>
        <li><Link to = "/about" className = "nav-item">About</Link></li>
      </ul>
    </div>
  )
}