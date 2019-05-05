import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { state, mutations } from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";
import login from "./modules/login";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";
const plugins = [createPersistedState()];

export default new Vuex.Store({
  plugins,
  state,
  mutations,
  getters,
  actions,
  modules: {
    login
  },
  strict: debug
});
