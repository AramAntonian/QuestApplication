import { Link } from "react-router-dom"

function UserInfo({userName}){

    return(
        <div>
            <h1>{userName.firstName}</h1>
            <p>points</p>
            <p>some info</p>
            <Link to = "/">sign out</Link><br />
            <Link to = {`/${userName.firstName}/changePassword`}>Change password</Link>
        </div>

    )
}
export default UserInfo