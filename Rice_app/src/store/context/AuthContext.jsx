import React, { createContext, useContext, useReducer, useEffect } from "react";
import AuthReducer from "../reducers/AuthReducer";
import { loginuser, registeruser, logoutuser } from "../../api/authAPI";
import { useNavigate } from "react-router-dom";

// Create context
export const AuthContext = createContext();

// Initial state
const initialState = {
  user: null,
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  role: null,
  loading: true,
  error: null,
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  //   programmatic navigation
  const navigate = useNavigate(); //  Use useNavigate here

  // On mount, check localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      try {
        const userData = JSON.parse(user);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { user: userData, token },
        });
      } catch (error) {
        dispatch({ type: "LOADING_COMPLETE" });
      }
    } else {
      dispatch({ type: "LOADING_COMPLETE" });
    }
  }, []);

  // Redirect based on role after login
   //  useEffect to redirect the User To different Ui Based on Role
    useEffect(()=>{
      if (state.isAuthenticated && !state.loading) { // checking weather user is logged in or not
        if (state.role === 'admin') navigate('/admin'); // checking weather user id admin
        else if (state.role === 'vendor') navigate('/vendor');// // checking weather user id dealer
        else navigate('/shop'); //default naviagtion if user role is public
      }

    },[state.isAuthenticated,state.role,state.loading])

  // Login
  const login = async (email, password) => {
    try {
      dispatch({ type: "LOGIN_START" });
      const { user, token } = await loginuser(email, password);
      dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });
      return { success: true };
    } catch (error) {
      dispatch({
        type: "LOGIN_ERROR",
        payload: error.message || "Login failed",
      });
      return { success: false, error: error.message || "Login failed" };
    }
  };

  // Register
  const register = async (userData) => {
    try {
      dispatch({ type: "REGISTER_START" });
      const { user, token } = await registeruser(userData);
      dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });
      return { success: true };
    } catch (error) {
      dispatch({
        type: "REGISTER_ERROR",
        payload: error.message || "Registration failed",
      });
      return { success: false, error: error.message || "Registration failed" };
    }
  };

  // Logout
  const logout = () => {
    logoutuser();
    dispatch({ type: "LOGOUT" });
    navigate("/shop");
  };

  const setUserAndToken = (user, token) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });
  };

  const value = {
    ...state,
    login,
    register,
    logout,
    setUserAndToken,
  };

  if (state.loading) return <h5>Loading.......</h5>;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");

  return context;
};
