const { join } = require("path");
const axios = require("axios");
const _ = require("lodash");

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "nuxt-wordpress",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js + Vuetify.js project"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  plugins: ["~/plugins/vuetify.js", "~/plugins/axios.js"],
  css: ["~/assets/style/app.styl"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  modules: [["@nuxtjs/markdownit", { linkify: true }]],
  generate: {
    routes: function() {
      return axios
        .get("http://localhost:5000/wp-json/wp/v2/posts?per_page=100&_embed")
        .then(res => {
          return _.map(res.data, function(post, key) {
            return `/news/${post.slug}`;
          });
        });
    }
  },
  build: {
    vendor: ["~/plugins/vuetify.js", "~/plugins/axios.js"],
    extractCSS: true
    /*
    ** Run ESLint on save
    */
  }
};
