var vue = new Vue({
  el: "#app",
  data: {
    formData: {
      username: '{someuser}'
    }
  }
});

Vue.set(vue.formData, 'name', '{Some User}');
