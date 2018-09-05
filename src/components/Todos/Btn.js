

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setVisibilityFilter } from '../../actions/todo'


const Btn = ({ text,filter,disabled,handleClick }) => {
    return (
        <button disabled={disabled?true:false}
                onClick={handleClick}>{text}  {filter}</button>
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
        disabled: ownProps.filter === state.visibilityFilter
    }),
    (disptch,ownProps) => ({
        handleClick: () => disptch(setVisibilityFilter(ownProps.filter))
    })
)(Btn);