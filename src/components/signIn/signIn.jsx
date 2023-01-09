import React, { Component } from "react";
import FormInput from "../formInput/formInput";
import './signIn.css'
import CustomButton from "../customButton/customButton";
import {auth, signInWithGoogle } from "../../firebase/firebase.util";

class SignIn  extends Component{
    constructor(props) {
        super(props)
        this.state={
            email:"",
            password:""
        }
    }
    handleSubmit=async e=>{
        e.preventDefault()
        const {email,password}=this.state
        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'',password:''})
        } catch (error) {
            console.log(error)
        }

        
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
                    <div className="buttons">
                <CustomButton type="button">Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In with google</CustomButton>
                    </div>

                </form>

            </div>
        )
    }
}

export default SignIn