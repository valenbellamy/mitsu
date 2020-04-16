import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Cart = () => {
  const paypalButton = useStaticQuery(graphql`
    query {
      contentfulImageBoutonPanier {
        id
        image {
          file {
            url
          }
        }
      }
    }
  `)
  return (
    <>
      <form
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input
          type="hidden"
          name="encrypted"
          value="-----BEGIN PKCS7-----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-----END PKCS7-----"
        />
        <input
          type="image"
          src={`${paypalButton.contentfulImageBoutonPanier.image.file.url}`}
          border="0"
          name="submit"
          alt="PayPal, le réflexe sécurité pour payer en ligne"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </>
  )
}

export default Cart
