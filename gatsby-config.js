module.exports = {
  siteMetadata: {
    title: 'Thrivent Gateway',
    description: 'Thrivent Gateway Dashboard based on Gatsby with @paljs/ui component package.',
    author: 'Sean Mahoney',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/Layouts/index.tsx`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'oah-admin',
        short_name: 'OAH',
        start_url: '/dashboard',
        display: 'minimal-ui',
        icon: 'src/images/OAH.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-171177495-3',
      },
    },
    resolve: `gatsby-source-cosmicjs`,
    options: {
      bucketSlug: `thrivent-development`, // Get this value in Bucket > Settings
      objectTypes: [`posts`],
      // If you have enabled read_key to fetch data (optional).
      apiAccess: {
        read_key: `28u6A0VX2ok7lb14px12odvOcg18Nyjh3o6UqdG5rUcykBzUcG`, // Get this value in Bucket > Settings
      },
      localMedia: true // Download media locally for gatsby image (optional)
    }
  ],
};
