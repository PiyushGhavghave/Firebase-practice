import { useState } from 'react'
import Signup from './component/Signup'
import Signin from './component/Signin'

function App() {

  return(
    <>
      <h1> Firebase authentication </h1>
      <Signup />
      <Signin />
    </>
    
  )
}

export default App
