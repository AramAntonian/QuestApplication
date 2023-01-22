import { Link } from "react-router-dom";

function Changed(){

    return(
        <h1 className="text">
            We have send message to your email, follow to link, change your password and <Link to = "/signIn" >return</Link> to sign in.
        </h1>
       
    )
}
export default Changed