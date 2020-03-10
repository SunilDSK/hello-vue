const app = new Vue({
    el: "#app",
    data: {
        name: 'Sunil'
    },
    template: `
        <div>
            <h1>Hi Vue</h1>
            <h1>This is from Vue.js {{name}}</h1>
        </div>
    `
}); 