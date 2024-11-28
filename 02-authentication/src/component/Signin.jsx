import React,{useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase/firebase';

//create instance of authentication
const auth = getAuth(app)

function Signin() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("")
    function signInUser() {
        //this function return Promise
        signInWithEmailAndPassword(auth, email, password)
        .then((value) => console.log(value))
    }
    return (
        <>
            <h2>Sign In</h2>
            <input 
            type="email" name="email"
            placeholder='Enter email...'
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signInUser}>Sign In</button>

        </>
    )
}

export default Signin
