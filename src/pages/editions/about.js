import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Menu from "../../components/Menu"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from "@contentful/rich-text-types"

export const query = graphql`
  query {
    contentfulAboutEditions(titre: { eq: "About" }) {
      contenu {
        json
      }
    }
  }
`

const About = ({ data }) => {
  const contenu = data.contentfulAboutEditions.contenu
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
      <main>
        <SEO title="About editions" />
        <Menu showFilters={true} showCart={true} specialPaddingXs={true} />
        <div className="content">
          <div className="about about--editions">
            {contenu && <>{documentToReactComponents(contenu.json, options)}</>}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default About
