import React ,{useState,useContext} from 'react'
import { AccountContext } from './Account';

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {authenticate}= useContext(AccountContext)

   const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(email,password)

   authenticate(email,password)
   .then(data=>console.log("Logged in"+ data))
   .catch(err=>console.log("Failed to Login"+err))
   
   }

   
  return (
    <div>
        <h3>Login</h3>
        <label htmlFor="email">Email</label>
        <input type="text" value={email} name='email' onChange={e=>setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="text" value={password} name='email' onChange={e=>setPassword(e.target.value)} />
        <button  onClick={handleSubmit} >Login</button>
     
    </div>
  )
}

export default Login
