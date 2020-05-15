import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Editions from "../components/Editions"
import SEO from "../components/seo"
import Menu from "../components/Menu"

export const query = graphql`
  query($nom: String!) {
    allContentfulEdition(
      filter: { collection: { nom: { eq: $nom } } }
      sort: { fields: ordre, order: DESC }
    ) {
      edges {
        node {
          id
          titre
          prix
          langue
          introduction
          date(locale: "")
          copie
          slug
          paypalId
          couverture {
            description
            fluid {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
    contentfulVariableCouleur {
      valeur
    }
  }
`

const collection = ({ data, pageContext }) => {
  return (
    <Layout>
      <main>
        <SEO title={pageContext.nom} />
        <Menu showFilters={true} showCart={true} specialPaddingXs={true} />
        <div className="content">
          {/* <Editions
            editions={data.allContentfulEdition}
            bg={data.contentfulVariableCouleur}
          /> */}
          <h1 className="special-h1 --normal">Coming soon.</h1>
        </div>
      </main>
    </Layout>
  )
}

export default collection
