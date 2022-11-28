const express =require("express");
const router = express.Router();

const lostAnimalController = require("../../controllers/lostAnimals.controller");

const lostAnimalsValidators = require("../../validators/lostAnimals.validators");
const runValidations = require("../../validators/index.middleware"); 

const { authentication } = require("../../middlewares/auth.middlewares");

router.get("/", lostAnimalController.findAll);
router.get("/own", authentication, lostAnimalController.findOneByUserId);
router.get("/:id_usuario",
    lostAnimalsValidators.findLostAnimalByUserIdValidator,
    runValidations,
    lostAnimalController.findOneByUserId);

router.post("/",
    authentication,
    lostAnimalsValidators.createLostAnimalValidator,
    runValidations,
    lostAnimalController.create);

router.patch("/visibility/:identifier",
    authentication,
    lostAnimalsValidators.findLostAnimalByUserIdValidator,
    runValidations,
    lostAnimalController.toggleVisibility);

module.exports = router;