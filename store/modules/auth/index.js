const state = () => ({
  user: {},
  isUserSigninWithAuth0: ''
})

// getters
const getters = {
  getUser: (state) => {
    return state.user
  },
  isUserSigninWithAuth0: (state) => {
    return state.isUserSigninWithAuth0
  }
}

// actions
const actions = {
  signinUserInDatabase(context, payload) {
    const { user } = payload
    // console.log(payload)
    const params = {
      email: user.email,
      password: user.password
    }
    context.commit('loginUserSuccess', params)
  }
}

// mutations
const mutations = {
  loginUserSuccess(state, user) {
    // state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
