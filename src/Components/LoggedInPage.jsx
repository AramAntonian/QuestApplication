import { Link} from "react-router-dom"

function LoggedInPage({userName}){
  
   
    return (
        <div>
            <h1>some text</h1>
            <Link to = {`/${userName}/firstMuseum`}><img src = "" alt = "1st museum" /></Link>
            <Link to = {`/${userName}/secondMuseum`}><img src = "" alt = "2nd museum" /></Link>
            <Link to = {`/${userName}/thirdMuseum`}><img src = "" alt = "3rd museum" /></Link>
            <Link to = {`/${userName}/forthMuseum`}><img src = "" alt = "4th museum" /></Link>
        </div>
    )
}

export default LoggedInPage