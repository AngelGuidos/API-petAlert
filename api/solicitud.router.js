const express = require("express");
const router = express.Router();

const solicitudController = require("../../controllers/solicitud.controller");

const solicitudValidators = require("../../validators/solicitud.validators");
const runValidations = require("../../validators/index.middleware");

const { authentication } = require("../../middlewares/auth.middlewares");

router.get("/", solicitudController.findAll);
router.get("/own", authentication, solicitudController.findOneByUserId);
router.get("/:id_usuario",
    solicitudValidators.findSolicitudByUserIdValidator,
    runValidations,
    solicitudController.findOneByUserId);

router.post("/",
    authentication,
    solicitudValidators.createSolicitud,
    runValidations,
    solicitudController.create);

router.patch("/visibility/:identifier", 
    authentication,
    solicitudValidators.findSolicitudByUserIdValidator,
    runValidations,
    solicitudController.toggleVisibility);

module.exports = router;