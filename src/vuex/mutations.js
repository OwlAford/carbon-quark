export const state = {
  loginState: false,
  userName: '未命名'
}

export const mutations = {
  login (state, val) {
    state.loginState = true
    state.userName = val || '未命名'
  },

  logout (state, val) {
    state.loginState = false
    state.userName = '未命名'
  }
}
