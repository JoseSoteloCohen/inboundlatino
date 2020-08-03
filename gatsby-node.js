const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        posts: allContentfulPosts {
          nodes {
            slug
          }
        }
        reviews: allContentfulReviews {
          nodes {
            slug
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) {
        reject(errors)
      }

      if (data && data.posts) {
        const component = path.resolve("./src/templates/post.jsx")
        data.posts.nodes.map(({ slug }) => {
          createPage({
            path: `/${slug}`,
            component,
            context: { slug },
          })
        })
      }
      if (data && data.reviews) {
        const component = path.resolve("./src/templates/reviews.jsx")
        data.reviews.nodes.map(({ slug }) => {
          createPage({
            path: `/${slug}`,
            component,
            context: { slug },
          })
        })
      }

      resolve()
    })
  })
}
