module.exports = {
  siteMetadata: {
    title: "Pistachios",
    version: "0.2.0",
    date: "May 10, 2018",
    siteUrl: ""
  },
  plugins: [
    "gatsby-image",
    "gatsby-link",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-next",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: "gatsby-remark-smartypants",
            options: {
              dashes: "oldschool"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
    }
  ]
}
