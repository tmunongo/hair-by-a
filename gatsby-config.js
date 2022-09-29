module.exports = {
  siteMetadata: {
    title: `Hair By A`,
    siteUrl: `https://hairbya.gtsb.io/`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `rifvmjtuf2np`,
        accessToken: `SW7-Fl356ui4DcUG_QuYsoK98hRKECg2MKii1qEz-DY`,
      },
    },
  ],
}
