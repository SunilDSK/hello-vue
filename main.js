var vue = new Vue({
  el: "#app",
  data: {
    second: 0
  },
  created() {
    setInterval(() => {
      this.second++;
    }, 1000)
  }
});
