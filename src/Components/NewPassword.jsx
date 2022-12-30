import { Link } from "react-router-dom";

function NewPassword({userName = "",IsSignedIn = false}){

    return(
        <>
        <h1>
            2 fields for password
        </h1>
        {IsSignedIn ?<Link to = {`/${userName}/info`}>Submit changing if 2fields are same</Link>:<Link to  = "/signIn">Submit changing if 2 field are same</Link>}
        </>
    )
}
export default NewPassword