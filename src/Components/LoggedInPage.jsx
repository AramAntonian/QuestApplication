import { Link, useNavigate} from "react-router-dom"

function LoggedInPage({userName}){
    const navigate = useNavigate()
    window.onpopstate = ()=>{
        navigate(+1)
    }
   
    return (
        <div>
            <h1>some text</h1>
            <Link to = {`/${userName.firstName}/firstMuseum`}><img src = "" alt = "1st museum" /></Link>
            <Link to = {`/${userName.firstName}/secondMuseum`}><img src = "" alt = "2nd museum" /></Link>
            <Link to = {`/${userName.firstName}/thirdMuseum`}><img src = "" alt = "3rd museum" /></Link>
            <Link to = {`/${userName.firstName}/forthMuseum`}><img src = "" alt = "4th museum" /></Link>
        </div>
    )
}

export default LoggedInPage