import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  // why this work? is this workaround elegant?
  store.commit("any_mutation", store);

  createPersistedState({
    key: "setting",
    paths: ["local"]
  })(store);
};
