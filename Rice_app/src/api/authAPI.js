import { apiClient,mockAuth } from "./config";

// function to handle login api 
export const loginuser=async(email,password)=>{
   try{
    let res = await apiClient.get('/users',{
        params:{email}
    }) 
    // checking the user console,log(Rres)

    console.log(res)

    // checking already the user or email exixts in the database 

    let user = res.data.find( u => u.email == email && u.password == password)

    // if user not exists throw an errror 

    if(!user){
        throw new Error ("user Email and password not found ")
    }
    // generate the token if user exist 

    let token = mockAuth.generateToken(user)

    // save the token and useer to local storage 

    localStorage.setItem("token",token)
    localStorage.setItem("user",JSON.stringify(user))

    return (user,token)
   }
   catch(error){
     return error
   }
}

// function to handle register api 

export const registeruser = async(newuser)=>{
  // checking already the user exists in the db or not  
 try {
  let res = await apiClient.get('/users',{
    params:{email:newuser.email}
  }
  )

if (res.data.length>0){
  throw new Error("User already exixts ")
}

// creating the new user 
let saveUser  = await apiClient.post("/users",newuser)


  // generate a token 
  let token = mockAuth.generateToken(saveUser.data)

    // save the token and useer to local storage 

  localStorage.setItem("token",token)
  localStorage.setItem("user",JSON.stringify(saveUser.data))
  return {user:saveUser.data ,token}
 } 
 
 catch (error) {
   return error
 }

}


// function to handle logoput api 

export const logoutuser = ()=>{
  localStorage.removeItem("token")
  localStorage.removeItem("user")
}