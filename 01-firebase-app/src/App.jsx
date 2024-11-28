import { useState } from 'react'
import './App.css'

import {getDatabase, set, ref} from 'firebase/database'
import { app } from './Firebase/firebase'
import Profile from './components/Profile'

//make instance of databse
const db = getDatabase(app)

function App() {

  const addData = () => {
    //create user reference 
    const userRef = ref(db, 'user/piyush');

    //set value
    set(userRef,{
      name : 'Piyush',
      age : '24',
    })
  }

  return(
    <>
      <h2>This is firebase project</h2>
      <button onClick={addData}>Add data</button>
      <Profile />
    </>
  )
}

export default App
