import { INCREMENT,DECREMENT } from './ActiveTypes'

//Counter
const onIncrement = () => ({
    type: INCREMENT,
    value: 1
})

const onDecrement = () => ({
    type: DECREMENT,
    value: 1
})

export {
    onIncrement,
    onDecrement,
}