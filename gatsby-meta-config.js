/**
 * @typedef {Object} Links
 * @prop {string} github Your github repository
 */

/**
 * @typedef {Object} MetaConfig
 * @prop {string} title Your website title
 * @prop {string} description Your website description
 * @prop {string} author Maybe your name
 * @prop {string} siteUrl Your website URL
 * @prop {string} lang Your website Language
 * @prop {string} utterances Github repository to store comments
 * @prop {Links} links
 * @prop {string} favicon Favicon Path
 */

/** @type {MetaConfig} */
const metaConfig = {
  title: "MatrixCrafter",
  description: `MatrixCrafter Website`,
  author: "Philippe VIENNE",
  siteUrl: "https://www.matrixcrafter.com",
  lang: "en",
  utterances: "matrixcrafter/www.matrixcrafter.com",
  links: {
    github: "https://github.com/sungik-choi/gatsby-starter-apple",
  },
  favicon: "src/images/icon.png",
}

// eslint-disable-next-line no-undef
module.exports = metaConfig