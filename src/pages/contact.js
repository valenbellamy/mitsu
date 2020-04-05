import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Menu />
      <div className="content">
        <div className="about">Adresse email</div>
      </div>
    </Layout>
  )
}

export default Contact
