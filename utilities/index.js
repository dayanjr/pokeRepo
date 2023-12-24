const userModel = require("../models/userModel")
const Util = {}
Util.getNav = async function (req, res, next) {
    let data = await userModel.getParticipants()
    console.log(data)
    let list = "<div>"
    list += '<li><a href="/" title="Home page">Home</a></li>'
    data.rows.forEach((row) => {
      list += "<li>"
      list +=
        '<a href="/inv/type/' +
        row.classification_id +
        '" title="See our inventory of ' +
        row.classification_name +
        ' vehicles">' +
        row.classification_name +
        "</a>"
      list += "</li>"
    })
    list += "</div>"
    return list
  }
  module.exports = Util