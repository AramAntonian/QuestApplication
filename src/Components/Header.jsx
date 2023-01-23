import { Outlet, useNavigate} from "react-router-dom"
import "../style/Header.css"


function Header(){
    const navigate = useNavigate()
    return(
        <>
            <div className = "header" >
                <img src="../logo.png" alt="logo" className="headerLogo" onClick = {()=>{navigate("/")}}/>
                <p className = "SignInBoo" onClick = {()=>navigate("/signIn")}>Sign in</p>
            </div>
            <Outlet />
        </>
    )
   
}
export default Header