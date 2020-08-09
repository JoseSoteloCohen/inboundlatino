require("dotenv").config()

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    menu: [
      { name: "Inicio", to: "/" },
      { name: "Blog", to: "/blog" },
      { name: "Reseñas", to: "/resenas" },
    ],
    links: {
      linkedIn: "https://www.linkedin.com/in/jsotelocohen/",
      wordpress: "https://profiles.wordpress.org/josesotelocohen//",
      github: "https://github.com/JoseSoteloCohen",
      twitter: "https://twitter.com/Inbound_Latino",
    },
    locale: "es-CO",
    title: `José Sotelo`,
    description: `Conoce mi trabajo en desarrollo web y descubre las mejores reseñas de SaaS`,
    author: `@josesotelo`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Inbound Latino`,
        short_name: `Inbound`,
        start_url: `/`,
        background_color: `rgb(21, 32, 43)`,
        theme_color: `rgb(21, 32, 43)`,
        display: `standalone`,
        icon: `src/images/icon-144x144.png`,
        legacy: false
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WXJK6G",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "gatsby-route-change",
      },
    },
  ],
}
