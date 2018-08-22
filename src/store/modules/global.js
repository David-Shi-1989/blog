var state = {
  isLoading: false
}

var getters = {
  isLoading: (state) => {
    return state.isLoading
  }
}

var mutations = {
  setIsLoading: (state, _isLoading) => {
    state.isLoading = (_isLoading === true)
  }
}

var actions = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
