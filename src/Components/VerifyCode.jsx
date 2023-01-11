import { Link } from "react-router-dom"

function VerifyCode({userName, isSignedIn = false}){

    return(
        <>
            <h1>field for code</h1>
            {isSignedIn?<Link to = {`/${userName.firstName}/newPassword`} >Submit if code is right</Link>:<Link to = '/signIn/newPassword' >Submit if code is right</Link>}
        </>
    )
}
export default VerifyCode