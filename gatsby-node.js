/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/* Using the createPage API so we can have the other pages like post-one rendered */
const path = require("path"); // --> Node.JS module

exports.createPages = ({ boundActionCreators, graphql }) => { // --> registering our posts so we can use the urls in the frontmatter
  const { createPage } = boundActionCreators
  const postTemplate = path.resolve("src/templates/post.js"); // --> Actual template form page

  /* Want to return a graphql query now: this gives us a promise */
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
      }
    }
  `)
  .then (res => { // --> if data comes through aka the allMarkDownRemark query went through, take the data and register
    res.data.allMarkdownRemark.edges.forEach( ({ node }) => {
      if (res.errors) {
        return Promise.reject(res.errors)
      }

      createPage({ 
        path: node.frontmatter.path, 
        component: postTemplate // --> from up above
      })
    })
  })  
} 
