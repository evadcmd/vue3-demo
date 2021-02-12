const App = {
    data() {
        return {
            arr: [...Array(10).keys()].map((v) => v + 5),
            obj: {
                k1: {value: 'value1'},
                k2: {value: 'value2'},
                k3: {value: 'value3'},
                k4: {value: 'value4'},
            }
        }
    }
}

Vue.createApp(App).mount('#app')