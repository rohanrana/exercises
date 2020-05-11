module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#da3043',
          'font-family': 'Arial',
          'layout-body-background': '#66ff79'
        }
      }
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
  ],
}
