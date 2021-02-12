const App = {
    data() {
        return {
            nums: [...Array(10).keys()],
            nextIndex: 10
        }
    },
    methods: {
        randIndex() {
            return Math.floor(Math.random() * this.nums.length)
        },
        add() {
            this.nums.splice(this.randIndex(), 0, this.nextIndex++)
        },
        remove() {
            this.nums.splice(this.randIndex(), 1)
        },
        shuffle() {
            this.nums = _.shuffle(this.nums)
        }
    }
}

Vue.createApp(App).mount('#app')