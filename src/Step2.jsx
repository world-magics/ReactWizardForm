import React from 'react'

function Step2(props){
    if(props.currentStep!==2){
        return null
    }
    return (
        <div className="form-group">
            <label htmlFor="username">
                Username
            </label>
            <input 
            type="text"
            className='form-control'
            id='username'
            name='username'
            placeholder='Enter username'
            value={props.value}
            onChange={props.handleChange}
            />
        </div>
    )
  
}

export default Step2