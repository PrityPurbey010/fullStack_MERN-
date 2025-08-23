
const Service = require("../model/service_model");
// const { login } = require("./auth_controller");



const service = async (req, res) => {
try {

    const response = await Service.find();
    if(!response){
        res.status(404).json({message: 'no service found'});
        return;
    }
    res.status(200).json({message: response});

} catch (error) {
    console.log(`services ${error}`);
    
}
};

module.exports = service;