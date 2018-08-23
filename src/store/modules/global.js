var state = {
  isLoading: false // Loading遮罩层是否显示
}

var getters = {
  isLoading: state => {
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
  namespaved: true,
  state,
  getters,
  actions,
  mutations
}
