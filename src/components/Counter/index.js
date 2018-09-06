
import React from 'react'
import { connect } from 'react-redux'
import { onIncrement, onDecrement} from '../../actions/counter'

import Counter from './Counter'

const CounterWrap = ({value, dispatch,onIncrement,onDecrement}) => {
    
    //如果不传入传入onIncrement onDecrement 则可直接使用dispatch
    // return <Counter value={value} 
    //                 onIncrement={ () => dispatch({type: 'INCREMENT'}) }
    //                 onDecrement={ () => dispatch({type: 'DECREMENT'}) }/>

    //如果传入onIncrement onDecrement 则dispatch为undefined     二者取其一
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


 