import React, { Component } from "react";
import FormInput from "../formInput/formInput";
import './signIn.css'
import CustomButton from "../customButton/customButton";

class SignIn  extends Component{
    constructor(props) {
        super(props)
        this.state={
            email:"",
            password:""
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.setState({email:'',password:''})
    }
    handleChange=(e)=>{
        const {value,name}=e.target 
        this.setState({[name]:value}) 
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I have Already a Account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="email" handleChange={this.handleChange}  value={this.state.email} required
                    label="email" />
                    <FormInput type="password" name="password" handleChange={this.handleChange} value={this.state.password}
                    label="passwords" />
                <CustomButton type="button">Sign In</CustomButton>
                </form>

            </div>
        )
    }
}

export default SignIn