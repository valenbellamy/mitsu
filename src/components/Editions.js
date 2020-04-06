import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Editions = ({ editions }) => {
  return (
    <div className="grid grid--editions">
      {editions.edges.map(edition => (
        <div className="item" key={edition.node.id}>
          <div className="item__top">
            <div className="item__image">
              <Img
                fluid={edition.node.couverture.fluid}
                alt={edition.node.couverture.description}
              />
            </div>
            <Link to={`/edition/${edition.node.slug}`}>
              <span>more infos</span>
            </Link>
          </div>
          <div className="item__content">
            <h2>{edition.node.titre}</h2>
            <p>
              {edition.node.introduction}, {edition.node.date}
            </p>
            <div className="mbm">
              <span className="item__copie">{edition.node.copie}</span>
              <span className="item__language">{edition.node.langue}</span>
            </div>
            <div>
              <span className="item__price">€ {edition.node.prix}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="title__md">
        <h2>editions</h2>
      </div>
    </div>
  )
}

export default Editions
