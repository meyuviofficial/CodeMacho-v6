/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Code Macho Blogs`,
    description: `Blogs about Kubernetes, Cloud, APIs and Scripting`,
    keywords: `Kubernetes, Cloud, Azure, AWS, Bash, PowerShell, Scripting, Terraform, Code`,
    siteUrl: `https://www.codemacho.in`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: "/",
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
          allMarkdownRemark {
            nodes {
              frontmatter {
                date
                slug
              }
            }
          }
        }`,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allMarkdownRemark: { nodes: allPosts },
        }) => {
          const pathToDateMap = {};

          allPosts.map((post) => {
            pathToDateMap[post.frontmatter.slug] = {
              date: post.frontmatter.date,
            };
          });

          const pages = allPages.map((page) => {
            return { ...page, ...pathToDateMap[page.path] };
          });

          return pages;
        },
        serialize: ({ path, date }) => {
          let entry = {
            url: path,
            changefreq: "daily",
            priority: 0.5,
          };

          if (date) {
            entry.priority = 0.7;
            entry.lastmod = date;
          }

          return entry;
        },
      },
    },
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
    `gatsby-transformer-remark`,
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
