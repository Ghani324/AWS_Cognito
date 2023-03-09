import React, {  createContext } from 'react'
import { CognitoUser ,AuthenticationDetails} from 'amazon-cognito-identity-js';
import Pool from './UserPool'


export const AccountContext=createContext()

const Account = (props) => {

    const getSession=async()=>{
        return new Promise((resolve,reject)=>{
            const user=Pool.getCurrentUser();
            if(user){
                user.getSession((err,session)=>{
                    if(err){
                        reject()
                    }else{
                        resolve(session)
                    }
                })
            }else{
                reject()
            }
        })
    }

    const logout=()=>{
        const user=Pool.getCurrentUser()
        if(user){
            user.signOut()
        }
    }

    const authenticate=async(Username,Password)=>{
      return await new Promise((resolve,reject)=>{
        const user=new CognitoUser({
            Username,
            Pool
        
           })
           const authDetails =new AuthenticationDetails({
        Username,
        Password
        
           })
           user.authenticateUser(authDetails,{
            onSuccess:(data)=>{
                console.log("onSuccess:"+data)
                resolve(data)
            },
            onFailure:(err)=>{
             console.error("onFailure:"+ err)
             reject(err)
            },
            newPasswordRequired:(data)=>{
                console.log("New Password Required "+ data)
                resolve(data)
            }
           })
      })
          
    }
  return (
    <AccountContext.Provider value={{authenticate,getSession,logout}}>
      {props.children}
    </AccountContext.Provider>
  )
}

export default Account
