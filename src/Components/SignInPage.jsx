import { Link } from "react-router-dom"

function SignIn({userName}){

    return(
        <>
            <Link to = "/" >back </Link>
            <h1>FORMIK</h1>
            <p>Buttons for formik</p>
            <Link to = {`/signIn/forgetPassword`} >Forget Password?</Link><br />
            <Link to = {`/${userName}`}>Sign in if all true</Link><br />
            <Link to = "/signUp">Sign up</Link> 
        </>
    )
}

export default SignIn