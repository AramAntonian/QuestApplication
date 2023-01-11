import { initializeApp } from "firebase/app";
import { collection, getFirestore,getDocs, addDoc } from "@firebase/firestore"
import { createUserWithEmailAndPassword, getAuth,GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAsL7FRX_NV2MYFwJnDVGTcyJpsv8oLDUw",
    authDomain: "quest-28ea9.firebaseapp.com",
    projectId: "quest-28ea9",
    storageBucket: "quest-28ea9.appspot.com",
    messagingSenderId: "1078096167728",
    appId: "1:1078096167728:web:7f2b961c1a066a6d05fef5",
    measurementId: "G-H6NMCLSMG6"
}
  

const app = initializeApp(firebaseConfig)
const data = getFirestore(app)
const auth = getAuth(app)

const provider = new GoogleAuthProvider()


async function signInWithGoogle(setUserName,setIsSignedUp){
    signInWithPopup(auth,provider).then(async result =>{
        const user = result.user;
        setIsSignedUp(true)
        const userRef = collection(data,"users")
        const data1 = await getDocs(userRef)
        const users  = data1.docs.map(el=>({...el.data()}))
        if(!users.filter(el => el.email === user.email)[0])
            addDoc(userRef,{
                firstName:user.displayName.split(" ")[0],
                lastName:user.displayName.split(" ")[1],
                email:user.email,
                password:"",
                points:0,
                Levels:{
                    firstMuseum:{
                        lvl1:false,
                        lvl2:false,
                        lvl3:false,
                        lvl4:false,
                        lvl5:false,
                    },
                    secondMuseum:{
                        lvl1:false,
                        lvl2:false,
                        lvl3:false,
                        lvl4:false,
                        lvl5:false,
                    },
                    thirdMuseum:{
                        lvl1:false,
                        lvl2:false,
                        lvl3:false,
                        lvl4:false,
                        lvl5:false,
                    },
                    forthMuseum:{
                        lvl1:false,
                        lvl2:false,
                        lvl3:false,
                        lvl4:false,
                        lvl5:false,
                    }
                }
            })
            else{
                
                 setUserName(
                    {
                        ...users.filter(el => el.email === user.email)[0]
                    }
                )
                
            }
        
    }).catch(async (error) => {
        alert(error.message)
      })
}




 function signInWith(email,password,setHandler,setUserName,setErrors,type){
    signInWithEmailAndPassword(auth, email, password)
    .then(async () => {
        if(email.length && password.length && type === "signIn"){
            const userRef = collection(data,'users')
            const data1 = await getDocs(userRef)
            const users  = data1.docs.map(el=>({...el.data()}))
            setUserName(
                {
                    ...users.filter(el => el.email === email)[0]
                }
            )
            setHandler(true)        
        }
        else{
            setHandler(true)    
        }
            
    })
    .catch((error) => {
        setErrors(true)
        setTimeout(()=> setErrors(false),5000)
        alert(error.message)
       
    })
}
function signUp(email,password,firstName,lastName,setHandler){
    createUserWithEmailAndPassword(auth, email, password)
    .then(async () => { 
        const userRef = collection(data,'users')
        const data1 = await getDocs(userRef)
        if(!data1.filter(el => el.email === email)[0])

            addDoc(userRef,{
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:password,
                points:0,
                Levels:{
                    firstMuseum:{
                        lvl1:false,
                        lvl2:false,
                        lvl3:false,
                        lvl4:false,
                        lvl5:false,
                    },
                    secondMuseum:{
                        lvl1:false,
                        lvl2:false,
                        lvl3:false,
                        lvl4:false,
                        lvl5:false,
                    },
                    thirdMuseum:{
                        lvl1:false,
                        lvl2:false,
                        lvl3:false,
                        lvl4:false,
                        lvl5:false,
                    },
                    forthMuseum:{
                        lvl1:false,
                        lvl2:false,
                        lvl3:false,
                        lvl4:false,
                        lvl5:false,
                    }
                }
            })
            else{
                setHandler(true);
            }
    
  })
  .catch((error) => {
    alert(error.code,error.message)
  });

}




export {data,signInWith,signUp,signInWithGoogle}