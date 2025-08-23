import {BrowserRouter, Route, Routes} from "react-router-dom";
import{ Home } from "./Pages/Home";
import{ About } from "./Pages/About";
import{ Contact} from "./Pages/Contact";
import{ Service} from "./Pages/Service";
import{ Register } from "./Pages/Register";
import{ Login } from "./Pages/Login";
import { Navbar } from "./components/Navbar";
import { Error } from "./Pages/Error";
import { Footer } from "./components/Footer/Footer";
import { Logout } from "./Pages/Logout";
import { AdminLayout } from "./components/Layouts/Admin-Layout";
import  { AdminUsers } from "./Pages/Admin_Users";
import  { AdminContacts } from "./Pages/Admin_Contact";


  const App = () => {
  return(
    <>
    <BrowserRouter>
    <Navbar/>
   <Routes>
   <Route path= "/" element = {<Home/>}/>
    <Route path= "/about" element = {<About/>}/>
     <Route path= "/contact" element = {<Contact/>}/>
      <Route path= "/service" element = {<Service/>}/>
       <Route path= "/register" element = {<Register/>}/>
        <Route path= "/login" element = {<Login/>}/>
        <Route path="/logout" element= {<Logout/>}/>
        <Route path="*" element={<Error/>} />
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="users" element={<AdminUsers/>}/>
           <Route path="contacts" element={<AdminContacts/>}/>

        </Route>
         </Routes>
         <Footer/>
        </BrowserRouter>

    </>
  )

};

  export default  App ;   


