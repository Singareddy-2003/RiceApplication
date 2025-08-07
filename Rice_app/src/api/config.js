import axios from "axios";

// creating a reusable instance for all api calls 

export const apiClient = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_BASE_URL ,
    headers:{
        "Content-Type" : "application/json"
    }
})


// generating the token 

// used for checkung who you are (admin,public,delaer) and what accesss we have in these app (authorization )

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
  
);


// handling the response 

apiClient.interceptors.response.use(
    (response)=>response,
    (error) => {
        if(error.response?.status==401){
            localStorage.removeItem("token")
            localStorage.removeItem("user") // optional\
            window.location.href="/login"
        }
    return Promise.reject(error)
    }
)


// generating dummy token simulation (actually it will be generated in backend )\\

export const mockAuth = {
    generateToken:(user)=>{
        return `mock_auth ${user.id}_${Date.now()}` 
    }
}