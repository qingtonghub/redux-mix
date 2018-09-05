
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { VisibilityFilters,toggleTodo } from '../../actions/todo'

const TodoList = ({todos,toggleTodo}) => 
        <ul style={{paddingLeft: '20px'}}>
            {todos.map((todo,index) =>
                <li key={index} 
                    onClick={() => toggleTodo(todo.id)}>{todo.text}
                {todo.completed?<small style={{color: '#f00'}}>√</small>:null}
                </li>
            )}
        </ul>

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
}

const getVisibleTodos = ({todos, filter}) => {
    switch(filter){
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        default: 
            throw new Error('Unknown filter'+filter)
    }
}

export default connect(
    state => ({
        todos: getVisibleTodos({todos: state.todos,filter: state.visibilityFilter})
    }),
    dispatch => ({
        toggleTodo: id => dispatch(toggleTodo(id))
    })
)(TodoList);
