import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Menu from "../../components/Menu"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query {
    contentfulAboutEditions {
      contenu {
        json
      }
    }
  }
`

const About = ({ data }) => {
  const contenu = data.contentfulAboutEditions.contenu
  return (
    <Layout>
      <SEO title="About editions" />
      <Menu />
      <div className="content">
        <div className="about">{documentToReactComponents(contenu.json)}</div>
      </div>
    </Layout>
  )
}

export default About
