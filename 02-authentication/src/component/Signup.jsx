import React, { useState } from 'react'

import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { app } from '../firebase/firebase';

//create instance of authentication
const auth = getAuth(app)

function Signup() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("")
    
    function createUser() {
        //this function return Promise
        createUserWithEmailAndPassword(auth, email,password)
        .then( (value) => console.log(value))
    }
    return (
        <>
            <h2>Sign Up</h2>
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
            <button onClick={createUser}>Sign Up</button>

        </>
    )
}

export default Signup
