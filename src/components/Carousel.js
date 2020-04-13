import React, { useState, useEffect, useLayoutEffect, useRef } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Project from "./Project"
import { navigate } from "gatsby"
import { useDrag } from "react-use-gesture"

const Carousel = ({ data, project, prev, next }) => {
  const [limit, setLimit] = useState(0)
  const [index, setIndex] = useState(0)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
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

  const bind = useDrag(
    ({
      swipe: [swipeX],
      tap,
      direction: [directionX],
      initial: [initialX],
      dragging,
      elapsedTime,
    }) => {
      // position will either be -1, 0 or 1
      if (tap && initialX > width / 2 && elapsedTime > 0) {
        nextClick()
      }
      if (tap && initialX < width / 2 && elapsedTime > 0) {
        prevClick()
      }
      if (!dragging && swipeX === -1) {
        prevClick()
      }
      if (!dragging && swipeX === 1) {
        nextClick()
      }
    },
    { filterTaps: true, lockDirection: true }
  )

  useEffect(() => {
    setLimit(data.contentfulProjet.carousel.length)
    setWidth(window.innerWidth)
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
        break
      }
    }
  }

  return (
    <div className={`carousel`} ref={ref}>
      <div className="carousel__inner">
        {medias.map((media, i) => (
          <div
            className={`carousel__item ${index === i ? "active" : ""}`}
            key={media.id}
          >
            <div className="item__inner" style={{ height: height }}>
              {media.isVideo ? (
                <video
                  playsInline
                  loop
                  autoPlay
                  muted
                  poster={data.contentfulVideoPlaceholder.image.file.url}
                >
                  <source src={media.media.file.url} type="video/mp4" />
                </video>
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
                <div>
                  {index + 1}/{limit}
                </div>
              </div>
            </div>
            {media.contenu && <Project content={media.contenu} />}
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
        <button
          className="carousel__control --swipe"
          style={{ height: height }}
          {...bind()}
          type="button"
          aria-label="swipe"
        ></button>
      </div>
      {/* <div className="carousel__info">
        <div className="carousel__header">
          <div className="carousel__title">
            <h2>{data.contentfulProjet.client}</h2>
            {project && (
              <>
                <h3>titre</h3>
                <ul>
                  <li>categorie 1,</li>
                  <li>categorie 2,</li>
                  <li>art direction</li>
                </ul>
                <h3>année</h3>
              </>
            )}
          </div>
          <div>
            {index + 1}/{limit}
          </div>
        </div>
      </div>
      {project && <Project />}
      {edition && <Edition />} */}
      <div className="title__md">
        <h2>{project ? "projects" : "editions"}</h2>
      </div>
    </div>
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
