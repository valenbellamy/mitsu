import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Menu />
      <div className="content">
        <div className="about">
          <p className="mbm">
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
          </ul>
          <div className="fs-xs">Copyright + mentions</div>
        </div>
      </div>
    </Layout>
  )
}

export default About
