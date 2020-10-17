module.exports = {
  siteMetadata: {
    title: `Jakub Kubisiowski - Full stack developer & project leader`,
    description: `Jakub Kubisiowski's personal website inclduing profile, projects description and resume`,
    author: `Jakub Kubisiowski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-RK3V3S5283",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,        
      },
    },
  ],
}
