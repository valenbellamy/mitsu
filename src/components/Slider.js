import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone"
  }

  if (/android/i.test(userAgent)) {
    return "Android"
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS"
  }

  return "unknown"
}

function getBrowser() {
  var ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf("safari") !== -1) {
    if (ua.indexOf("chrome") > -1) {
      return "Chrome"
    } else {
      return "Safari"
    }
  } else {
    return "Not chrome or safari"
  }
}

const Slider = ({ activeItem }) => {
  const [index, setIndex] = useState(0)
  const [limit, setLimit] = useState(null)
  const [transition, setTransition] = useState(false)
  const [currentSystem, setCurrentSystem] = useState("")
  const [currentBrowser, setCurrentBrowser] = useState("")

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
              fluid(quality: 70) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
            couvertureWebm {
              file {
                contentType
                url
              }
            }
            poster {
              file {
                url
              }
            }
          }
        }
      }
      contentfulVideoPlaceholder {
        image {
          file {
            url
          }
        }
      }
      contentfulVariableCouleur {
        valeur
      }
    }
  `)

  useEffect(() => {
    setLimit(data.allContentfulProjet.edges.length)
    setTransition(true)
    const currentSystem = getMobileOperatingSystem()
    setCurrentSystem(currentSystem)
    const currentBrowser = getBrowser()
    setCurrentBrowser(currentBrowser)
    //console.log({ currentSystem, currentBrowser })
  }, [])

  useEffect(() => {
    if (activeItem !== null) {
      setIndex(activeItem)
    }
  }, [activeItem])

  const increment = index => {
    if (index === limit - 1) {
      setIndex(0)
    } else {
      setIndex(index => index + 1)
    }
  }

  return (
    <div className={`sliderHome ${transition ? "--transition-over" : ""}`}>
      {data.allContentfulProjet.edges.map((photo, i) => (
        <div
          className={`slide ${index === i ? "active" : ""}`}
          key={photo.node.couverture.id}
          onClick={() => increment(index)}
          onKeyDown={() => increment(index)}
          role="button"
          tabIndex={0}
        >
          {photo.node.couverture.file.contentType.includes("video") ? (
            <video
              playsInline
              autoPlay
              loop
              muted
              poster={
                photo.node.poster
                  ? photo.node.poster.file.url
                  : data.contentfulVideoPlaceholder.image.file.url
              }
            >
              {currentSystem === "iOS" || currentBrowser === "Safari" ? (
                <source
                  src={photo.node.couverture.file.url}
                  type={photo.node.couverture.file.contentType}
                />
              ) : (
                <source
                  src={photo.node.couvertureWebm.file.url}
                  type={photo.node.couvertureWebm.file.contentType}
                />
              )}
              <p>Sorry, the video can't be displayed with your browser.</p>
            </video>
          ) : (
            <Img
              fluid={photo.node.couverture.fluid}
              alt={photo.node.couverture.description}
              backgroundColor={`${data.contentfulVariableCouleur.valeur}`}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default Slider
