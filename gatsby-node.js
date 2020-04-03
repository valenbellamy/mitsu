const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projetTemplate = path.resolve("./src/templates/project.js")
  const editionTemplate = path.resolve("./src/templates/edition.js")

  const res = await graphql(`
    query {
      allContentfulProjet {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulEdition {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulProjet.edges.forEach(edge => {
    createPage({
      component: projetTemplate,
      path: `/project/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
  res.data.allContentfulEdition.edges.forEach(edge => {
    createPage({
      component: editionTemplate,
      path: `/edition/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
