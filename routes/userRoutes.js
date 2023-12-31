// Needed Resources 
const express = require("express")
const router = new express.Router() 
const userController = require("../controllers/userController")
const utilities = require("../utilities")
router.get("/titles", utilities.handleErrors(userController.buildTitlesPage))
router.get("/rules", utilities.handleErrors(userController.buildRulesPage))
router.get('/fg', utilities.handleErrors(userController.buildFutureGamePage))
//router.post("/fg", userController.updateGraveyard)
module.exports = router;