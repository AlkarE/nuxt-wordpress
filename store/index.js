import Vuex from "vuex";

import axios from "~/plugins/axios.js";

const createStore = () => {
  return new Vuex.Store({
    state: {
      menuIsActive: false,
      post: {},
      posts: []
    },

    mutations: {
      toggleMenuState(state) {
        state.menuIsActive = !state.menuIsActive;
      },
      setPosts: (state, posts) => {
        state.posts = posts;
      },
      setCurrentPost: (state, post) => {
        state.post = post;
      }
    },

    actions: {
      async getPosts({ commit }) {
        let { data } = await axios.get(`posts?_embed`);
        commit("setPosts", data);
      },
      async getPost({ commit, store }, id) {
        console.log(id);
        let { data } = await axios.get(`posts/${id}_embed`);
        commit("setCurrentPost", data);
      },
      async getPostBySlug({ commit, store }, slug) {
        console.log(slug);
        let { data } = await axios.get(`posts?slug=${slug}&_embed`);
        commit("setCurrentPost", data);
      },
      async nuxtServerInit(
        { commit },
        { store, isClient, isServer, route, params }
      ) {
        if (isServer) {
          let { data } = await axios.get("posts?_embed");
          commit("setPosts", data);
        }
        if (isServer && params.id) {
          let { data } = await axios.get(`posts/${params.id}?_embed`);
          commit("setCurrentPost", data);
        }

        if (isServer && params.slug) {
          let { data } = await axios.get(`posts?slug=${params.slug}&_embed`);
          commit("setCurrentPost", data);
        }
      }
    }
  });
};

export default createStore;
