const SPACE = process.env.CTF_SPACE
const TOKEN = process.env.CTF_TOKEN
const HOST = process.env.CTF_HOST

const TITLE =
  HOST === 'preview.contentful.com' ? 'Using Preview API' : 'Using Delivery API'

if (!SPACE || !TOKEN || !HOST) {
  throw new Error('Contentful spaceId, host and token need to be provided.')
}

module.exports = {
  siteMetadata: {
    title: TITLE,
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: SPACE,
        accessToken: TOKEN,
        host: HOST,
      },
    },
  ],
}
