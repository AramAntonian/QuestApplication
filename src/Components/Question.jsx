import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../style/Question.css"
import tickIcon from "../tickIcon.png"
import CloseIcon from '@mui/icons-material/Close';
import { ChangeInfo } from "../FireBase"


function Question({type,userName,setChanges}){
    const [firstName,setFirstName] = useState(userName.firstName)
    const[lastName,setLastName] = useState(userName.lastName)
    const navigate = useNavigate()

    console.log(userName)
 
    if(type === "signIn"){
        return(
            <div className="welcome">
                <img src = {tickIcon} alt = "tick icon" className='animate__fadeIn'/>
                <p className = "animate__bounceInLeft">successfully</p>
                <div className = "animate__bounceInRight">
                    <Link to = {`/${userName.firstName}`} className = "goTo" >go to page</Link>
                </div>
        </div>
        )
    }
    else if(type === "signUp"){
        return(
            <div className="welcome">
                <img src = {tickIcon} alt = "tick icon" className='animate__fadeIn'/>
                <p className="animate__bounceInDown">successfully</p>
                <div  className="animate__bounceInRight">
                <Link to = "/signIn" className="backTo">back to sign in</Link>
                </div>
            </div>
        )
    }
    else if(type === "changeName"){
        return(
            <>
                <div className="cont">

                </div>
                <div className="window">
                    <div className="close">
                        <CloseIcon onClick = {()=>{
                            setChanges(prev => ({...prev,displayName:false}))
                        }}/>
                    </div>
                    <div className="firstName">
                        <TextField
                        className = "textField"
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        value = {firstName} onChange = {(event)=> setFirstName(event.target.value)}
                    />
                    </div>
                    <div className="lastName">
                        <TextField
                        className = "textField"
                        autoComplete="given-name"
                        name="lastName"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        value = {lastName} onChange = {(event)=> setLastName(event.target.value)}
                        />
                    </div>
                    <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick = {()=>{
                        if((firstName[0].toUpperCase() === firstName[0] || lastName.split("").filter(el => el.toUpperCase() === el).length < 1)
                        &&(lastName[0].toUpperCase() === lastName[0] || lastName.split("").filter(el => el.toUpperCase() === el).length < 1)){
                            ChangeInfo(firstName,lastName,userName.id,setChanges,navigate)
                        }
                    }}
                    >Confirm Changes</Button>
                </div>
            </>
        )
    }
}

export default Question