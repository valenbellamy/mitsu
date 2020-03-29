import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slider = () => {
  const [index, setIndex] = useState(0)

  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "photo1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "photo2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(relativePath: { eq: "photo3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  //console.log(data)

  useEffect(() => {
    const limit = 3
    //console.log(limit)
    if (index === limit) {
      setIndex(0)
    }
  }, [index])

  return (
    <div className="sliderHome">
      <div
        className={`slide ${index === 0 ? "active" : ""}`}
        onClick={() => setIndex(index => index + 1)}
      >
        <Img
          fluid={data.img1.childImageSharp.fluid}
          alt="Picture of Valentin working"
        />
      </div>
      <div
        className={`slide ${index === 1 ? "active" : ""}`}
        onClick={() => setIndex(index => index + 1)}
      >
        <Img
          fluid={data.img2.childImageSharp.fluid}
          alt="Picture of Valentin working"
        />
      </div>
      <div
        className={`slide ${index === 2 ? "active" : ""}`}
        onClick={() => setIndex(index => index + 1)}
      >
        <Img
          fluid={data.img3.childImageSharp.fluid}
          alt="Picture of Valentin working"
        />
      </div>
    </div>
  )
}

export default Slider
