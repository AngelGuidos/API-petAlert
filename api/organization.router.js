const express = require("express");
const router = express.Router();

const organizationController = require("../../controllers/organization.controller");

const organizationValidators = require("../../validators/organization.validators");
const runValidations = require("../../validators/index.middleware"); 

router.get("/", organizationController.findAll);
router.get("/:identifier",
organizationValidators.findOrganizationByIdValidator,
runValidations,
organizationController.findOneById)

router.post("/",
    organizationValidators.createOrganizationValidator,
    runValidations,
    organizationController.create)

module.exports = router;