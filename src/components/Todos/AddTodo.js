
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todo'


const AddTodo = ({ dispatch }) => {
    let input = null;
    return (
        <form onSubmit={e => {
                e.preventDefault();
                if(!input.value) return;
                dispatch(addTodo(input.value));
                input.value = '';
            }}>
            <input type="text" ref={ node => input = node }/>
            <button type="submit">Add Todo</button>
        </form>
    )
}
export default connect()(AddTodo)
