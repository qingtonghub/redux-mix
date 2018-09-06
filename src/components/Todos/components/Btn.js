import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setVisibilityFilter } from '../../../actions/todo'

//text,filter为ownProps 可直接引用
const Btn = ({ text,filter,disabled,setVisibilityFilter }) => {
    // return (
    //     <button disabled={disabled ? true : false}
    //             onClick={handleClick}>{text}</button>
    // );
    return (
        <button disabled={disabled ? true : false}
                onClick={() => setVisibilityFilter(filter)}>{text}</button>
    );
}

Btn.prototypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    filter: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}
 
export default connect(
    (state,ownProps) => ({
        disabled: ownProps.filter === state.visibilityFilter,
    }),
    {
        setVisibilityFilter
    }
    // (disptch,ownProps) => ({
    //     handleClick: () => disptch(setVisibilityFilter(ownProps.filter))
    // })
)(Btn);