/*const express =require("express");
const router = express.Router();

const userController = require("../../controllers/user.controller")

const userValidators = require("../../validators/user.validators");
const runValidations = require("../../validators/index.middleware"); 

router.get("/", userController.findAll);
router.get("/:identifier",
userValidators.findUserByIdValidator,
runValidations,
userController.findOneById);

router.post("/",
    userValidators.createUserValidator,
    runValidations,
    userController.create)

module.exports = router;*/