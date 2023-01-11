import { Link } from "react-router-dom";

function NewPassword({userName = {},isSignedIn = false}){

    return(
        <>
        <h1>
            2 fields for password
        </h1>
        {isSignedIn ?<Link to = {`/${userName.firstName}/info`}>Submit changing if 2fields are same</Link>:<Link to  = "/signIn">Submit changing if 2 field are same</Link>}
        </>
    )
}
export default NewPassword