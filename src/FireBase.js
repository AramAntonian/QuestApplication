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
        setUserName(user.displayName)
        setIsSignedUp(true)
        
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
            const userName = users.filter(el => el.email === email)[0]
            setUserName(`${userName.firstName} ${userName.lastName}`)
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
function signUp(email,password,firstName,lastName){
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => { 
        const userRef = collection(data,'users')

        addDoc(userRef,{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            points:0,
        })
    
  })
  .catch((error) => {
    alert(error.code,error.message)
  });

}




export {data,signInWith,signUp,signInWithGoogle}