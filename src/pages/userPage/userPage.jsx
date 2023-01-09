import React from "react";

import './userPage.css'
import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/singUp/signUp";
const UserPage =()=>(
    <div className="sign-in-sign-up">
        <SignIn />
       <SignUp />
    </div>
)

export default UserPage