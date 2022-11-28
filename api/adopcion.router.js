const express = require("express");
const router = express.Router();

const adoptionController = require("../../controllers/adopcion.controller");

const adoptionValidators = require("../../validators/adopcion.validators");
const runValidations = require("../../validators/index.middleware"); 

const { authenticationOrg } = require("../../middlewares/auth.middlewares");

router.get("/", adoptionController.findAll);
router.get("/own", authenticationOrg, adoptionController.findOneByUserId);
router.get("/:id_usuario",
    adoptionValidators.findAdoptionByUserIdValidator,
    runValidations,
    adoptionController.findOneByUserId);

router.post("/",
    authenticationOrg,
    adoptionValidators.createAdoption,
    runValidations,
    adoptionController.create);

router.patch("/visibility/:identifier",
    authenticationOrg,
    adoptionValidators.findAdoptionByUserIdValidator,
    runValidations,
    adoptionController.toggleVisibility);

module.exports = router;