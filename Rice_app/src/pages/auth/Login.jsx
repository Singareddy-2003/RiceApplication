import React from 'react'

import { useState } from 'react'
import { Card,Button,Divider,Typography,Form ,Input} from "antd";
const { Title,Text } = Typography;

import { loginuser,registeruser } from '../../api/authAPI';
import { useAuth } from '../../store/context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    let [isLogin,setIsLogin] = useState(true);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const {setUserAndToken,error} = useAuth();
    // function to handle login user and register user 
    const handlefinish = async (values)=>{
    console.log(values)
    setLoading(true)
      try {
      if(isLogin){
        let response = await loginuser(values.email,values.password)
        if(response.token){
          localStorage.setItem("token",response.token)
          localStorage.setItem("user",JSON.stringify(response.user))
          // roll baseed login 
          setUserAndToken(response.user,response.token)
         if (response.user.role === 'vendor') {
            navigate('/vendor');
          } else if (response.user.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/shop');
            console.log("Navigating to /shop", response.user.role);
          }
          console.log('login response ',response)
        }

        // login logic

      }
      else{
        // register logic 

        // addimg role to the new user 

        let newuser = {
             ...values, // username , emial , password 
             role : "public",
             isActive : true
        }

        await registeruser(newuser)
        setIsLogin(true)
      }
        
      }
       catch (error) {
        console.log(error,error.message || "")
      }
    }
  return (
    <div className='login-bg d-flex justify-content-center align-items-center'>
    <Card style={{ maxWidth: 400 }} className='shadow p-4 rounded '>
    <div className='text-center mb-3'>
         <Title level={3}>{isLogin?<p>Login to <span className='text-warning fw-bold'>Rice</span> <span className='text-success fw-bold'>Mart</span></p> :<p>Register to  <span className='text-warning fw-bold'>Rice</span> <span className='text-success fw-bold'>Mart</span></p>}</Title>
     <Text type="secondary">{isLogin?"Signin to Shop the Best price ":"Create your Account to get Started"}</Text>
    </div>

    {/* form layout starts  */}

    <Form layout='vertical' onFinish={handlefinish} >
   {
    !isLogin && (
        <>
        <Form.Item 
        label="Full Name"
        name="Full Name"
        rules={[{ required: true, message: 'Please input your Fullname!' }]}
      >
       <Input prefix={<i className="bi bi-person-circle"></i>} placeholder="Full Name" />
      </Form.Item> 

 

</>
      
    )
   }

           <Form.Item 
           label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input prefix={<i className="bi bi-envelope-at-fill"></i>} type="email" placeholder="Email" />
      </Form.Item> 

        <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input prefix={<i className="bi bi-lock-fill"></i>} type="password" placeholder="Password" />
      </Form.Item>

     <Button type="primary" className='bg-success' htmlType='submit' block>
      {isLogin?"Log in":"Register"}
    </Button>

    </Form>

    <Divider orientation='center' className=' border-success'>OK</Divider>

    <Button type='link' block onClick={()=>setIsLogin(!isLogin)} className='text-success'>{!isLogin?"Already have an account Login":"Dont have an account Register"}</Button>

    {/* form layout end */}



  </Card>
       
    </div>
  )
}

export default Login
