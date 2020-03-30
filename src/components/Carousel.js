import React, { useState, useEffect, useLayoutEffect, useRef } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Project from "./Project"
import Edition from "./Edition"

const Carousel = ({ data, project, edition }) => {
  const [limit, setLimit] = useState(0)
  const [index, setIndex] = useState(0)
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    if (index === limit) {
      setIndex(limit - 1)
    }
    if (index < 0) {
      setIndex(0)
    }
  }, [index])

  useEffect(() => {
    setLimit(5)
  }, [])

  useLayoutEffect(() => {
    setHeight(
      ref.current.clientWidth / data.img1.childImageSharp.fluid.aspectRatio
    )
  }, [])

  return (
    <div className={`carousel ${edition ? "carousel--edition" : ""}`} ref={ref}>
      <div className="carousel__inner" style={{ height: height }}>
        <div
          className={`carousel__item ${index === 0 ? "active" : ""}`}
          style={{ height: height }}
        >
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Picture of Valentin working"
          />
        </div>
        <div
          className={`carousel__item ${index === 1 ? "active" : ""}`}
          style={{ height: height }}
        >
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Picture of Valentin working"
          />
        </div>
        <div
          className={`carousel__item ${index === 2 ? "active" : ""}`}
          style={{ height: height }}
        >
          <Img
            fluid={data.img3.childImageSharp.fluid}
            alt="Picture of Valentin working"
          />
        </div>
        <div
          className={`carousel__item ${index === 3 ? "active" : ""}`}
          style={{ height: height }}
        >
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt="Picture of Valentin working"
          />
        </div>
        <div
          className={`carousel__item ${index === 4 ? "active" : ""}`}
          style={{ height: height }}
        >
          <Img
            fluid={data.img5.childImageSharp.fluid}
            alt="Picture of Valentin working"
          />
        </div>
        <div
          className="carousel__control --prev"
          style={{ height: height }}
          onClick={() => setIndex(index => index - 1)}
        ></div>
        <div
          className="carousel__control --next"
          style={{ height: height }}
          onClick={() => setIndex(index => index + 1)}
        ></div>
      </div>
      <div className="carousel__info">
        <div className="carousel__header">
          <div className="carousel__title">
            <h2>titre</h2>
            {project && (
              <>
                <ul>
                  <li>categorie 1,</li>
                  <li>categorie 2</li>
                </ul>
              </>
            )}
          </div>
          <div>
            {index + 1}/{limit}
          </div>
        </div>
      </div>
      {project && <Project />}
      {edition && <Edition />}
      {/* <div>
        <div className={open ? "project__text --open" : "project__text"}>
          <span className="trigger" onClick={() => setOpen(open => !open)}>
            {open ? "- less infos" : "+"}
          </span>
          <div>
            Aenean ornare eros sed bibendum placerat. Proin faucibus iaculis
            nibh in rhoncus. Morbi eu accumsan felis. Nam interdum lacus ante.
          </div>
        </div>
      </div> */}
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
