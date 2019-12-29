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
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
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
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "YOUR_GOOGLE_TAGMANAGER_ID",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
  ],
};
