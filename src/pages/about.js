import React from "react"
import Header from "../components/header/header.js"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import "./about.css"

const About = (props) => {
  return (
    <div className = "about-page-wrapper">
      <Header />
      <div className = "content-wrapper">          
        <div className = "large-img-wrapper left-side"> 
          <Img className = "profile-img" fluid={props.data.imageOne.childImageSharp.fluid} />          
        </div>

        <div className = "large-text-wrapper right-side">
          <section className = "summary-wrapper">   
            <h3 className = "section-header">So Who Am I?</h3>             
            <p className = "summary-paragraph">This is where the summary goes</p>
          </section>

          <section className = "facts-wrapper">
            <h3 className = "section-header">Some Fun Facts About Me</h3>
            <ul className = "facts-list">
              <li className = "facts-item">Item Here</li>
              <li className = "facts-item">Item Here</li>
              <li className = "facts-item">Item Here</li>
              <li className = "facts-item">Item Here</li>
              <li className = "facts-item">Item Here</li>
            </ul>
          </section>

          <section className = "skills-wrapper">
            <p>Some sort of skills information picture here!</p>
          </section>
        </div>

      </div>
    </div>
  ) 
}

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "Standing_Vertical.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`



export default About;