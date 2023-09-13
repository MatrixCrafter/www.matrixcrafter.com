const meta = require("./gatsby-meta-config")

const siteMetadata = {
  title: meta.title,
  description: meta.description,
  author: meta.author,
  siteUrl: meta.siteUrl,
  lang: meta.lang,
  utterances: {
    repo: meta.utterances,
  },
  postTitle: "All",
  menuLinks: [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/about/",
      name: "About",
    },
    {
      link: meta.links.github,
      name: "Github",
    },
  ],
}

const corePlugins = [
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "src",
      path: `${__dirname}/src`,
      ignore: [`**/\.*`, "**/*.d.ts"],
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${__dirname}/src/images`,
    },
  },
]

const devPlugins = [
  {
    resolve: "gatsby-plugin-alias-imports",
    options: {
      alias: {
        "~": ".",
      },
      extensions: ["js", "ts", "tsx"],
    },
  },
  {
    resolve: "gatsby-plugin-typography",
    options: {
      pathToConfigModule: "src/styles/typography",
    },
  },
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-typescript",
  "gatsby-plugin-styled-components",
]

const imagePlugins = [
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
]

const markdownPlugins = [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        "gatsby-remark-copy-linked-files",
        {
          resolve: "gatsby-remark-vscode",
          options: {
            theme: {
              default: "Github Light Theme",
              parentSelector: {
                "body[data-theme=dark]": "Dark Github",
              },
            },
            extensions: ["vscode-theme-github-light", "dark-github-theme"],
          },
        },
        {
          resolve: "gatsby-remark-images",
          options: {
            linkImagesToOriginal: false,
          },
        },
      ],
    },
  },
]

const searchPlugins = [
  "gatsby-plugin-sitemap",
  "gatsby-plugin-robots-txt",
]

const pwaPlugins = [
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: meta.title,
      short_name: meta.title,
      description: meta.description,
      lang: meta.lang,
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      display: "standalone",
      icon: meta.favicon,
      icon_options: {
        purpose: "any maskable",
      },
    },
  },
  "gatsby-plugin-offline",
]

module.exports = {
  graphqlTypegen: true,
  siteMetadata,
  plugins: [
    ...corePlugins,
    ...devPlugins,
    ...imagePlugins,
    ...markdownPlugins,
    ...searchPlugins,
    ...pwaPlugins,
  ],
}
