import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Carousel from "../components/Carousel"
import SEO from "../components/seo"
import Menu from "../components/Menu"

const project = ({ data }) => {
  return (
    <Layout>
      <SEO title="Project" />
      <Menu showProjects={true} />
      <div className="content">
        <Carousel data={data} project={true} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "photo1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "photo2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "photo3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "photo4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "photo5.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default project
