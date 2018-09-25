var state = {
  // Loading遮罩层是否显示
  isLoading: false,
  // 全局的ImageView遮罩层是否显示
  imageView: {
    isShow: false,
    imgArr: [],
    activeIndex: 0
  }
}

var getters = {
  isLoading: state => {
    return state.isLoading
  },
  isShowImageViewLayer: state => {
    return state.imageView.isShow
  },
  getImageViewArr: state => {
    return state.imageView.imgArr
  },
  getImageViewActiveIndex: state => {
    return state.imageView.activeIndex
  }
}

var mutations = {
  setIsLoading: (state, _isLoading) => {
    state.isLoading = (_isLoading === true)
  },
  setIsShowImageViewLayer: (state, paramObj) => {
    let isShow = (paramObj.isShow === true)
    state.imageView.isShow = isShow
    if (isShow && paramObj.list && Array.prototype.isPrototypeOf(paramObj.list)) {
      state.imageView.imgArr = paramObj.list
    }
    if (isShow && !isNaN(paramObj.activeIndex) && paramObj.activeIndex >= 0 && paramObj.activeIndex < state.imageView.imgArr.length) {
      state.imageView.activeIndex = paramObj.activeIndex
    }
    if (!isShow) {
      state.imageView.imgArr = []
      state.imageView.activeIndex = 0
    }
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
