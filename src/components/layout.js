/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../static/fonts/fonts.css"
import "../static/style/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      contentfulVariableCouleur {
        valeur
      }
    }
  `)

  useEffect(() => {
    document.body.style.visibility = "visible"
    document.documentElement.style.setProperty(
      "--colorHover",
      `${data.contentfulVariableCouleur.valeur}`
    )
    const colors = hexToRgb(data.contentfulVariableCouleur.valeur)
    document.documentElement.style.setProperty("--r", `${colors.r}`)
    document.documentElement.style.setProperty("--g", `${colors.g}`)
    document.documentElement.style.setProperty("--b", `${colors.b}`)
  }, [])

  const hexToRgb = hex => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null
  }

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div style={{ height: "100%" }}>{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
