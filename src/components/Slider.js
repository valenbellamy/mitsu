import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slider = () => {
  const [index, setIndex] = useState(0)

  const data = useStaticQuery(graphql`
    query {
      allContentfulProjet(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            couverture {
              id
              description
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    const limit = data.allContentfulProjet.edges.length
    //console.log(limit)
    if (index === limit) {
      setIndex(0)
    }
  }, [index])

  return (
    <div className="sliderHome">
      {data.allContentfulProjet.edges.map((photo, i) => (
        <div
          className={`slide ${index === i ? "active" : ""}`}
          onClick={() => setIndex(index => index + 1)}
          key={photo.node.couverture.id}
        >
          <Img
            fluid={photo.node.couverture.fluid}
            alt={photo.node.couverture.description}
          />
        </div>
      ))}
    </div>
  )
}

export default Slider
