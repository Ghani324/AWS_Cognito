import React ,{useState} from 'react'
import UserPool from './UserPool'
const SignUp = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

   const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(email,password)
    UserPool.signUp(email,password,[],null,(err,data)=>{
        if (err){
            console.log(err)
            return 
        }
        console.log(data)
    })
   }

   
  return (
    <div>
        <h3>Registration</h3>
        <label htmlFor="email">Email</label>
        <input type="text" value={email} name='email' onChange={e=>setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="text" value={password} name='email' onChange={e=>setPassword(e.target.value)} />
        <button  onClick={handleSubmit} >Sign Up</button>
     
    </div>
  )
}

export default SignUp
