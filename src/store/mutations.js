export default({
  changeInfo (state, info) {
    localStorage.cityInfo = JSON.stringify(info)
    state.cityInfo = JSON.parse(localStorage.cityInfo)
    console.log(state.cityInfo)
  },
  changeHotCities (state, hotCities) {
    state.hotCities = hotCities
  },
  changeActive (state, active) {
    state.active = active
  },
  changeCurrentCity (state, city) {
    localStorage.currentCity = city
    state.currentCity = localStorage.currentCity
  },
  changeVisible (state, visible) {
    state.visible = visible
  },
  changeImgList (state, imgList) {
    localStorage.imgList = JSON.stringify(imgList)
    state.imgList = JSON.parse(localStorage.imgList)
    console.log(state.imgList)
  }
})
