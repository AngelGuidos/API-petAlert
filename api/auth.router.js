const Express = require("express");
const router = Express.Router();

const authController = require("../../controllers/auth.controller");
const runValidations = require("../../validators/index.middleware");
const { registerValidators } = require("../../validators/auth.validators");
const { registerOrgValidators } = require("../../validators/authOrg.validators");

router.post("/signup",
    registerValidators,
    runValidations,
    authController.register
);

router.post("/signup/org",
    registerOrgValidators,
    runValidations,
    authController.registerOrg
);

router.post("/signin", authController.login);

router.get("/whoami", authController.whoami);

module.exports = router;

