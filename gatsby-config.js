module.exports = {
    siteMetadata: {
      title: `Nesil Özer`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [
            "G-4G0R3R23ZP", // Google Analytics / GA
            "AW-CONVERSION_ID", // Google Ads / Adwords / AW
            "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
          ],
          // This object gets passed directly to the gtag config command
          // This config will be shared across all trackingIds
          gtagConfig: {
            optimize_id: "OPT_CONTAINER_ID",
            anonymize_ip: true,
            cookie_expires: 0,
          },
          // This object is used for configuration specific to this plugin
          pluginConfig: {
            // Puts tracking script in the head instead of the body
            head: true,
            // Setting this parameter is also optional
          },
        },
      },
      "gatsby-plugin-image",
      "gatsby-transformer-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        }
      },
      "gatsby-plugin-mdx",
      `gatsby-plugin-sharp`,
      "gatsby-plugin-image",
      {
        resolve: "gatsby-plugin-mdx",
        options: {
          defaultLayouts: {
            default: require.resolve("./src/components/layout")
          },
          gatsbyRemarkPlugins: [
            {
              resolve: "gatsby-remark-autolink-headers",
              options: {
                className: "header-anchor",
                enableCustomId: true,
              }
            },
            {
              resolve: "gatsby-remark-prismjs",
              options: {
                classPrefix: "language-",
              }
            },
            {
              resolve: "gatsby-remark-images",
              options: {
                maxWidth: 1200,
              }
            }
          ]
        }
      },
       
      ]
}