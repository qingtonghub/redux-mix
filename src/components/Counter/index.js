
import React from 'react'
import { connect } from 'react-redux'
import { onIncrement, onDecrement} from '../../actions/counter'

import Counter from './Counter'

const CounterWrap = ({value, dispatch,onIncrement,onDecrement}) => {
    // return <Counter value={value} 
    //                 onIncrement={ () => dispatch({type: 'INCREMENT'}) }
    //                 onDecrement={ () => dispatch({type: 'DECREMENT'}) }/>
    return <Counter value={value} 
                    onIncrement={ () => onIncrement() }
                    onDecrement={ () => onDecrement() }/>
}
        

export default connect(
    state => ({
        value: state.counter.value,
    }), 
    {
        onIncrement,
        onDecrement
    }
    // dispatch => ({
    //     onIncrement: val => dispatch(onIncrement(val)),
    //     onDecrement: val => dispatch(onDecrement(val))
    // })
)(CounterWrap)


 