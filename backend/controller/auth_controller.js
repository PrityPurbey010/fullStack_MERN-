const User = require("../model/user_model");
const bcrypt = require("bcrypt");

const home = async (req,res) => {
    try {
       res.status(200).send("Welcome to My home page using auth controller") ;
    } catch (error) {
        console.log(error);
        
    }
};

const register = async (req, res) => {
   try {
    console.log(req.body);
    const {username, email, phone, password} = req.body;

     const userExist = await User.findOne({email});

     if(userExist){
   return res.status(400).json({msg: "email already exist"});
     }
       const userCreated = await User.create({username, email, phone,
       password});
    
     res.status(201).json({
      msg:"registration successful", 
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
});

   } catch (error) {
      res.status(400).json({msg:"internal server error"});
   }
};

const login = async (req,res) => {
    try {
     const {email, password} = req.body;
      const userExist = await User.findOne({email});
      console.log(userExist);
      

      if(!userExist){
         return res.status(400).json({message: "Invalid Credentials"});
      }

      // const user =  await bcrypt.compare(password, userExist.password);
      const user = await userExist.comparePassword(password);
      if(user){
          res.status(201).json({
      msg:"login  successful", 
      token: await userExist.generateToken(),
      userId: userExist._id.toString(),
});

      }else{
         res.status(401).json({message:"Invalid password or email"});
      }
       
    } catch (error) {
         res.status(400).json({msg:"internal server error"});
        
    }
};

// to send user data - user logic

const user = async (req, res) => {
try {
   const userData = req.user;
   console.log(userData);
  return res.status(200).json({userData});
   
} catch (error) {
    console.log(`error from  the user route ${error}`);
    
}
}

module.exports = {home , register , login , user};