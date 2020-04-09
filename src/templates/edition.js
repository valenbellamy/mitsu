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
      date(locale: "")
      copie
      paypalId
      photo {
        id
        description
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const edition = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="Edition" />
      <Menu showFilters={true} showCart={true} />
      <div className="content">
        <Carousel2
          data={data.contentfulEdition}
          edition={true}
          prev={pageContext.prev.slug}
          next={pageContext.next.slug}
        />
      </div>
    </Layout>
  )
}

export default edition
