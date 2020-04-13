import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slider = ({ activeItem }) => {
  const [index, setIndex] = useState(0)
  const [limit, setLimit] = useState(null)

  const data = useStaticQuery(graphql`
    query {
      allContentfulProjet(sort: { fields: ordre, order: DESC }) {
        edges {
          node {
            couverture {
              id
              description
              file {
                contentType
                url
              }
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
    setLimit(data.allContentfulProjet.edges.length)
  }, [])

  useEffect(() => {
    if (activeItem !== null) {
      setIndex(activeItem)
    }
    // console.log("active item " + activeItem)
    // console.log("index " + index)
  }, [activeItem])

  // useEffect(() => {
  //   if (index === limit) {
  //     setIndex(0)
  //   }
  // }, [index])

  const increment = index => {
    if (index === limit - 1) {
      setIndex(0)
    } else {
      setIndex(index => index + 1)
    }
  }

  console.log(data.allContentfulProjet)

  return (
    <div className="sliderHome">
      {data.allContentfulProjet.edges.map((photo, i) => (
        <div
          className={`slide ${index === i ? "active" : ""}`}
          key={photo.node.couverture.id}
          onClick={() => increment(index)}
        >
          {photo.node.couverture.file.contentType.includes("video") ? (
            <video playsInline loop autoPlay muted>
              <source
                src={photo.node.couverture.file.url}
                type={photo.node.couverture.file.contentType}
              />
            </video>
          ) : (
            <Img
              fluid={photo.node.couverture.fluid}
              alt={photo.node.couverture.description}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default Slider
