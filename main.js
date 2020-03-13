var vue = new Vue({
  el: "#app",
  data: {
    formData: {
      username: 'someuser'
    }
  }
});

vue.formData = Object.assign({}, vue.formData, {
  name: 'newusername'
})
