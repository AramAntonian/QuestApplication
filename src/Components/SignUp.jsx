import { useEffect, useState } from "react"
import { Link} from "react-router-dom"
import { Field,Form,Formik } from 'formik'
import '../style/SignUp.css'
import { signInWithGoogle, signUp, } from "../FireBase";


function SignUp({setUserName}){
    const [errors,setErrors] = useState(
        {
            password:{
                visibility:"hidden",
            },
            email:{
                visibility:"hidden",
            }, 
            firstName:{
                visibility:"hidden"
            },
            lastName:{
                visibility:"hidden"
            },
            reapedPass:{
                visibility:"hidden"
            }
        }
    );
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("")
    const [reapedPass,setReapedPass] = useState("")
    const [isSignedUp,setIsSignedUp] = useState(false)
    const [typeOfField,setTypeOfField] = useState('password')
    const [handler,setHandler] = useState(false)
  
    useEffect(()=>{
    })
   

    const handleClick = ()=>{
        let count = 0;
        if(firstName[0].toUpperCase() !== firstName[0] || lastName.split("").filter(el => el.toUpperCase() === el).length > 1){
            setErrors(prev=> {
               return  {
                        ...prev,
                    firstName:{
                        visibility:""
                    }
                }
        })
        count++
        }
        if(lastName[0].toUpperCase() !== lastName[0] || lastName.split("").filter(el => el.toUpperCase() === el).length > 1){
            setErrors(prev=> {
               return  {
                        ...prev,
                    lastName:{
                        visibility:""
                    }
                }
            })
        count++
        }
        if(password.length < 8){
            setErrors(prev=> {
               return  {
                        ...prev,
                    password:{
                        visibility:""
                    }
                }
        })
        count++
        }
        if(handler){
            setErrors(prev =>{
                return{
                    ...prev,
                    email:{
                        visibility:""
                    }
                }
            })
        }
        if(password !== reapedPass){
            setErrors(prev=> {
                return  {
                         ...prev,
                     reapedPass:{
                         visibility:""
                     }
                 }
         })
         count++
        }
        if(count){
            setTimeout(()=>{setErrors(prev=> {
                for (let index = 0; index < prev.length; index++) {
                    prev[index].visibility = "hidden"
                    
                }
                return prev
            })},5000)
        }
        else{
            setIsSignedUp(true)
        }
    }

    return(
        <>
        {
            isSignedUp?<div className="welcome">
                <p>successfully</p>
                <Link to = "/signIn" className="beckTo">back to sign in</Link>
            </div>:null
        }

        <Link to = "/signIn"  className='backDrop'>{"<"}</Link>
        
        <Formik >
            <Form className='SignUpForm'>
                <div className = "errors-fields">
                    <Field name="firstName" type="text" placeholder = "first name" className = "inputFields"
                    value = {firstName} onChange = {(event) => setFirstName(event.target.value)}/>  
                    <p style = {{visibility:errors.firstName.visibility}} className = "errors">invalid syntax</p>
                </div>  
                <div className="errors-fields">     
                    <Field name = "lastName" type = "text" placeholder = "last name" className = "inputFields" value = {lastName} onChange = {(event)=> setLastName(event.target.value)}/>
                    <p style = {{visibility:errors.lastName.visibility}} className = "errors">invalid syntax</p>
                </div>
                <div className="errors-fields">
                    <Field name = "email" type = "email" placeholder = "email" className = "inputFields" value = {email} onChange = {(event)=> setEmail(event.target.value)}/>  
                    <p style = {{visibility:errors.email.visibility}} className = "errors">we have already user with this email</p>
                </div> 
                <div className="errors-fields">
                    <Field name="password" type={typeOfField}  placeholder = "password" className = "inputFields"
                     value = {password} onChange = {(event)=>setPassword(event.target.value)}/>
                    <p style = {{visibility:errors.password.visibility}} className = "errors">password will contain at least 8 characters</p>
                </div>
                <div className="errors-fields">
                    <Field name="password" type={typeOfField}  placeholder = "reaped password" className = "inputFields"
                    value = {reapedPass} onChange = {(event)=>setReapedPass(event.target.value)}/>
                    <p style = {{visibility:errors.reapedPass.visibility}} className = "errors">will be the same password</p>

                </div>
                <div className='showPassword'>
                        <input type = "checkbox"  className='check'onClick = {()=> setTypeOfField(prev => prev === "password"?"text":"password")}/>
                        <p className='showText'>show password</p>
                    </div>
                    
                    <p  className = "submitButton" onClick = {()=>{
                        signUp(email,password,firstName,lastName,setHandler)
                        handleClick()
                    }
                    }>Submit</p>
                    <div className='googleSignIn'onClick = {() => signInWithGoogle(setUserName,setIsSignedUp)}>
                        <img className = "google" src = "https://tse4.mm.bing.net/th?id=OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl&pid=Api&P=0" alt = "google"/>
                        <p className='googleText'>sign up with google</p>
                    </div>
            </Form>
        </Formik > 
        
    </>
    )
}

export default SignUp