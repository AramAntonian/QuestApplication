import { Outlet, Link } from "react-router-dom"

function LoggedInHeader({userName}){
    return(
        <>
            <div className = "header" >
                <img src="" alt="logo" />
                <Link to = {`/${userName.firstName}/info`}>{userName.firstName}</Link>
            </div>
            <Outlet />
        </>
    )
}
export default LoggedInHeader