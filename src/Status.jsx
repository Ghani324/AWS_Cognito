import React,{useContext,useEffect,useState} from 'react'
import { AccountContext } from './Account'
const Status = () => {
    const {getSession,logout} =useContext(AccountContext)
    const [status,setStatus]=useState(false)

    useEffect(()=>{
getSession()
.then(session=>{
    console.log("Session:",session)
    setStatus(true)
})

    },[status,getSession])



  return (
    <div>
      {status ? <button onClick={logout}>Logout</button> : <h3>Please Login</h3>}
    </div>
  )
}

export default Status
