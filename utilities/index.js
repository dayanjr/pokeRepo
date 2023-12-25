const userModel = require("../models/userModel")
const Util = {}
Util.getInfo = async function (req, res, next) {
    let data = await userModel.getParticipants()
    console.log(data)
    let list = "<div>"
    data.rows.forEach((row) => {
      list += "<section>"
      list += 
        '<p1>' +
        row.combatant_name +
        '</p1>'
      list += "</section>"
    })
    list += "</div>"
    return list
  }
  module.exports = Util
  Util.handleErrors = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)