const userModel = require("../models/userModel")
const utilities = require("../utilities/")
const userCont = {}
userCont.buildHome = async function (req, res, next) {
    //const grid = await utilities.buildClassificationGrid(data)
    let grid = await utilities.getGrave()
    let partg = await utilities.getpartGrave()
    //const className = data[0].classification_name
    res.render("index", {
      title:"home:",
      grid,
      //partg
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
    //const {gallery,} = req.body;
    const { normalType, fireType, waterType, 
      electricType, grassType, iceType, 
      fightingType, poisonType, groundType, 
      flyingType, psychicType, bugType, rockType, 
      ghostType, dragonType, darkType, steelType, fairyType } = req.body;

    const updateResult = await userModel.updateGrave(normalType, fireType, waterType, 
      electricType, grassType, iceType, 
      fightingType, poisonType, groundType, 
      flyingType, psychicType, bugType, rockType, 
      ghostType, dragonType, darkType, steelType, fairyType )
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
module.exports = userCont