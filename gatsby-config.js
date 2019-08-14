module.exports = {
  siteMetadata: {
    title: `charliesbot's blog`,
    name: `charliesbot`,
    siteUrl: `https://charliesbot.dev`,
    description: `Charliesbot is a blog where I talk about front end, code, coffee and my life as a software engineer`,
    hero: {
      heading: `Hey! I'm Charlie. I write about Front End, coffee, books and life.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/charliesbot`,
      },
      {
        name: `github`,
        url: `https://github.com/charliesbot`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/carlos-lopez-bb845337`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
