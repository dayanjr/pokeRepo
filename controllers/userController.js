const userModel = require("../models/userModel")
const utilities = require("../utilities/")
const userCont = {}
userCont.buildHome = async function (req, res, next) {
    //const grid = await utilities.buildClassificationGrid(data)
    let grid = await utilities.getGrave()
    //const className = data[0].classification_name
    res.render("index", {
      title:"home:",
      grid
    })
  }
userCont.buildTitlesPage = async function (req, res, next) {
    //const grid = await utilities.buildClassificationGrid(data)
    let grid = await utilities.getInfo()
    //const className = data[0].classification_name
    res.render("./title/titles", {
      title:"Participants Titles:",
      grid
    })
  }
userCont.buildRulesPage = async function (req, res, next) {
    //const grid = await utilities.buildClassificationGrid(data)
    //let grid = await utilities.getInfo()
    //const className = data[0].classification_name
    res.render("./rules/rulesPage", {
      title:"Rules Page:"
    })
  }
userCont.buildFutureGamePage = async function (req, res, next) {
    //const grid = await utilities.buildClassificationGrid(data)
    //let grid = await utilities.getInfo()
    //const className = data[0].classification_name
    res.render("./future/pokemon", {
      title:"Future Game Page:"
    })
  }
userCont.updateGraveyard = async function (req, res, next) {
    let grid = await utilities.getGrave()
    const {gallery,} = req.body
    const updateResult = await userModel.updateGrave(gallery,)
    if (updateResult) {
      res.render("index", {
        title: "home:",
        grid
        })
    } else {
      res.status(501).render("index", {
        title: "home:",
        grid
        })
    }
  }
  /* ****************************************
*  Process Registration
* *************************************** */
 userCont.registerAccount= async function (req, res) {
  //let nav = await utilities.getNav()
  const { account_firstname, account_lastname, account_email, account_password } = req.body

  const regResult = await userModel.registerAccount(
    account_firstname,
    account_lastname,
    account_email,
    account_password
  )
  if (regResult) {
    req.flash(
      "notice",
      `Congratulations, you\'re registered ${account_firstname}. Please log in.`
    )
    res.status(201).render("account/login", {
      title: "Login",
      nav,
    })
  } else {
    req.flash("notice", "Sorry, the registration failed.")
    res.status(501).render("account/register", {
      title: "Registration",
      nav,
    })
  }
}
module.exports = userCont