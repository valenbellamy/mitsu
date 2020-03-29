import React from "react"
import Layout from "../components/layout"
import Editions from "../components/Editions"
import SEO from "../components/seo"
import Menu from "../components/Menu"

const editions = () => {
  return (
    <Layout>
      <SEO title="Accueil" />
      <Menu showFilters={true} />
      <div className="content">
        <Editions />
      </div>
    </Layout>
  )
}

export default editions
