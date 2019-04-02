import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout.js"
// import Image from "../components/image"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>The Thoughts Of A Developer</h1>     
    <div className = "image-wrapper"></div>
    <Link to="/blog/">All Posts</Link>
  </Layout>
)

export default IndexPage
