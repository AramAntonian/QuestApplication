import { Link } from "react-router-dom"

function PasswordChange({userName = "",isSignedIn = false}){

    if(isSignedIn)
        return(
            <>
                <div>Filed for email</div>
                <Link to = {`/${userName}/verifyCode`}>send code If email is right</Link>
            </>
        )
    else{
        return(
            <>
                <div>Field for email</div>
                <Link to = "/signIn/verifyCode">submit if email is exist</Link>
            </>
        )
    }    
}
export default PasswordChange