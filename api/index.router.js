const express = require("express");
const router = express.Router();

//const userRouter = require("./user.router");
//const organizationRouter = require("./organization.router");
const authRouter = require("./auth.router");
const fAnimalRouter = require("./foundAnimals.router");
const lostAnimalsRouter = require("./lostAnimals.router");
const adoptionRouter = require("./adopcion.router");
const solicitudRouter = require("./solicitud.router");
const estadoRouter = require("./estado.router");

//router.use("/user", userRouter);
//router.use("/organization", organizationRouter);
router.use("/auth", authRouter);
router.use("/foundAnimals", fAnimalRouter);
router.use("/lostAnimals", lostAnimalsRouter);
router.use("/adopcion", adoptionRouter);
router.use("/solicitud", solicitudRouter);
router.use("/estado", estadoRouter);


module.exports = router;