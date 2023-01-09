import React, { Component } from 'react'
import FormInput from '../formInput/formInput'
import CustomButton from '../customButton/customButton'
import { auth,createUserProfile } from '../../firebase/firebase.util'
import './signUp.scss'
class signUp extends Component {
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit=async e=>{
        e.preventDefault()
        const {displayName,email,password,confirmPassword}=this.state
        console.log(displayName,email,password,confirmPassword)
        if(password!==confirmPassword){
            alert("Passwords Do not Match")
            return;
        }

        try {
            const {user}=await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfile(this.state,{displayName})
            this.setState={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }

        } catch (error) {
            console.log(error)
            
        }
    }
    handleChange=e=>{
        const {name,value}=e.target;
        this.setState({[name]:value})
    }

    render(){
        const {displayName,email,password,confirmPassword}=this.state
        return (
          <div className="sing-up">
            <h2 className="title">
                I do not have a account
            </h2>
            <span>Sign Up with email and password</span>
            <form action="" className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                >
                </FormInput>
                <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='email'
                    required
                >
                </FormInput>
                <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='password'
                    required
                >
                </FormInput>
                <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='confirmPassword'
                    required
                >
                </FormInput>

                <CustomButton type="submit"> SIGN UP</CustomButton>
            </form>
          </div>
        )
      }
    }

export default signUp