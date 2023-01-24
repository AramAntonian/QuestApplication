import { Outlet,  useNavigate } from "react-router-dom"

function LoggedInHeader({userName}){
    const navigate = useNavigate()
    return(
        <>
            <div className = "header" >
                <img src="../logo.png" alt="logo" className="headerLogo" onClick={`/${userName.firstName}`}/>
                <p onClick = {()=> navigate(`/${userName.firstName}/info`)} className = "SignInBoo">{userName.firstName}</p>
            </div>
            <Outlet />
        </>
    )
}
export default LoggedInHeader