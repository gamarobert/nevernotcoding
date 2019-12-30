module.exports = {
  siteMetadata: {
    title: "./nevernotcoding",
    description: "A blog using JuxtaDev starter",
    author: "Robert Gama",
    logo: "./Logo.svg",
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
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: ">",
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "host",
                global: true,
              },
            },
          },
        ],
      },
    },
    // {
    //   resolve: "gatsby-plugin-mailchimp",
    //   options: {
    //     //endpoint: add your MC list endpoint here;
    //     //see instructions
    //     //https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/#mailchimp-endpoint
    //   },
    // },
  ],
}
