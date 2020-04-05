const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projetTemplate = path.resolve("./src/templates/project.js")
  const editionTemplate = path.resolve("./src/templates/edition.js")

  const res = await graphql(`
    query {
      allContentfulProjet(sort: { fields: createdAt, order: DESC }) {
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
