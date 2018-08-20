export default({
  active: 'in',
  currentCity: localStorage.currentCity || '杭州',
  hotCities: ['1', '2', '3'],
  cityInfo: JSON.parse(localStorage.cityInfo) || {},
  visible: false,
  imgList: JSON.parse(localStorage.imgList) || []
})
