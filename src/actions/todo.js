import { ADD_TODO,TOGGLE_TODO,SET_VISIBILITY_FILTER } from './ActiveTypes'

let nextTodoId = 0;
const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})

const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})


export {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
}
