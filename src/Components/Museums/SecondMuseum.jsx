import { Link } from "react-router-dom"

function SecondMuseum(){
    window.onpopstate = ()=>{}

    return(
        <>
            <div>Info</div>
            <Link to = "/" >Back to Home</Link>
        </>
    )
}
export default SecondMuseum