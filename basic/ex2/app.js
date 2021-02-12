const MyComponent = {
    template: `
        <p class="a b" :class="$attrs.class">class a b</p>
        <p class="x y z">class x y z</p>
    `
}

const MyContainer = {
    components: {
        MyComponent
    },
    template: `
        <my-component v-for="i in 10" class="from-parent from-parent2"></my-component>
    `
}

Vue.createApp(MyContainer).mount('#app')