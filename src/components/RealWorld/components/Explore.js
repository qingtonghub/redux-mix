
import React, { Component } from 'react'
import PropTypes from 'prop-types'


const GITHUB_REPO = 'https://github.com/reduxjs/redux'

class Explore extends Component {
    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired
    }
    getInputValue = () => {
        return this.input.value
    }
    handleGoClick = () => {
        this.props.onChange(this.getInputValue())
    }
    handleKeyUp = e => {
        if(e.keyCode === 13) this.handleGoClick();
    }
    render() { 
        // console.log(this.props.value);
        return (
            <div>
                <p>Type a username or repo full name and hit 'Go':</p>
                <input  defaultValue={this.props.value} 
                        ref={(input) => this.input=input}
                        onKeyUp={this.handleKeyUp}/>
                <button onClick={this.handleGoClick}>Go!</button>
                <p>Code on <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">Github</a>.</p>
            </div>
        );
    }
}
 
export default Explore;