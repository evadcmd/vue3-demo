const App = {
    data() {
        return {
            x: 0
        }
    },
    methods: {
        coordX(event) {
            this.x = event.clientX;
        }
    }
}

Vue.createApp(App).mount('#app')