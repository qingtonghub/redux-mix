
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Explore from './components/Explore'
import { resetErrorMessage } from '../../actions/realworld'

class RealWorld extends Component {
    componentDidMount() {
        const { inputValue,resetErrorMessage } = this.props;
        if(!inputValue){
            resetErrorMessage()
        }
    }
    handleChange = (nextValue) => {
        this.props.history.push(`/realworld/${nextValue}`)
    }
    handleDismissClick = e => {
        this.props.resetErrorMessage();
    }
    renderErrorMessage = () => {
        const { errorMessage } = this.props;
        if(!errorMessage) return null
        return (
            <p style={{ backgroundColor: '#e99', padding: 10 }}>
                <b>{errorMessage}</b>
                <button onClick={this.handleDismissClick}>Dismiss</button>
            </p>
        )
    }
    render() { 
        const { inputValue } = this.props
        return (
            <div>
                <Explore value={inputValue} onChange={this.handleChange} />
                {this.renderErrorMessage()}
            </div>
        );
    }
}

RealWorld.propTypes = {
    errorMessage: PropTypes.string.isRequired,
    resetErrorMessage: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
}
 
export default withRouter(connect(
    (state,ownProps) => {
        const params = ownProps.match.params;
        const { inputValue } = params;
        return ({
            errorMessage: state.realWorld.errorMessage,
            inputValue: !!inputValue?inputValue:''
        })
    },{
        resetErrorMessage
    }
)(RealWorld));