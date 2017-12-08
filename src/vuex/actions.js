export const login = ({ commit }, value) => {
  commit('login', value)
}

export const logout = ({ commit }) => {
  commit('logout')
}
