const increment = function (state) {
  state.count++
}
const getToken = function(state){
  state.token = localStorage.getItem('token');
}
export default {
  increment,
  getToken,
}
