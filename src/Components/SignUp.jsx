import { useState } from "react"
import { Link} from "react-router-dom"
import '../style/SignUp.css'
import {  signUp, } from "../FireBase";
import "animate.css"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import tickIcon from "../tickIcon.png"


function SignUp(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("")
    const [reapedPass,setReapedPass] = useState("")
    const [isSignedUp,setIsSignedUp] = useState(false)
    const [typeOfField,setTypeOfField] = useState('password')
    const [errors,setErrors] = useState(false)
    const theme = createTheme()
  
  

    return(
        <>
        {
            isSignedUp?<div className="welcome">
                <img src = {tickIcon} alt = "tick icon" className='animate__fadeIn'/>
                <p className="animate__bounceInDown">successfully</p>
                <div  className="animate__bounceInRight">
                  <Link to = "/signIn" className="backTo">back to sign in</Link>
                </div>
            </div>:null
        }

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
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              {!errors?
              <>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value = {firstName} onChange = {(event)=> setFirstName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value = {lastName} onChange = {(event)=> setLastName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value = {email} onChange = {(event)=> setEmail(event.target.value)}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={typeOfField}
                  id="password"
                  autoComplete="new-password"
                  value = {password} onChange = {(event)=> setPassword(event.target.value)}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="repeat password"
                  type={typeOfField}
                  id="password"
                  autoComplete="new-password"
                  value = {reapedPass} onChange = {(event)=>setReapedPass(event.target.value)}

                />
              </Grid>
            
            </>:
            <>
            <Grid item xs={12} sm={6}>
                <TextField
                  error
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  helperText = "must start with capital character"
                  autoFocus
                  value = {firstName} onChange = {(event)=> setFirstName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  helperText = "must start with capital character"
                  autoComplete="family-name"
                  value = {lastName} onChange = {(event)=> setLastName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value = {email} onChange = {(event)=> setEmail(event.target.value)}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={typeOfField}
                  id="password"
                  helperText = "more then 8 characters"
                  autoComplete="new-password"
                  value = {password} onChange = {(event)=> setPassword(event.target.value)}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error
                  required
                  fullWidth
                  name="password"
                  label="repeat password"
                  type={typeOfField}
                  helperText = "must be same password"
                  id="password"
                  autoComplete="new-password"
                  value = {reapedPass} onChange = {(event)=>setReapedPass(event.target.value)}

                />
              </Grid>
            </>
            
              }
                <Grid item xs={12}>
                <FormControlLabel
                  onClick = {()=> setTypeOfField(prev => prev === "password"?"text":"password")}
                  control={<Checkbox value="allowExtraEmails" color="primary"  />}
                  label="show Password"
                />
              </Grid>
            </Grid>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick = {()=>{
                if(password === reapedPass && 
                    (firstName[0].toUpperCase() === firstName[0] || lastName.split("").filter(el => el.toUpperCase() === el).length < 1)
                    &&(lastName[0].toUpperCase() === lastName[0] || lastName.split("").filter(el => el.toUpperCase() === el).length < 1)
                    && password.length >=8){
                        signUp(email,password,firstName,lastName,setIsSignedUp)
                    }
                    else{
                      setErrors(true)
                      setTimeout(()=>setErrors(false),5000)
                    }
                   
                }
            }
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
       
    </ThemeProvider>
        
    </>
    )
}

export default SignUp