const App = {
    // The final rendered result will not include the <template> element.
    template: `
        <template v-for="i of 10" :key="i">
            <p> element 1 </p>
            <!-- use 「v-if」 in 「v-for」 -->
            <div v-if="i > 5"> element 2 </div>
        </template>
    `
}

Vue.createApp(App).mount('#app')