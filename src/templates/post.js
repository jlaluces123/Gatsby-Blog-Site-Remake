import React from "react";
import { Link, graphql } from "gatsby"
import Header from "../components/header/header.js"

import "./post.css"

/* This is the component for the individual blog pages */
const Template = ({ data }) => {
  const post = data.markdownRemark

  return (
    <div className = "template-wrapper">
      <Header />
      <div className = "article-box">
        <Link to = "/blog">Go Back</Link>                      
        <h1>{ post.frontmatter.title }</h1>
        <h4 className = "post-author">{ post.frontmatter.author }</h4>
        <small>{ post.frontmatter.date }</small>
        <div dangerouslySetInnerHTML = {{ __html: post.html }} className = "html-block" /> {/* Allows for HTML markup inside */}
        </div>
    </div>
  )
}

export default Template

/* Need to create a query for the data now */
/* markDownRemark frontmatter where the path === path brought in */
/* Now we need to configure a way for gatsby to recognize which page to load --> gatsby-node.js */
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path} }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`