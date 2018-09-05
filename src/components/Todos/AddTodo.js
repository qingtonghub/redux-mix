
import React,{Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todo'

class AddTodo extends Component {
    render() { 
        let input = null;
        const { dispatch } = this.props;
        console.log(this.props);
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
}
export default connect()(AddTodo)

















// const AddTodo = ({ dispatch }) => {
//     let input = null;
//     return (
//         <form onSubmit={e => {
//                 e.preventDefault();
//                 if(!input.value) return;
//                 dispatch(addTodo(input.value));
//                 input.value = '';
//             }}>
//             <input type="text" ref={ node => input = node }/>
//             <button type="submit">Add Todo</button>
//         </form>
//     )
// }
// export default connect()(AddTodo)
