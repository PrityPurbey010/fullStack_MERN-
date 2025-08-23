const mongoose = require("mongoose");

const connectDb = async () =>{
    try {
       await mongoose.connect(process?.env?.Security) ;
       console.log("Database is connected successfully");
       
    } catch (error) {
       console.error(" database  connected failed");
         process.exit(0);
    }
};

module.exports = connectDb;

