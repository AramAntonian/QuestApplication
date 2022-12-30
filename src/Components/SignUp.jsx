import { Link } from "react-router-dom"

function SignUp({userName}){

    return(
        <>
            <Link to = "/signIn" >back to signIn </Link>
            <h1>FORMIK</h1>
            <p>Buttons for formik</p>
            <Link to = "/signIn">Register if condition is true </Link> 
        </>
    )
}

export default SignUp