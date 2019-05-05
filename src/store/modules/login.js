const state = {
  checkCodeSrc: "",
  cstInfo: {}
};

const mutations = {
  setCheckCode(state, value) {
    state.checkCodeSrc = value;
  },

  setCstInfo(state, value) {
    state.cstInfo = value;
  }
};

export default {
  state,
  mutations
};
