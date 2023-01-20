import { Link } from "react-router-dom"

function ThirdMuseum(){
    window.onpopstate = ()=>{}

    return(
        <>
            <div>Info</div>
            <Link to = "/" >Back to Home</Link>
        </>
    )
}
export default ThirdMuseum