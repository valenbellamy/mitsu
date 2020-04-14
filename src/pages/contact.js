import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query {
    contentfulContact {
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
  return (
    <Layout>
      <SEO title="Contact" />
      <Menu bgResponsive={false} />
      <div className="content">
        <div className="contact">
          <div>{documentToReactComponents(contenu.json)}</div>
          <div>{documentToReactComponents(contenu2.json)}</div>
          <div>{documentToReactComponents(contenu3.json)}</div>
          <div>{documentToReactComponents(contenu4.json)}</div>
          <div>{documentToReactComponents(contenu5.json)}</div>
          <div>{documentToReactComponents(contenu6.json)}</div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
