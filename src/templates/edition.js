import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Carousel2 from "../components/Carousel2"
import SEO from "../components/seo"
import Menu from "../components/Menu"

export const query = graphql`
  query($slug: String!) {
    contentfulEdition(slug: { eq: $slug }) {
      titre
      taille
      prix
      page
      langue
      description {
        json
      }
      date
      copie
      paypalId
      photo {
        id
        description
        fluid(quality: 90) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
    contentfulVariableCouleur {
      valeur
    }
  }
`

const edition = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="Edition" />
      <Menu showFilters={true} showCart={true} specialPaddingXs={true} />
      <div className="content">
        <Carousel2
          data={data}
          edition={true}
          prev={pageContext.prev.slug}
          next={pageContext.next.slug}
        />
      </div>
    </Layout>
  )
}

export default edition
