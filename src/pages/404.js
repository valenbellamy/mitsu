import React from "react"
import Menu from "../components/Menu"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <main>
      <Menu bgResponsive={false} />
      <SEO title="404: Not found" />
      <div className="content">
        <div className="about">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </main>
  </Layout>
)

export default NotFoundPage
