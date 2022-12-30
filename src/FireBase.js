import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"


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

export default data