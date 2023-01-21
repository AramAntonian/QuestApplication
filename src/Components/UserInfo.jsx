import { Link, Navigate } from "react-router-dom"
import "../style/UserInfo.css"
import logo from "../logo.png"
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Question from "./Question";
import { useState } from "react";
import EditOffIcon from '@mui/icons-material/EditOff';

function UserInfo({userName}){
    window.onpopstate = ()=>{}
    const [changes,setChanges] = useState({
        displayName:false,
        password:false
    })
    function handleSingOut(){
        localStorage.removeItem("USERNAME")
    }
    if(!userName?.firstName){
        return <Navigate to = "*" />
    }

        return(
            <>
            <div className="blueDiv"></div>
            <div className="userInfo">
            
                <h1 className="points">Points: {`${userName.points}`}</h1>
                <img src = {logo}  alt = "logo" className="userInfoLogo"/>
                
                <div className= "info">
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <Link to = {`/${userName.firstName}`} className = "back">Go back to page</Link>
                        <KeyboardBackspaceIcon style = {{color:"white",marginTop:"2px",marginRight:"3px"}}/>
                    </div>
                    <div className = "icon-field">
                        <input className = "infoFields" type = "text" value = {`${userName.firstName} ${userName.lastName}`} readOnly = {true}/>
                        <EditIcon  className="editIcon" onClick = {()=>{
                            setChanges(prev => ({...prev,displayName:true}))
                        }}/>
                    </div>
                
                    <div className = "icon-field">
                        <input className="infoFields" type = "email" value = {userName.email} readOnly = {true}/>
                        <EditOffIcon  className="editIcon" style = {{cursor:"not-allowed"}}/>
                    </div >
                    {userName.password?<div className = "icon-field">
                        <input type = "text"  className = "infoFields" value = "password" readOnly = {true}/>
                        <Link to = {`/${userName.firstName}/changePassword`}><EditIcon  className="editIcon"/></Link>

                    </div>:null}
                    <div style={{display:"flex",flexDirection:"row",paddingTop:"430px"}}>
                            <Link to = "/" className="signOut" onClick = {handleSingOut}>Sign out</Link>
                            <LogoutIcon style = {{color:"white",marginTop:"3px",marginRight:"5px",order:1}} />
                    </div> 

                    
                </div>

            </div>
            {changes.displayName?<Question type = "changeName" setChanges = {setChanges} userName = {userName}/>:null}
            </>

        )


}
export default UserInfo