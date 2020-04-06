import React, { useState } from "react"
import Layout from "../components/layout"
import Slider from "../components/Slider"
import SEO from "../components/seo"
import Menu from "../components/Menu"

const IndexPage = ({ data }) => {
  const [index, setIndex] = useState(null)
  function handleHover(value) {
    setIndex(value)
    // console.log("index index " + index)
  }
  return (
    <Layout>
      <SEO title="Accueil" />
      <Menu menuHover={handleHover} />
      <div className="content">
        <Slider activeItem={index} />
      </div>
    </Layout>
  )
}

export default IndexPage
