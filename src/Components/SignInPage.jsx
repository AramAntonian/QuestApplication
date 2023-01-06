import {useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { Formik, Field, Form } from 'formik';
import "../style/SignInPage.css"
import { signInWith, signInWithGoogle } from '../FireBase'


function SignIn({userName,setUserName}){
    const [errors,setErrors] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [typeOfField,setTypeOfField] = useState("password")
    const [isSignedUp,setIsSignedUp] = useState(false)

   
    useEffect(()=>{
        localStorage.setItem("USERNAME","")
    },[])
   
    

 
    return(
        <>
           {
            isSignedUp?<div className="welcome">
                <p>successfully</p>
                <Link to = {`/${userName}`} className="beckTo">go to page</Link>
            </div>:null
        }
            <Link to = "/"  className='backDrop'>{"<"}</Link>
            <Formik >
                <Form className='SignInForm'>
                   {
                    errors?<div className = "error">invalid email or password</div>:null
                   }
                    <Field name="email" type="email" placeholder = "email" className = "inputFields" value = {email} onChange = {(event)=>setEmail(event.target.value)}/>            
                    <Field name="password" type={typeOfField}  placeholder = "password" 
                    className = "inputFields" value = {password} onChange = {(event)=>setPassword(event.target.value)}/>
                    <div className='showPassword'>
                        <input type = "checkbox"  className='check'onClick = {()=> setTypeOfField(prev => prev === "password"?"text":"password")}/>
                        <p className='showText'>show password</p>
                    </div>
                 <p className='submitButton' onClick = {async ()=> {
                    signInWith(email,password,setIsSignedUp,setUserName,setErrors,"signIn")
                    setPassword("")
                    }}>Submit</p>
                 
                    
                    <div className = "SignUp-Forget ">
                        <Link to = {`/signIn/forgetPassword`} className = "forget-signup"  >Forget Password?</Link><br />
                        <Link to = "/signUp" className='forget-signup'>Sign up</Link> 
                    </div>
                    <div className='googleSignIn'onClick = {() => signInWithGoogle(setUserName,setIsSignedUp)}>
                        <img className = "google" src = "https://tse4.mm.bing.net/th?id=OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl&pid=Api&P=0" alt = "google"/>
                        <p className='googleText'>sign in with google</p>
                    </div>
                </Form>

            </Formik > 
            

            
        </>
    )
}

export default SignIn