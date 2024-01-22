import React, { useState } from "react";
import "./Css/LoginSignup.css"

const LoginSignup=()=>{

    const [state,setState]=useState("Login");
    const [formData,setFormData]=useState({
        username:"",
        password:"",
        email:"",
    })
    const login=async()=>{
        console.log("Login function executed",formData);
        let responseData;

        await fetch('http://localhost:4000/login',{
            method:"POST",
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)
        console.log(responseData);
        if(responseData.success)
        {
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }
    }

    const signup=async()=>{
        console.log("signup function executed",formData);
        let responseData;

        await fetch('http://localhost:4000/signup',{
            method:"POST",
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)
        console.log(responseData);
        if(responseData.success)
        {
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }
    }
    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: Array.isArray(e.target.value) ? e.target.value[0] : e.target.value,
        });
    };

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state==="Sign Up"?<input value={formData.username} onChange={changeHandler} name="username" type="text" placeholder="Your name"/>:<></>}
                    <input value={formData.email} onChange={changeHandler}  name="email" type="email" placeholder="Email Address"/>
                    <input  value={formData.password} onChange={changeHandler} name="password" type="password" placeholder="Your password"/>
                </div>
                <button onClick={()=>{state==="Login"? login():signup()}}>Continue</button>
                {state==="Sign Up"? <p className="loginsignup-login">Already have an account?<span onClick={()=>setState("Login")}>Login here</span></p>:   
                <p className="loginsignup-login">Create an Account?<span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
               
             
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup;