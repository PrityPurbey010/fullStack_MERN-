const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth_router");
const  contactRoute = require("./router/contact_router");
const serviceRouter = require("./router/service-router");
const  adminRoute = require("./router/admin_router");
const connectDb = require("./utils/db");
  dotenv?.config();

  // let's tackle cors 

  const corsOption = {
    origin: "http://localhost:5173",
   methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
   credentials: true,
  };

  app.use(cors(corsOption));
  app.use(express.json());
  
  app.use("/api/auth", authRoute);
  app.use("/api/form", contactRoute);
  app.use("/api/data", serviceRouter);

  // let's define admin route
 app.use("/api/admin",adminRoute);

   const PORT = process?.env?.PORT;

     connectDb().then(() =>{
 
      app.listen (PORT,() => {
      console.log(`Server is running on at ${PORT}`);
   });
   });
   

