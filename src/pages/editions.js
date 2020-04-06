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
          couverture {
            description
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const editions = ({ data }) => {
  return (
    <Layout>
      <SEO title="Editions" />
      <Menu showFilters={true} showCart={true} />
      <div className="content">
        <Editions editions={data.allContentfulEdition} />
      </div>
    </Layout>
  )
}

export default editions
