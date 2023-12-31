/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const Util = require("./utilities")
const expressLayouts = require("express-ejs-layouts")
const express = require("express")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")
const userRoute = require("./routes/userRoutes")
const bodyParser = require("body-parser")
const baseController = require("./controllers/userController")
/* ***********************
 * Routes
 *************************/
app.use(static)
/* ***********************
 * View Engine and Templates
 *************************/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout") // not at views root
app.get("/", Util.handleErrors(baseController.buildHome))
app.post("/", baseController.updateGraveyard)
app.use("/user", userRoute);
//app.use("/user",userRoute);
/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})
