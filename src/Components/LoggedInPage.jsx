import { useNavigate} from "react-router-dom"
import "../style/LoggedInPage.css"



function LoggedInPage({userName}){
    const navigate = useNavigate()
    window.onpopstate = ()=>{
        navigate(+1)
    }
   
    return (
        <>
        <div className="cont-museums">
            <div className="cont-imges">
                <img className = "imgs" src = "https://www.yerevan.am/uploads/media/default/0001/11/thumb_10033_default_allimages.jpeg" alt = "Charent's museum"/>
                <p className="nameOfMuseum" onClick={()=>{navigate(`/${userName}/CharentsMuseum`)}}>Yeghishe Charents house-museum</p>
            </div>
            <div className="cont-imges">
                <img className = "imgs" src = "https://www.yerevan.am/uploads/media/default/0001/01/thumb_42_default_allimages.jpeg" alt = "Charent's museum"/>
                <p className="nameOfMuseum" onClick={()=>{navigate(`/${userName}/TumanyanMuseum`)}}>Hovhannes Toumanyan Museum</p>
            </div>
            <div className="cont-imges">
                <img className = "imgs" src = "https://www.yerevan.am/uploads/media/default/0001/11/thumb_10034_default_allimages.jpeg" alt = "Charent's museum"/>
                <p className="nameOfMuseum" onClick={()=>{navigate(`/${userName}/IsahakyanMuseum`)}}>Avetik Isahakyan house-museum</p>
            </div>
            <div className="cont-imges">
                <img className = "imgs" src = "https://www.yerevan.am/uploads/media/default/0001/48/thumb_47817_default_allimages.jpeg" alt = "Charent's museum"/>
                <p className="nameOfMuseum" onClick={()=>{navigate(`/${userName}/KomitasMuseum`)}}>Komitas museum-institute</p>
            </div>


        </div>
        </>
    )
}

export default LoggedInPage