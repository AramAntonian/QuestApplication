import { Route, Routes } from "react-router-dom";
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
import VerifyCode from "./Components/VerifyCode";
import NewPassword from "./Components/NewPassword";



function App() {
  const [userName,setUserName] = useState("")

  useEffect(()=>{
    setUserName(localStorage.getItem('USERNAME'))
  },[])
  useEffect(()=>{
    localStorage.setItem('USERNAME',userName)
  },[userName])

  return (
    <>
        <Routes>
          <Route path = "/" element = {<Header />}>
            <Route index element = {<HomePage />}/>
            <Route path = "/firstMuseum" element = {<FirstMuseum />}/>
            <Route path = "/secondMuseum" element = {<SecondMuseum />}/>
            <Route path = "/thirdMuseum" element = {<ThirdMuseum />} />
            <Route path = "/forthMuseum" element = {<ForthMuseum />} />
          </Route>
          <Route  path = "/signIn" element = {<SignIn userName={userName} setUserName = {setUserName} />} />
          <Route path = "/signUp" element =  {<SignUp setUserName = {setUserName}/>} />
          <Route path = {`/${userName}`} element = {<LoggedInHeader userName = {userName}/>}>
            <Route index element = {<LoggedInPage userName={userName}/>} />
            <Route path = "firstMuseum" element = {<QuestPage num= "1" userName = {userName}/>}/>
            <Route path = "secondMuseum" element = {<QuestPage num= "2" userName = {userName}/>}/>
            <Route path = "thirdMuseum" element = {<QuestPage num= "3" userName = {userName}/>}/>
            <Route path = "forthMuseum" element = {<QuestPage num= "4" userName = {userName}/>}/>
            <Route path = "firstMuseum/firstLevel" element = {<Levels num = "1.1" userName={userName}/>}/>
            <Route path = "firstMuseum/secondLevel" element = {<Levels num = "1.2" userName={userName}/>}/>
            <Route path = "firstMuseum/thirdLevel" element = {<Levels num = "1.3" userName={userName}/>}/>
            <Route path = "firstMuseum/forthLevel" element = {<Levels num = "1.4" userName={userName}/>}/>
            <Route path = "firstMuseum/fifthLevel" element = {<Levels num = "1.5" userName={userName}/>}/>
            <Route path = "secondMuseum/firstLevel" element = {<Levels num = "2.1" userName={userName}/>}/>
            <Route path = "secondMuseum/secondLevel" element = {<Levels num = "2.2" userName={userName}/>}/>
            <Route path = "secondMuseum/thirdLevel" element = {<Levels num = "2.3" userName={userName}/>}/>
            <Route path = "secondMuseum/forthLevel" element = {<Levels num = "2.4" userName={userName}/>}/>
            <Route path = "secondMuseum/fifthLevel" element = {<Levels num = "2.5" userName={userName}/>}/>
            <Route path = "thirdMuseum/firstLevel" element = {<Levels num = "3.1" userName={userName}/>}/>
            <Route path = "thirdMuseum/secondLevel" element = {<Levels num = "3.2" userName={userName}/>}/>
            <Route path = "thirdMuseum/thirdLevel" element = {<Levels num = "3.3" userName={userName}/>}/>
            <Route path = "thirdMuseum/forthLevel" element = {<Levels num = "3.4" userName={userName}/>}/>
            <Route path = "thirdMuseum/fifthLevel" element = {<Levels num = "3.5" userName={userName}/>}/>
            <Route path = "forthMuseum/firstLevel" element = {<Levels num = "4.1" userName={userName}/>}/>
            <Route path = "forthMuseum/secondLevel" element = {<Levels num = "4.2" userName={userName}/>}/>
            <Route path = "forthMuseum/thirdLevel" element = {<Levels num = "4.3" userName={userName}/>}/>
            <Route path = "forthMuseum/forthLevel" element = {<Levels num = "4.4" userName={userName}/>}/>
            <Route path = "forthMuseum/fifthLevel" element = {<Levels num = "4.5" userName={userName}/>}/>
          </Route>
          <Route path = {`/${userName}/info`} element = {<UserInfo userName = {userName}/>} />
          <Route path = {`/${userName}/changePassword`} element = {<PasswordChange   userName = {userName} isSignedIn = {true}/>} />
          <Route path = {`/${userName}/verifyCode`} element = {<VerifyCode userName={ userName } isSignedIn  = {true}/>} />
          <Route path = {`/${userName}/newPassword`}  element = {<NewPassword userName={ userName } isSignedIn = {true} />}/>
          <Route path = "/signIn/forgetPassword" element = {<PasswordChange /> } />
          <Route path = "/signIn/verifyCode" element = {<VerifyCode />} />
          <Route path = "/signIn/newPassword" element = {<NewPassword />} />
        </Routes>
    </>
  );
}

export default App;
