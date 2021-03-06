import React, { useState, useEffect, useLayoutEffect, useRef } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Project from "./Project"
import { navigate } from "gatsby"
import Video from "./Video"
//import { useDrag } from "react-use-gesture"

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

const Carousel = ({ data, project, prev, next }) => {
  const [limit, setLimit] = useState(0)
  const [index, setIndex] = useState(0)
  const [height, setHeight] = useState(0)
  const [transition, setTransition] = useState(false)
  const [currentSystem, setCurrentSystem] = useState("")
  const [currentBrowser, setCurrentBrowser] = useState("")
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const medias = data.contentfulProjet.carousel

  const prevClick = () => {
    if (index === 0) {
      navigate(`/project/${prev}`)
    } else {
      setIndex(index => index - 1)
    }
  }

  const nextClick = () => {
    if (index === limit - 1) {
      navigate(`/project/${next}`)
    } else {
      setIndex(index => index + 1)
    }
  }

  useEffect(() => {
    setLimit(data.contentfulProjet.carousel.length)
    setTransition(true)
    const currentSystem = getMobileOperatingSystem()
    setCurrentSystem(currentSystem)
    const currentBrowser = getBrowser()
    setCurrentBrowser(currentBrowser)
  }, [])

  useLayoutEffect(() => {
    computeHeight()
    window.addEventListener("resize", computeHeight)
    return () => window.removeEventListener("resize", computeHeight)
  }, [])

  const computeHeight = () => {
    for (var i = 0; i < data.contentfulProjet.carousel.length; i++) {
      if (!data.contentfulProjet.carousel[i].isVideo) {
        setHeight(
          ref.current.clientWidth /
            data.contentfulProjet.carousel[i].media.fluid.aspectRatio
        )
        return
      } else {
        setHeight(ref.current.clientWidth / 1.77)
        return
      }
    }
  }

  return (
    <>
      <div
        className={`carousel ${transition ? "--transition-over" : ""}`}
        ref={ref}
      >
        <div className={`carousel__inner `}>
          {medias.map((media, i) => (
            <div
              className={`carousel__item ${index === i ? "active" : ""}`}
              key={media.id}
            >
              <div className="item__inner" style={{ height: height }}>
                {media.isVideo ? (
                  <Video
                    videoMp4={media.media}
                    videoWebm={media.mediaWebm}
                    poster={media.poster}
                    system={currentSystem}
                    browser={currentBrowser}
                    placeholder={data.contentfulVideoPlaceholder.image.file.url}
                    position={i}
                    currentSlide={index}
                  />
                ) : (
                  <Img
                    fluid={media.media.fluid}
                    alt={media.media.description}
                    backgroundColor={`${data.contentfulVariableCouleur.valeur}`}
                  />
                )}
              </div>

              <div className="carousel__info">
                <div className="carousel__header">
                  <div className="carousel__title">
                    <div>
                      <h2>{data.contentfulProjet.titre}</h2>
                      {media.titre && <h3>{media.titre}</h3>}
                    </div>
                    {media.categorie && (
                      <ul>
                        {media.categorie.map((cat, indexMedia) => (
                          <li key={cat.id}>
                            {cat.nom +
                              (indexMedia !== media.categorie.length - 1
                                ? ", "
                                : "")}
                          </li>
                        ))}
                      </ul>
                    )}
                    {media.date && <h3>{media.date}</h3>}
                  </div>
                  <div className="carousel__index">
                    {index + 1}/{limit}
                  </div>
                </div>
              </div>
              {media.contenu && (
                <Project
                  content={media.contenu}
                  open={open}
                  setOpen={setOpen}
                />
              )}
            </div>
          ))}

          <button
            className="carousel__control --prev"
            style={{ height: height }}
            onClick={prevClick}
            type="button"
            aria-label="previous"
          ></button>
          <button
            className="carousel__control --next"
            style={{ height: height }}
            onClick={nextClick}
            type="button"
            aria-label="next"
          ></button>
        </div>
      </div>
      <div className="title__md">
        <h2>projects</h2>
      </div>
    </>
  )
}

Carousel.defaultProps = {
  data: [],
  project: false,
  edition: false,
}

Carousel.propTypes = {
  data: PropTypes.object,
  project: PropTypes.bool,
  edition: PropTypes.bool,
}

export default Carousel
