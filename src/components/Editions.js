import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Editions = ({ editions }) => {
  const paypalButton = useStaticQuery(graphql`
    query {
      contentfulImageBoutonPaypal {
        id
        bouton {
          file {
            url
          }
        }
      }
    }
  `)
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
              {edition.node.introduction && (
                <>
                  {edition.node.introduction}
                  {", "}
                </>
              )}
              {edition.node.date && <>{edition.node.date}</>}
            </p>
            <div className="mbm">
              {edition.node.copie && (
                <span className="item__copie">{edition.node.copie}</span>
              )}
              {edition.node.langue && (
                <span className="item__language">{edition.node.langue}</span>
              )}
            </div>
            <div className="item__footer">
              {edition.node.prix && <span>€ {edition.node.prix}</span>}
              {edition.node.paypalId && (
                <div className="paypal__btn">
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="paypal"
                  >
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      value={`${edition.node.paypalId}`}
                    />
                    <input
                      type="image"
                      src={`${paypalButton.contentfulImageBoutonPaypal.bouton.file.url}`}
                      border="0"
                      name="submit"
                      alt="PayPal - The safer, easier way to pay online!"
                    />
                    <img
                      alt=""
                      border="0"
                      src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif"
                      width="1"
                      height="1"
                    />
                  </form>
                </div>
              )}
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
