import React from "react"
import Header from "../components/header/header.js"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import "./about.css"

const About = (props) => {
  return (
    <div className = "about-page-wrapper">
      <Header />
      <h1 className = "page-title">About Me</h1>
      <div className = "content-wrapper">          
        <div className = "large-img-wrapper left-side"> 
          <Img className = "profile-img" fluid={props.data.imageOne.childImageSharp.fluid} />          
        </div>

        <div className = "large-text-wrapper right-side">
          <section className = "summary-wrapper">   
            <h3 className = "section-header">So Who Am I?</h3>             
            <p className = "summary-paragraph">
              My name is Jonathan Laluces. For over 10 years I have been a classical musician playing the cello. It was my life long dream to become a successful musician! I auditioned and was 
              admitted to numerous music programs in and out of school. Shortly after graduating High School in June of 2018, I began my newest journey, becoming a web developer. 

              <br />
              <br />
              The thing I love most about the world of web development is the challenge. Technologies, languages, and stacks are all changing constantly and it forces me to keep on my toes. Web 
              development provides a certain type of difficulty that I can't experience at any other type of job.       
            </p>
          </section>

          <section className = "facts-wrapper">
            <h3 className = "section-header">Some Fun Facts About Me</h3>
            <ul className = "facts-list">
              <li className = "facts-item">Currently learning Guitar and Piano</li>
              <li className = "facts-item">If I had a "strange addiction" it would absolutely be for french fries</li>
              <li className = "facts-item">Coding Bootcamp Graduate!</li>
              <li className = "facts-item">Currently own the world's most socially awkward dog</li>
              <li className = "facts-item">Aside from coding and music, I am an avid runner, always attending the annual 10K run in my area</li>
            </ul>
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