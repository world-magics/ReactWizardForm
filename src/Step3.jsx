import React from 'react'

function Step3(props){
    if(props.currentStep!==3){
        return null
    }
    return (
        <React.Fragment>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                className='form-control'
                id='password'
                name='password'
                placeholder='Enter Password'
                value={props.value}
                onChange={props.handleChange}

                />
            </div>
            <button 
            className="btn btn-success float-right"
            // onClick={props.handleSubmit}
            >
                Sign in
            </button>
        </React.Fragment>
    )
  
}

export default Step3