import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Menu } from "../menu/Menu.js"


const Header = ({ siteTitle }) => (
  <header className = "menu-nav-wrapper">
    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
