const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projetTemplate = path.resolve("./src/templates/project.js")
  const editionTemplate = path.resolve("./src/templates/edition.js")
  const collectionTemplate = path.resolve("./src/templates/collection.js")

  const res = await graphql(`
    query {
      allContentfulProjet(sort: { fields: ordre, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulEdition(sort: { fields: ordre, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulCollection {
        edges {
          node {
            slug
            nom
          }
        }
      }
    }
  `)
  const projects = res.data.allContentfulProjet.edges
  projects.forEach((edge, index) => {
    createPage({
      component: projetTemplate,
      path: `/project/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        prev:
          index === 0
            ? projects[projects.length - 1].node
            : projects[index - 1].node,
        next:
          index === projects.length - 1
            ? projects[0].node
            : projects[index + 1].node,
      },
    })
  })
  const editions = res.data.allContentfulEdition.edges
  editions.forEach((edge, index) => {
    createPage({
      component: editionTemplate,
      path: `/edition/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        prev:
          index === 0
            ? editions[editions.length - 1].node
            : editions[index - 1].node,
        next:
          index === editions.length - 1
            ? editions[0].node
            : editions[index + 1].node,
      },
    })
  })
  const collections = res.data.allContentfulCollection.edges
  collections.forEach(edge => {
    createPage({
      component: collectionTemplate,
      path: `/editions/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        nom: edge.node.nom,
      },
    })
  })
}
