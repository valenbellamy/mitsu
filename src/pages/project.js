import React from "react"
import Layout from "../components/layout"
import Project from "../components/Project"
import SEO from "../components/seo"
import Menu from "../components/Menu"

const project = () => {
  return (
    <Layout>
      <SEO title="Accueil" />
      <Menu />
      <div className="content">
        <Project />
      </div>
    </Layout>
  )
}

export default project
