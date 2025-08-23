// import { response } from "express";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [token, setToken] = useState(localStorage.getItem('token'));
      const [user, setUser] = useState("");
      const [services, setServices] = useState([]);
      const  AuthorizationToken = `Bearer ${token}`;

    const storeTokenInLS = (serverToken) => {
      setToken(serverToken);
      return localStorage.setItem("token", serverToken)
      
    } ;

    let isLoggedIn = !!token;
    console.log("isLoggedIn",isLoggedIn);
    


    //  tackle the logout functionality

    const LogoutUser =  () => {
      setToken("");
      return localStorage.removeItem("token");
    };

    // JWT Authentication - to get the currently loggedIn user data 

     const userAuthentication = async (req, res) => {
      try {
          const respone = await fetch("http://localhost:3000/api/auth/user", 
    {
      method: "GET",
      headers:{
        Authorization: AuthorizationToken,
      },
     });

     if(respone.ok){
        const data = await respone.json();
        console.log('user data', data.userData);
        
        setUser(data.userData);
       }

      } catch (error) {
         console.log("Error fetching user data");
    
     }
    };

    // to fetch the services data from the database
    const getServices = async() => {
      try {
          const response = await fetch("http://localhost:3000/api/data/service",{
            method:"GET",
          });
          if(response.ok){
            const data = await response.json();
            console.log(data.message);
            setServices(data.message);
            
          }
         } catch (error) {
     console.log(` service frontend error: ${error}`);
    
    }
    }

    useEffect (() => {
       getServices();
        userAuthentication();
    }, []);
        


  return (
  <AuthContext.Provider value={{isLoggedIn, storeTokenInLS, LogoutUser, user, services, AuthorizationToken }}>
    {children}
  </AuthContext.Provider>
  );
};

export const  useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};