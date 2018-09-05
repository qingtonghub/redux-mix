
let nextTodoId = 0;
const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
}

export {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters,
}
