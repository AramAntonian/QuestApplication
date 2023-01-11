import "../style/HomePage.css"
import { Link } from "react-router-dom"

function HomePage(){

    localStorage.setItem("USERNAME",{})
    return(
        <>
           
            <h1>Lorem ipsum dolor sit.</h1>
            <Link to = "/firstMuseum"><img  src = "" alt = "1st museum"/></Link>
            <Link to = "/secondMuseum"><img  src = "" alt = "2nd museum"/></Link>
            <Link to = "/thirdMuseum"><img  src = "" alt = "3rd museum"/></Link>
            <Link to = "/forthMuseum"><img  src = "" alt = "4th museum"/></Link>


        </>
    )
}

export default HomePage