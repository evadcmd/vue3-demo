const TODOS_DEFAULT = [
    {id: 0, text: 'sleep'},
    {id: 1, text: 'study'}
]

const TodoItem = {
    props: {
        todo: Object,
        index: Number
    },
    template: `
        <li>
            {{ todo.text }}
            <button @click="$emit('del', this.index)">delete</button>
        </li>
    `
}

const TodoList = {
    components: {
        TodoItem
    },
    data() {
        return {
            todos: TODOS_DEFAULT,
            currIndex: TODOS_DEFAULT.length,
            inputValue: ''
        }
    },
    methods: {
        add() {
            this.todos.push({
                id: this.currIndex++,
                text: this.inputValue
            })
            this.inputValue = ''
        },
        del(index) {
            this.todos.splice(index, 1)
        }
    },
    template: `
        <form @submit.prevent="add">
            <input v-model="inputValue" />
            <button> add </button>
        </form>
        <ul>
            <todo-item
                v-for="(todo, index) of todos"
                :key="todo.id"
                :index="index"
                :todo="todo"
                @del="del"
            ></todo-item>
        </ul>
    `
}

Vue.createApp(TodoList).mount('#todo-list')