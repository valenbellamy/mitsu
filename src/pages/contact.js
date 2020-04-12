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
    }
  }
`

const Contact = ({ data }) => {
  const contenu = data.contentfulContact.description
  return (
    <Layout>
      <SEO title="Contact" />
      <Menu />
      <div className="content">
        <div className="contact">{documentToReactComponents(contenu.json)}</div>
      </div>
    </Layout>
  )
}

export default Contact
