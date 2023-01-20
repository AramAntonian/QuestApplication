import { Outlet, Link} from "react-router-dom"


function Header(){
    return(
        <>
            <div className = "header" >
                <img src="" alt="logo" />
                <Link to = "/signIn">Sign in</Link>
            </div>
            <Outlet />
        </>
    )
   
}
export default Header