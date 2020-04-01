import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Editions = () => {
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
  return (
    <div className="grid grid--editions">
      <div className="item">
        <div className="item__top">
          <div className="item__image">
            <Img
              fluid={data.img1.childImageSharp.fluid}
              alt="Picture of Valentin working"
            />
          </div>
          <Link to="/edition">
            <span>more infos</span>
          </Link>
        </div>
        <div className="item__content">
          <h2>titre</h2>
          <p>lorem ipsum viticula aero, 2019</p>
          <div className="mbm">
            <span className="item__copie">250 copies</span>
            <span className="item__language">French</span>
          </div>
          <div>
            <span className="item__price">€ 30</span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item__top">
          <div className="item__image">
            <Img
              fluid={data.img2.childImageSharp.fluid}
              alt="Picture of Valentin working"
            />
          </div>
          <Link to="/edition">
            <span>more infos</span>
          </Link>
        </div>
        <div className="item__content">
          <h2>titre</h2>
          <p>lorem ipsum viticula aero, 2019</p>
          <div className="mbm">
            <span className="item__copie">250 copies</span>
            <span className="item__language">French</span>
          </div>
          <div>
            <span className="item__price">€ 30</span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item__top">
          <div className="item__image">
            <Img
              fluid={data.img3.childImageSharp.fluid}
              alt="Picture of Valentin working"
            />
          </div>
          <Link to="/edition">
            <span>more infos</span>
          </Link>
        </div>
        <div className="item__content">
          <h2>titre</h2>
          <p>lorem ipsum viticula aero, 2019</p>
          <div className="mbm">
            <span className="item__copie">250 copies</span>
            <span className="item__language">French</span>
          </div>
          <div>
            <span className="item__price">€ 30</span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item__top">
          <div className="item__image">
            <Img
              fluid={data.img4.childImageSharp.fluid}
              alt="Picture of Valentin working"
            />
          </div>
          <Link to="/edition">
            <span>more infos</span>
          </Link>
        </div>
        <div className="item__content">
          <h2>titre</h2>
          <p>lorem ipsum viticula aero, 2019</p>
          <div className="mbm">
            <span className="item__copie">250 copies</span>
            <span className="item__language">French</span>
          </div>
          <div>
            <span className="item__price">€ 30</span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item__top">
          <div className="item__image">
            <Img
              fluid={data.img5.childImageSharp.fluid}
              alt="Picture of Valentin working"
            />
          </div>
          <Link to="/edition">
            <span>more infos</span>
          </Link>
        </div>
        <div className="item__content">
          <h2>titre</h2>
          <p>lorem ipsum viticula aero, 2019</p>
          <div className="mbm">
            <span className="item__copie">250 copies</span>
            <span className="item__language">French</span>
          </div>
          <div>
            <span className="item__price">€ 30</span>
          </div>
        </div>
      </div>
      <div className="title__md">
        <h2>editions</h2>
      </div>
    </div>
  )
}

export default Editions
