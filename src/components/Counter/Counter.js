
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {

    incrementIfOdd = () => {
        if(this.props.value % 2 !== 0){
            this.props.onIncrement();
        }
    }
    incrementAsync = () => {
        setTimeout(()=> {
            this.props.onIncrement();
        },500)
    }

    render() { 
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <div className="box">
                <h3>Counter:</h3>
                <p>value: {value}</p>
                <p><button onClick={onIncrement}>+1</button></p>
                <p><button onClick={onDecrement}>-1</button></p>
                <p><button onClick={this.incrementIfOdd}>if odd +1</button></p>
                <p><button onClick={this.incrementAsync}>Async +1</button></p>
            </div>
        );
    }
}

Counter.prototypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func,
}
 
export default Counter;