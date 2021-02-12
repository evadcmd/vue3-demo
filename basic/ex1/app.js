const App = {
    data() {
        return {
            attrname: 'id',
            attrval: 'MY-NAME',
            eventname: 'click'
        }
    },
    methods: {
        info() {
            alert('clicked')
        }
    }
}

Vue.createApp(App).mount('#root')

console.log('Hello')