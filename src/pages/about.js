import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query {
    contentfulAbout {
      contenu {
        json
      }
    }
  }
`

const About = ({ data }) => {
  const contenu = data.contentfulAbout.contenu
  return (
    <Layout>
      <SEO title="About" />
      <Menu bgResponsive={false} />
      <div className="content">
        <div className="about">
          {documentToReactComponents(contenu.json)}
          <div className="fs-xs">
            <Link to="/mentions" className="fs-xs">
              Copyright + Mentions
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
