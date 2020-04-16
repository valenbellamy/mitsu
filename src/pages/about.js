import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from "@contentful/rich-text-types"

export const query = graphql`
  query {
    contentfulAbout {
      contenu {
        json
      }
      mentions {
        json
      }
    }
  }
`

const About = ({ data }) => {
  const contenu = data.contentfulAbout.contenu
  const mentions = data.contentfulAbout.mentions
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
        <SEO title="About" />
        <Menu bgResponsive={false} />
        <div className="content">
          <div className="about">
            {documentToReactComponents(contenu.json, options)}
            {mentions && (
              <div className="mentions">
                {documentToReactComponents(mentions.json, options)}
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default About
