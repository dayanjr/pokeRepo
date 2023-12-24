// Needed Resources 
const express = require("express")
const router = new express.Router() 
const userController = require("../controllers/userController")
const utilities = require("../utilities")
router.get("/titles", utilities.handleErrors(userController.buildTitlespage))