import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className = "home-header">The Thoughts Of A Developer</h1>     
    <p className = "home-paragraph">Welcome to my blog website! <br /> Feel free to check out my blog posts as well as learn more about me!</p>
    <Link to="/blog/" className = "all-posts">All Posts</Link>
  </Layout>
)

export default IndexPage
