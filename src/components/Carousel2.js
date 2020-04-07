import React, { useState, useEffect, useLayoutEffect, useRef } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Edition from "./Edition"
import { navigate } from "gatsby"

const Carousel2 = ({ data, project, edition, prev, next }) => {
  const [limit, setLimit] = useState(0)
  const [index, setIndex] = useState(0)
  const [height, setHeight] = useState(0)
  const ref = useRef(null)
  const medias = data.photo

  // useEffect(() => {
  //   if (index === limit) {
  //     setIndex(limit - 1)
  //   }
  //   if (index < 0) {
  //     setIndex(0)
  //   }
  // }, [index])

  const prevClick = () => {
    if (index === 0) {
      navigate(`/edition/${prev}`)
    } else {
      setIndex(index => index - 1)
    }
  }

  const nextClick = () => {
    if (index === limit - 1) {
      navigate(`/edition/${next}`)
    } else {
      setIndex(index => index + 1)
    }
  }

  useEffect(() => {
    setLimit(medias.length)
  }, [])

  useLayoutEffect(() => {
    setHeight(ref.current.clientWidth / medias[0].fluid.aspectRatio)
  }, [])

  return (
    <div className={`carousel ${edition ? "carousel--edition" : ""}`} ref={ref}>
      <div className="carousel__inner" style={{ height: height }}>
        {medias.map((media, i) => (
          <div
            className={`carousel__item ${index === i ? "active" : ""}`}
            style={{ height: height }}
            key={media.id}
          >
            <Img fluid={media.fluid} alt={media.description} />
          </div>
        ))}

        <div
          className="carousel__control --prev"
          style={{ height: height }}
          onClick={prevClick}
        ></div>
        <div
          className="carousel__control --next"
          style={{ height: height }}
          onClick={nextClick}
        ></div>
      </div>
      <div className="carousel__info">
        <div className="carousel__header">
          <div className="carousel__title">
            <h2>{data.titre}</h2>
          </div>
          <div>
            {index + 1}/{limit}
          </div>
        </div>
      </div>
      <Edition data={data} />
      <div className="title__md">
        <h2>{project ? "projects" : "editions"}</h2>
      </div>
    </div>
  )
}

Carousel2.defaultProps = {
  data: [],
  project: false,
  edition: false,
}

Carousel2.propTypes = {
  data: PropTypes.object,
  project: PropTypes.bool,
  edition: PropTypes.bool,
}

export default Carousel2
