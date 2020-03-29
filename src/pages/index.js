import React from "react"
import Layout from "../components/layout"
import Slider from "../components/Slider"
import SEO from "../components/seo"
import Menu from "../components/Menu"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Accueil" />
      <Menu />
      <div className="content">
        <Slider />
      </div>
    </Layout>
  )
}

export default IndexPage
