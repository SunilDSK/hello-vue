var vue = new Vue({
  el: "#app",
  data: {
    dogs: ['D1','D2','D3']
  }
});

// Use splice to change array content
vue.dogs.splice(2, 1, 'Bob');


// Use set to change array content
Vue.set(vue.dogs, 1, 'Jam');
vue.$set(vue.dogs, 0, 'Jak');

vue.dogs.splice(2);
