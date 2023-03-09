import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import Account  from './Account'
import Status from './Status'

const App = () => {
  return (
    <Account>
      <Status />
      <SignUp />
      <Login />
    </Account>
  )
}

export default App
