import { create } from "zustand"

const store = (set) => ({
    blog: [],
    postBlog: (text, description) => set((store) => ({blog: [...store.blog, {text, description}] })),
    deleteTask: (title) => set((store) => ({blog: store.blog.filter(task => task.title !== title) })),
    count : 0,
    increaseCount: () => set((state) => ({count: state.count + 1})),
    decreaseCount: () => set((state) => ({count: state.count > 0 ? state.count - 1 : 0})),
    resetCount: () => set(({count: 0})),
    todos: [],
    addTodo: (test) => set((state) => ({todos: [...state.todos,
        {
            id: Date.now(),
            test,
            done: false,
        }
    ]})),
    deleteTodo: (id) => set((state) => ({todos: state.todos.filter(todo => todo.id !== id)})),
    doneTodo: (id) => set((state) => ({todos: state.todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)}))
})

export const useStore = create(store)