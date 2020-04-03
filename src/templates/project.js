import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Carousel from "../components/Carousel"
import SEO from "../components/seo"
import Menu from "../components/Menu"

export const query = graphql`
  query($slug: String!) {
    contentfulProjet(slug: { eq: $slug }) {
      titre
      client
      carousel {
        id
        titre
        categorie {
          nom
          id
        }
        media {
          title
          description
          file {
            contentType
            url
          }
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        date(locale: "")
        contenu {
          json
        }
        isVideo
      }
    }
  }
`

const project = ({ data }) => {
  return (
    <Layout>
      <SEO title="Project" />
      <Menu showProjects={true} />
      <div className="content">
        <Carousel data={data} project={true} />
      </div>
    </Layout>
  )
}

export default project
