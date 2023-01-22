import { ArrowBackIosNew } from "@mui/icons-material"
import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { sendCode } from "../FireBase"
import "../style/PasswordChanging.css"

function PasswordChange(){
    const [email,setEmail] = useState("")
    const navigate = useNavigate()

        return(
            <>
            <Link to = "/signIn"  className='backDrop'>< ArrowBackIosNew fontSize='large' /></Link>

                <div className= "container">
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value = {email} 
                        onChange = {(event)=>setEmail(event.target.value)}
                    />  
                    <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick = {()=>{
                        sendCode(navigate,email)
                    }
                    }
                    >Send Code</Button>
                </div>
            </>
        )
       
}
export default PasswordChange