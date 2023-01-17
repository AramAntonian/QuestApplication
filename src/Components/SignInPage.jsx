import {useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import "../style/SignInPage.css"
import "animate.css"
import { signInWith, signInWithGoogle } from '../FireBase'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import tickIcon from "../tickIcon.png"
import { ArrowBackIosNew } from '@mui/icons-material';


function SignIn({userName,setUserName}){
    const [errors,setErrors] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [typeOfField,setTypeOfField] = useState("password")
    const [isSignedUp,setIsSignedUp] = useState(false)

   
    useEffect(()=>{
        localStorage.setItem("USERNAME","")
    },[])
    const theme = createTheme();

   

 
    return(
        <>
           {
            isSignedUp?<div className="welcome">
                <img src = {tickIcon} alt = "tick icon" className='animate__fadeIn'/>
                <p className = "animate__bounceInLeft">successfully</p>
                <div className = "animate__bounceInRight">
                  <Link to = {`/${userName.firstName}`} className = "goTo" >go to page</Link>
                </div>
            </div>:null
        }
            <Link to = "/"  className='backDrop'>< ArrowBackIosNew fontSize='large' /></Link>
            <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {!errors?
            <>
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                autoComplete="current-password"
                type={typeOfField}
                value = {password} onChange = {(event)=>setPassword(event.target.value)}
              />
            </>
            :
            <>
            <TextField
              error
              helperText = "invalid email"
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
            <TextField
              error
              helperText = "invalid password"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
              type={typeOfField}
              value = {password} onChange = {(event)=>setPassword(event.target.value)}
            />
          </>

            }
            <Grid item xs={12}>
                <FormControlLabel
                  onClick = {()=> setTypeOfField(prev => prev === "password"?"text":"password")}
                  control={<Checkbox value="allowExtraEmails" color="primary"  />}
                  label="show Password"
                />
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick= {
                ()=> {
                   signInWith(email,password,setIsSignedUp,setUserName,setErrors)
               }
               }
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/signIn/forgetPassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <div className='googleSignIn'onClick = {() => signInWithGoogle(setUserName,setIsSignedUp)}>
            <img className = "google" src = "https://tse4.mm.bing.net/th?id=OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl&pid=Api&P=0" alt = "google"/>
            <p className='googleText'>sign in with google</p>
        </div>
      </Container>
    </ThemeProvider>
            
            
            

            
        </>
    )
}

export default SignIn