const Contact = require("../model/contact_model");
const User  = require("../model/user_model");


 const getAllUsers = async(req,res) => {
    try {
      const users = await User.find({}, {password:0});
      console.log(users);
      
      if(!users || users.length === 0){
        return res.status(404).json({message:"no users found"});
      }
      return res.status(200).json(users);  
    } catch (error) {
        console.log(error);
       
    }
};

// single user logic
const getUserById = async(req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    
  const data =  await User.findOne({ _id:id}, {password:0});
  console.log(data,"db Response-------")

   return res.status(200).json(data);
  } catch (error) {
    console.log("error from userDetail by id api",error);
    
  }
};

 //  user update logic

 const updateUserById = async (req,res) => {
try {
  const id = req.params.id;
  const updateUserData = req.body;

  const updatedData = await User.updateOne({_id:id}, {
    $set: updateUserData,
  }
);
 if (!updatedData.modifiedCount === 0) {
  return res.status(200).json({ message: "No changes detected." });
}
   return res.status(201).json(updatedData);
} catch (error) {
  console.log("Update error:",error);
   return res.status(500).json({ message: "Internal Server Error", error: error.message });
  
}
 }
  //  user delete logic

const deleteUserById = async(req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({_id:id});
   return res.status(200).json({message: "User Deleted successfully"});
  } catch (error) {
    console.log(error);
   
  };
};
//   getAllContacts logic
 const getAllContact = async(req,res) => {
    try {
      const contacts = await Contact.find();
      console.log(contacts);
      
      if(!contacts ||contacts.length === 0){
        return res.status(404).json({message:"no contacts found"});
      }
      return res.status(200).json(contacts);  
    } catch (error) {
        console.log(error);
      
    }
};

  //  contact delete logic



const deleteContactById = async(req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({_id:id});
   return res.status(200).json({message: "Contact Deleted successfully"});
  } catch (error) {
    console.log(error);
   
  };
};



module.exports ={ getAllUsers, getAllContact, deleteUserById ,getUserById , updateUserById ,deleteContactById};