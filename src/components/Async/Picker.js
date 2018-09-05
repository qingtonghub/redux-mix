import React from 'react'

const Picker = ({ value, onChange, options}) => {
    return (
        <div>
            <h1>{value}</h1>
            <select value={value} onChange={e => onChange(e.target.value)}>
                {options.map((option,index) => 
                    <option key={index} value={option}>{option}</option>
                )}
            </select>
        </div>
    )
}


export default Picker