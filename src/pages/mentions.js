import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query {
    contentfulMentions {
      description {
        json
      }
    }
  }
`

const Mentions = ({ data }) => {
  const contenu = data.contentfulMentions.description
  return (
    <Layout>
      <SEO title="Contact" />
      <Menu />
      <div className="content">
        <div className="about">{documentToReactComponents(contenu.json)}</div>
      </div>
    </Layout>
  )
}

export default Mentions
