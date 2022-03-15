import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";


class MasterForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentStep:1,
            email:'',
            username:'',
            password:'',
        }
    }
    next=()=>{
        let currentStep=this.state.currentStep;
        currentStep=currentStep>=2?3:currentStep+1;
        this.setState({
            currentStep:currentStep
        });
    };
    prev=()=>{
        let currentStep=this.state.currentStep;
        currentStep=currentStep<=1?1:currentStep-1;
        this.setState({
            currentStep:currentStep
        });
    };
    render(){
        return(
            <div className="wizard">
                <h1>React Wizard Form</h1>
                <p>Step {this.state.currentStep}</p>
                <form>
                    <Step1 currentStep={this.state.currentStep}/>
                    <Step2 currentStep={this.state.currentStep}/>
                    <Step3 currentStep={this.state.currentStep}/>
                </form>
            </div>
        )
    }
}
// function Step1(props) {
//     if(currentStep!==1){
//         return null
//     }
//     return <h1>Step 1 Component</h1>
// }
// function Step2(props) {
//     if(currentStep!==2){
//         return null
//     }
//     return <h1>Step 1 Component</h1>
// }
// function Step3(props) {
//     if(currentStep!==3){
//         return null
//     }
//     return <h1>Step 1 Component</h1>
// }
export default MasterForm