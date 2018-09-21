var state = {
  // Loading遮罩层是否显示
  isLoading: false,
  // 全局的ImageView遮罩层是否显示
  isShowImageViewLayer: true
}

var getters = {
  isLoading: state => {
    return state.isLoading
  },
  isShowImageViewLayer: state => {
    return state.isShowImageViewLayer
  }
}

var mutations = {
  setIsLoading: (state, _isLoading) => {
    state.isLoading = (_isLoading === true)
  },
  setIsShowImageViewLayer: (state, _isShow) => {
    state.isShowImageViewLayer = (_isShow === true)
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
