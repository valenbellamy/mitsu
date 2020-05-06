import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Editions from "../components/Editions"
import SEO from "../components/seo"
import Menu from "../components/Menu"

export const query = graphql`
  query {
    allContentfulEdition(sort: { fields: ordre, order: DESC }) {
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

const editions = ({ data }) => {
  return (
    <Layout>
      <main>
        <SEO title="Editions" />
        <Menu showFilters={true} showCart={true} specialPaddingXs={true} />
        <div className="content">
          {/* <Editions
            editions={data.allContentfulEdition}
            bg={data.contentfulVariableCouleur}
          /> */}
          <h1 className="special-h1">Coming soon !</h1>
        </div>
      </main>
    </Layout>
  )
}

export default editions
