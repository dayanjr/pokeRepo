const userModel = require("../models/userModel")
const utilities = require("../utilities/")
const userCont = {}
userCont.buildByTitlesPage = async function (req, res, next) {
    //const grid = await utilities.buildClassificationGrid(data)
    //let grid = await utilities.getInfo()
    //const className = data[0].classification_name
    res.render("./title/titles", {
      title:"Participants Titles:"
    })
  }
module.exports = userCont