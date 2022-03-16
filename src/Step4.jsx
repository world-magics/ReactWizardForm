import React from "react";

function Step4(props){
    if(props.currentStep!==4){
        return null
    }

    return <h1>Step 4 Component 4</h1>
}
export default Step4