import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from "@contentful/rich-text-types"

export const query = graphql`
  query {
    contentfulContact(titre: { eq: "Contact" }) {
      titre
      description {
        json
      }
      description2 {
        json
      }
      description3 {
        json
      }
      description4 {
        json
      }
      description5 {
        json
      }
      description6 {
        json
      }
    }
  }
`

const Contact = ({ data }) => {
  const contenu = data.contentfulContact.description
  const contenu2 = data.contentfulContact.description2
  const contenu3 = data.contentfulContact.description3
  const contenu4 = data.contentfulContact.description4
  const contenu5 = data.contentfulContact.description5
  const contenu6 = data.contentfulContact.description6
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: node => {
        return (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
            {node.content[0].value}
          </a>
        )
      },
    },
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <Menu bgResponsive={false} />
      <div className="content">
        <div className="contact">
          {contenu && (
            <div>{documentToReactComponents(contenu.json, options)}</div>
          )}
          {contenu2 && (
            <div>{documentToReactComponents(contenu2.json, options)}</div>
          )}
          {contenu3 && (
            <div>{documentToReactComponents(contenu3.json, options)}</div>
          )}
          {contenu4 && (
            <div>{documentToReactComponents(contenu4.json, options)}</div>
          )}
          {contenu5 && (
            <div>{documentToReactComponents(contenu5.json, options)}</div>
          )}
          {contenu6 && (
            <div>{documentToReactComponents(contenu6.json, options)}</div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Contact
