import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Edition = ({ data }) => {
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
  const {
    taille,
    prix,
    page,
    langue,
    date,
    copie,
    description,
    paypalId,
  } = data
  return (
    <div className="edition-detail">
      <div className="edition-detail__description">
        {documentToReactComponents(description.json)}
      </div>
      <div className="edition-detail__list">
        <span>{page}</span>
        <span>{taille}</span>
        <span>{date}</span>
        <span>
          {langue}, {copie}
        </span>
      </div>
      <div className="edition-detail__footer">
        <span className="edition-detail__price">€ {prix}</span>
        {paypalId && (
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
                value={`${paypalId}`}
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
  )
}

export default Edition
