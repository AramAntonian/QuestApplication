import {  Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import FirstMuseum from "./Components/Museums/FirstMuseum";
import SecondMuseum from "./Components/Museums/SecondMuseum";
import ThirdMuseum from "./Components/Museums/ThirdMuseum";
import ForthMuseum from "./Components/Museums/ForthMuseum";
import SignIn from "./Components/SignInPage";
import { useEffect, useState } from "react";
import SignUp from "./Components/SignUp";
import LoggedInHeader from "./Components/LoggedInHeader";
import LoggedInPage from "./Components/LoggedInPage";
import QuestPage from "./Components/QuestPage";
import Levels from "./Components/Levels";
import UserInfo from "./Components/UserInfo";
import PasswordChange from "./Components/PasswordChanging";
import Changed from "./Components/Changed";
import NotFound from "./Components/NotFound";



function App() {
  const [userName,setUserName] = useState({
    firstName:"",
    lastName:"",
  })

  useEffect(()=>{
    let user = localStorage.getItem("USERNAME")
    if(user){
      user = JSON.parse(user) 
      setUserName(user)
    }
  },[])
  useEffect(()=>{
    if(userName.firstName){
      const user = JSON.stringify(userName)
      localStorage.setItem("USERNAME",user)
    }
  },[userName])

 
  
 

  return (
    <>
        <Routes>
          <Route path = "/" element = {<Header  />}>
            <Route index element = {<HomePage />}/>
            <Route path = "/CharentsMuseum" element = {<FirstMuseum />}/>
            <Route path = "/TumanyanMuseum" element = {<SecondMuseum />}/>
            <Route path = "/IsahakyanMuseum" element = {<ThirdMuseum />} />
            <Route path = "/KomitasMuseum" element = {<ForthMuseum />} />
          </Route>
          <Route  path = "/signIn" element = {<SignIn userName={userName} setUserName = {setUserName} />} />
          <Route path = "/signUp" element =  {<SignUp setUserName = {setUserName}/>} />
          <Route path = {`/${userName.firstName}`} element = {<LoggedInHeader userName = {userName}/>}>
            <Route index element = {<LoggedInPage userName={userName}/>} />
            <Route path = "CharentsMuseum" element = {<QuestPage num= "1" userName = {userName}/>}/>
            <Route path = "TumanyanMuseum" element = {<QuestPage num= "2" userName = {userName}/>}/>
            <Route path = "IsahakyanMuseum" element = {<QuestPage num= "3" userName = {userName}/>}/>
            <Route path = "KomitasMuseum" element = {<QuestPage num= "4" userName = {userName}/>}/>
            <Route path = "CharentsMuseum/firstLevel" element = {<Levels num = "1.1" userName={userName}/>}/>
            <Route path = "CharentsMuseum/secondLevel" element = {<Levels num = "1.2" userName={userName}/>}/>
            <Route path = "CharentsMuseum/thirdLevel" element = {<Levels num = "1.3" userName={userName}/>}/>
            <Route path = "CharentsMuseum/forthLevel" element = {<Levels num = "1.4" userName={userName}/>}/>
            <Route path = "CharentsMuseum/fifthLevel" element = {<Levels num = "1.5" userName={userName}/>}/>
            <Route path = "TumanyanMuseum/firstLevel" element = {<Levels num = "2.1" userName={userName}/>}/>
            <Route path = "TumanyanMuseum/secondLevel" element = {<Levels num = "2.2" userName={userName}/>}/>
            <Route path = "TumanyanMuseum/thirdLevel" element = {<Levels num = "2.3" userName={userName}/>}/>
            <Route path = "TumanyanMuseum/forthLevel" element = {<Levels num = "2.4" userName={userName}/>}/>
            <Route path = "TumanyanMuseum/fifthLevel" element = {<Levels num = "2.5" userName={userName}/>}/>
            <Route path = "IsahakyanMuseum/firstLevel" element = {<Levels num = "3.1" userName={userName}/>}/>
            <Route path = "IsahakyanMuseum/secondLevel" element = {<Levels num = "3.2" userName={userName}/>}/>
            <Route path = "IsahakyanMuseum/thirdLevel" element = {<Levels num = "3.3" userName={userName}/>}/>
            <Route path = "IsahakyanMuseum/forthLevel" element = {<Levels num = "3.4" userName={userName}/>}/>
            <Route path = "IsahakyanMuseum/fifthLevel" element = {<Levels num = "3.5" userName={userName}/>}/>
            <Route path = "KomitasMuseum/firstLevel" element = {<Levels num = "4.1" userName={userName}/>}/>
            <Route path = "KomitasMuseum/secondLevel" element = {<Levels num = "4.2" userName={userName}/>}/>
            <Route path = "KomitasMuseum/thirdLevel" element = {<Levels num = "4.3" userName={userName}/>}/>
            <Route path = "KomitasMuseum/forthLevel" element = {<Levels num = "4.4" userName={userName}/>}/>
            <Route path = "KomitasMuseum/fifthLevel" element = {<Levels num = "4.5" userName={userName}/>}/>
          </Route>
          <Route path = {`/${userName.firstName}/info`} element = {<UserInfo userName = {userName}/>} />
          <Route path = {`/${userName.firstName}/changePassword`} element = {<PasswordChange   userName = {userName} isSignedIn = {true}/>} />
          <Route path = "signIn/forgetPassword" element = {<PasswordChange />}/>
          <Route path = "/signIn/changed" element = {<Changed />} />
          <Route path = "*" element = {<NotFound />}/>
        </Routes>
        
    </>
  );
}

export default App;
