const express =require("express");
const router = express.Router();

const estadoController = require("../../controllers/estado.controller");

const estadoValidator = require("../../validators/estado.validators");
const runValidations = require("../../validators/index.middleware");

router.get("/", estadoController.findAll);
router.get("/:identifier",
    estadoValidator.findOneByIdentifier,
    runValidations,
    estadoController.findOneByIdentifier);

router.post("/",
    estadoValidator.createEstadoValidator,
    runValidations,
    estadoController.create);

module.exports = router;