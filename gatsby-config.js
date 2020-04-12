require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitleAlt: `Inbound Latino - Digital Marketing Services by José Sotelo`,
    author: 'José Sotelo'
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WXJK6G",
        // Include GTM in development.
        includeInDevelopment: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Inbound Latino - Digital Marketing Services by José Sotelo`,
        short_name: `Inbound Latino`,
        description: `Portfolio website of Inbound Latino by José Sotelo`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#244176`,
        display: `standalone`,
        icons: [
          {
            src: `/iso.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/iso-solo.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
