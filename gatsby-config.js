/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `code-macho-v6`,
    siteUrl: `https://www.codemacho.in`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //   options: {
    //     name: "posts",
    //     path: `${__dirname}/src/blog`,
    //   },
    //   resolve: "gatsby-source-filesystem",
    // },
    // {
    //   options: {
    //     path: `${__dirname}/src/blog`,
    //   },
    //   resolve: "gatsby-plugin-page-creator",
    // },
    // {
    //   gatsbyRemarkPlugins: [
    //     {
    //       options: {
    //         maxWidth: 1080,
    //       },
    //       resolve: "gatsby-remark-images",
    //     },
    //   ],
    //   options: {
    //     extensions: [".mdx", ".md", ".markdown"],
    //   },
    //   resolve: "gatsby-plugin-mdx",
    // },
    // "gatsby-transformer-sharp",
    // {
    //   options: {
    //     defaults: {
    //       formats: ["auto", "avif", "webp"],
    //       placeholder: "blurred",
    //       quality: 70,
    //     },
    //   },
    //   resolve: "gatsby-plugin-sharp",
    // },
  ],
};
