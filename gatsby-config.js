module.exports = {
  siteMetadata: {
    title: "Inbound Latino por José Sotelo",
    author: "José Sotelo",
    description: "Blog de marketing digital y desarrollo web"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'inbound Latino por Jose Sotelo',
        short_name: 'Inbound Latino',
        start_url: '/',
        background_color: '#003699',
        theme_color: '#003699',
        display: 'minimal-ui',
        lang: 'es',
        icon: './src/images/iso-250x250.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 100,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
        plugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'plugins',
        path: 'plugins',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
      },
    },
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer 8c0bde6722e1601a92538ed3782122bb98026440`, // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
        },
        queries: [
          `{
            repository(owner: "JoseSoteloCohen", name: "Blackout-WordPress-Dark-mode-Widget") {
              ref(qualifiedName: "master") {
              target {
                ... on Commit {
                  history(first: 12) {
                    edges {
                      node {
                        repository{
                          name
                        }
                        oid
                        commitUrl
                        messageHeadline
                        messageBody
                        pushedDate
                      }
                    }
                  }
                }
              }
            }
            }
          }`,
          `{
          repository(owner: "JoseSoteloCohen", name: "sendy-elements") {
            ref(qualifiedName: "master") {
              target {
                ... on Commit {
                  history(first: 12) {
                    edges {
                      node {
                        repository{
                          name
                        }
                        oid
                        commitUrl
                        messageHeadline
                        messageBody
                        pushedDate
                      }
                    }
                  }
                }
              }
            }
          }
        }`,
          `{
          repository(owner: "JoseSoteloCohen", name: "Moo-Elements") {
            ref(qualifiedName: "master") {
              target {
                ... on Commit {
                  history(first: 12) {
                    edges {
                      node {
                        repository{
                          name
                        }
                        oid
                        commitUrl
                        messageHeadline
                        messageBody
                        pushedDate
                      }
                    }
                  }
                }
              }
            }
          }
        }`,
        ],
      },
    },
  ],
};
