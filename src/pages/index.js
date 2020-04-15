import React, { useState } from "react"
import Layout from "../components/layout"
import Slider from "../components/Slider"
import SEO from "../components/seo"
import Menu from "../components/Menu"

const IndexPage = () => {
  const [index, setIndex] = useState(null)
  const handleHover = value => {
    setIndex(value)
  }
  return (
    <Layout>
      <main>
        <SEO title="Accueil" />
        <Menu menuHover={handleHover} />
        <div className="content">
          <Slider activeItem={index} />
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
