import React from "react"
import { graphql } from "gatsby"
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
      <Menu />
      <div className="content">
        <div className="about">
          {/* <p className="mbm">
            is a graphic design & art direction studio, founded by Louis Georget
            & Louise de Montalembert. Bases in Paris
          </p>
          <p className="mbm">For any inquiries: contact (a) studiomitsu.com</p>
          <div>SELECTED CLIENTS :</div>
          <ul className="mbm">
            <li>Louis Vuitton</li>
            <li>Chanel</li>
            <li>Labatut Paris</li>
            <li>Louis Vuitton</li>
            <li>Chanel</li>
            <li>Labatut Paris</li>
            <li>Louis Vuitton</li>
            <li>Chanel</li>
            <li>Labatut Paris</li>
            <li>...</li>
          </ul> */}
          {documentToReactComponents(contenu.json)}
          <div className="fs-xs">Copyright + mentions</div>
        </div>
      </div>
    </Layout>
  )
}

export default About
