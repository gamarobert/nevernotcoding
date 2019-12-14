module.exports = {
  siteMetadata: {
    title: "./nevernotcoding",
    description: "A blog using JuxtaDev starter",
    author: "Robert Gama",
    // add logo?
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://nevernotcoding.us4.list-manage.com/subscribe/post?u=b00b8ea1175130b9c32cc64b9&amp;id=6856d1ea4f", // add your MC list endpoint here; see instructions
        //https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/#mailchimp-endpoint
      },
    },
  ],
}
