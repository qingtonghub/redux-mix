
import React from 'react'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

const Todos = () => (
    <div className="box">
        <h3>Todos:</h3>
        <AddTodo />
        <TodoList />
        <Footer />
    </div>
)

export default Todos;