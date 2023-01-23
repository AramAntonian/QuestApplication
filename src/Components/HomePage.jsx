import "../style/HomePage.css"
import {  useNavigate } from "react-router-dom"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from "../logo.png"

function HomePage(){
    const navigate = useNavigate()
    window.onpopstate = ()=>{
            navigate(+1)
    }
 
    return(
        <>
        <div className="infoCont">
            <img src = {logo} className = "infoLogo"/>
            <h1 className= "intro">Hello, and welcome to our quest site about museums of Armenia. This page has been created for learning and to understand traditions and culture of armenian nation. If you pass all levels of all museums, then you can be sure that you know Armenia and Armenian people. In the below are the museums of Armenian writers, you can read some information about them and after that go to test your knowledge sabout Armenia.</h1>
        </div>
        <div className="cont-all">
            <div className="cont-imgs">
                <img className = "imgs" src = "https://www.yerevan.am/uploads/media/default/0001/11/thumb_10033_default_allimages.jpeg" alt = "Charent's museum"/>
                <p className="nameOfMuseum" onClick={()=>{navigate("/CharentsMuseum")}}>Yeghishe Charents house-museum</p>
                <p className="adress"><LocationOnIcon />17 Mashtots ave.</p>
            </div>
            <div className="cont-imgs">
                <img className = "imgs" src = "https://www.yerevan.am/uploads/media/default/0001/01/thumb_42_default_allimages.jpeg" alt = "Charent's museum"/>
                <p className="nameOfMuseum" onClick={()=>{navigate("/TumanyanMuseum")}}>Hovhannes Toumanyan Museum</p>
                <p className="adress"><LocationOnIcon />40 Moskovyan str.</p>
            </div>
            <div className="cont-imgs">
                <img className = "imgs" src = "https://www.yerevan.am/uploads/media/default/0001/11/thumb_10034_default_allimages.jpeg" alt = "Charent's museum"/>
                <p className="nameOfMuseum" onClick={()=>{navigate("/IsahakyanMuseum")}}>Avetik Isahakyan house-museum</p>
                <p className="adress"><LocationOnIcon />10 Zarobyan str</p>
            </div>
            <div className="cont-imgs">
                <img className = "imgs" src = "https://www.yerevan.am/uploads/media/default/0001/48/thumb_47817_default_allimages.jpeg" alt = "Charent's museum"/>
                <p className="nameOfMuseum" onClick={()=>{navigate("/KomitasMuseum")}}>Komitas museum-institute</p>
                <p className="adress"><LocationOnIcon />28 Arshakunyats ave</p>
            </div>


        </div>
        </>
    )
}

export default HomePage