import React from "react"
import { Link } from "gatsby"
import Menu from "../components/Menu"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ThankYouPage = () => (
  <Layout>
    <main>
      <Menu bgResponsive={false} />
      <SEO title="Thank You !" />
      <div className="thank-section">
        <div>
          <h1>THANK YOU !</h1>
          <span>We hope you will enjoy !</span>
          <Link to="/">&#60; BACK</Link>
        </div>
      </div>
    </main>
  </Layout>
)

export default ThankYouPage
