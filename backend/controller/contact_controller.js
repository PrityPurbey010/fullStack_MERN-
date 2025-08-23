const Contact = require("../model/contact_model");

const contactForm = async (req, res) => {
    try {
       const response = req.body;
       await Contact.create(response);
       return res.status(200).json({message: "message and successfully"}); 
    } catch (error) {
        return res.status(500).json({message: "message not successfully"}); 
    }
};

module.exports = contactForm;