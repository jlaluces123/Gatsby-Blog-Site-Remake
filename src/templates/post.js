import React from "react";
import { Link, graphql } from "gatsby"

/* This is the component for the individual blog pages */
const Template = ({ data }) => {
  const post = data.markdownRemark

  return (
    <div>
      <Link to = "/blog">Go Back</Link>
      <h1>{ post.frontmatter.title }</h1>
      <h4>by { post.frontmatter.author }</h4>
      <small>{ post.frontmatter.date }</small>

      <div dangerouslySetInnerHTML = {{ __html: post.html }} /> {/* Allows for HTML markup inside */}
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