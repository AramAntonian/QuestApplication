import { Link } from "react-router-dom"

function FirstMuseum(){
    window.onpopstate = ()=>{}
    return(
        <>
            <div>Info</div>
            <Link to = "/" >Back to Home</Link>
        </>
    )
}
export default FirstMuseum