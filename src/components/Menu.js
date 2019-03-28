import React from "react"
import { Link } from "gatsby"

export const Menu = () => {
  return (
    <div style = {{ backgroundColor: "#2F2F2F" }}>
      <ul style = {{ listStyle: "none", display: "flex", justifyContent: "space-evenly", width: "100%" }}>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/about">About</Link></li>    
        <li><Link to = "/blog">Blog</Link></li>    
      </ul>
    </div>
  )
}