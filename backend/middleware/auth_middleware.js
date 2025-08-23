const jwt = require("jsonwebtoken");
const User = require( "../model/user_model");

 const authMiddleware = async  (req, res, next) => {
  const token = req.header('Authorization');

  if(!token){
  return res.status(401).json({message: "Authorization token missing or malformed"});
  }
  
  const jwtToken = token.replace('Bearer ', '').trim();
  console.log('token form auth middleware',jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken,process.env. JWT_SECRET);

    const userData = await User.findOne({email:isVerified.email})
    .select({
      password:0,

    });
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(userData);

    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    
      next();
  } catch (error) {
     console.error("Auth Error:", error.message);
      return res.status(401).json({message: "Unauthorized HTTP. Invalid token."});
  }
  



};

module.exports = authMiddleware;