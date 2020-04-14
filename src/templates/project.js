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
            ...GatsbyContentfulFluid_noBase64
          }
        }
        mediaWebm {
          file {
            contentType
            url
          }
        }
        date
        contenu {
          json
        }
        isVideo
      }
    }
    contentfulVideoPlaceholder {
      image {
        file {
          url
        }
      }
    }
    contentfulVariableCouleur {
      valeur
    }
  }
`

const project = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="Project" />
      <Menu showProjects={true} />
      <div className="content">
        <Carousel
          data={data}
          project={true}
          prev={pageContext.prev.slug}
          next={pageContext.next.slug}
        />
      </div>
    </Layout>
  )
}

export default project
