import React from "react"
import { Link } from "gatsby"
import Header from "../components/header/header"

import "./blog.css"

const Blog = ({ data }) => {
  return (    
    <div className = "blog-root">
      <Header />
      <div className = "blog-list-wrapper">      
        <h1>Latest Posts</h1>
        <div className = "map-wrapper">

          {data.allMarkdownRemark.edges.map(post => (
            <div key = { post.node.id } className = "post-map-item">
              <h3>{post.node.frontmatter.title}</h3>
              <p>{ post.node.frontmatter.description }</p>
              <small>{ post.node.frontmatter.author }</small>              
              <small>{ post.node.frontmatter.date } - { post.node.frontmatter.length }</small>              
              <Link to = {post.node.frontmatter.path}>Read More -></Link>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogQuery {    
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            length
            description
          }            
        }
      }
    }    
  }
`

export default Blog