const express = require("express");
const router  =  express.Router();
const adminController = require("../controller/admin_controller");
const  authMiddleware =require("../middleware/auth_middleware");
const adminMiddleware = require("../middleware/admin_middleware");


router.route('/users').get(authMiddleware,adminMiddleware  , adminController.getAllUsers);
router.route("/contacts").get(authMiddleware,adminMiddleware, adminController.getAllContact)

module.exports = router;