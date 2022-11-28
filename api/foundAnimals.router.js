const express =require("express");
const router = express.Router();

const fAnimalController = require("../../controllers/foundAnimals.controller");

const fAnimalsValidators = require("../../validators/foundAnimals.validators");
const runValidations = require("../../validators/index.middleware"); 

const { authentication } = require("../../middlewares/auth.middlewares");

router.get("/", fAnimalController.findAll);
router.get("/own", authentication, fAnimalController.findOneByUserId);
router.get("/:id_usuario",
fAnimalsValidators.findFoundAnimalByUserIdValidator,
runValidations,
fAnimalController.findOneByUserId);

router.post("/",
authentication,
fAnimalsValidators.createfAnimalValidator,
runValidations,
fAnimalController.create);

router.patch("/visibility/:identifier", 
authentication,
fAnimalsValidators.findFoundAnimalByUserIdValidator,
runValidations,
fAnimalController.toggleVisibility);

module.exports = router;