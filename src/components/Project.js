import React, { useState, useEffect, useLayoutEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Project = () => {
  const [limit, setLimit] = useState(0)
  const [index, setIndex] = useState(0)
  const [height, setHeight] = useState(0)
  const [open, setOpen] = useState(0)
  const ref = useRef(null)

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
      img4: file(relativePath: { eq: "photo4.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img5: file(relativePath: { eq: "photo5.jpg" }) {
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
    <div className="project" ref={ref}>
      <div className="project__slider" style={{ height: height }}>
        <div
          className={`project__slide ${index === 0 ? "active" : ""}`}
          style={{ height: height }}
        >
          <Img
            fluid={data.img1.childImageSharp.fluid}
            alt="Picture of Valentin working"
          />
        </div>
        <div
          className={`project__slide ${index === 1 ? "active" : ""}`}
          style={{ height: height }}
        >
          <Img
            fluid={data.img2.childImageSharp.fluid}
            alt="Picture of Valentin working"
          />
        </div>
        <div
          className={`project__slide ${index === 2 ? "active" : ""}`}
          style={{ height: height }}
        >
          <Img
            fluid={data.img3.childImageSharp.fluid}
            alt="Picture of Valentin working"
          />
        </div>
        <div
          className={`project__slide ${index === 3 ? "active" : ""}`}
          style={{ height: height }}
        >
          <Img
            fluid={data.img4.childImageSharp.fluid}
            alt="Picture of Valentin working"
          />
        </div>
        <div
          className={`project__slide ${index === 4 ? "active" : ""}`}
          style={{ height: height }}
        >
          <Img
            fluid={data.img5.childImageSharp.fluid}
            alt="Picture of Valentin working"
          />
        </div>
        <div
          className="prev"
          style={{ height: height }}
          onClick={() => setIndex(index => index - 1)}
        ></div>
        <div
          className="next"
          style={{ height: height }}
          onClick={() => setIndex(index => index + 1)}
        ></div>
      </div>
      <div className="project__info">
        <div className="project__header">
          <div className="project__title">
            <h2>titre projet</h2>
            <ul>
              <li>categorie 1,</li>
              <li>categorie 2</li>
            </ul>
            <span>date</span>
          </div>
          <div>
            {index + 1}/{limit}
          </div>
        </div>
        <div className={open ? "project__text --open" : "project__text"}>
          <span className="trigger" onClick={() => setOpen(open => !open)}>
            {open ? "- less infos" : "+"}
          </span>
          <div>
            Aenean ornare eros sed bibendum placerat. Proin faucibus iaculis
            nibh in rhoncus. Morbi eu accumsan felis. Nam interdum lacus ante.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
