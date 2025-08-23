import { useState } from "react";
import {useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login = () => {

const [user, setUser] = useState({
    email:"",
    password:"",
    
});
 const navigate = useNavigate();
 const { storeTokenInLS } = useAuth();



const handleInput = (e) => {
  let name = e.target.name;
  let value= e.target.value;

  setUser({
    ...user,
    [name]:value,
  });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
   try {
              const response = await fetch(`http://localhost:3000/api/auth/login` , {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
               }) ;
                 if(response.ok){
                   alert("Login Successful ");
                    const res_data = await response.json();
                    storeTokenInLS(res_data.token);
                 
                 setUser({ email:"", password:"",});
                 navigate("/")
               }else {
                toast.error('invalid credentials');
                console.log('invalid credentials');
                
               }
                console.log("login form",response);
          } 
          catch (error) {
            console.log(error);
            
          }
    
};

    return (
        <>
        <section>
            <main>
                <div className="section-login">
                    <div className="container">
                        <div className="login-image">
                            <img src="/image/logo-img.png"
                             alt="let's fill the login form"  
                            width={500} height={500} />
                        </div>
                         <div className="login-form">
                              <h1 className="main-heading mb-3">
                                Login  form</h1>
                                <br />
                        <form onSubmit={handleSubmit} >
                           
                             <div>
                                <label htmlFor="email">email</label>
                                <input type="text"
                                 name="email"  
                                placeholder="enter your email"
                                id="email"
                                required
                                autoComplete="off" 
                                value={user.email}
                                onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">password</label>
                                <input type="password"
                                 name="password"  
                                placeholder="password"
                                id="password"
                                required
                                autoComplete="off"
                                value={user.password}
                                onChange={handleInput}
                                />
                            </div>
                            <br />
                            <button type="submit"  className="">Login Now</button>
                        </form>
                     
                      </div>
                       
                            
                    </div>
                </div>
            </main>
        </section>
        
        </>
    );
} ;