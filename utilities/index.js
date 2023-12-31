const userModel = require("../models/userModel")
const Util = {}
Util.getInfo = async function (req, res, next) {
    let data = await userModel.getParticipants()
    console.log(data)
    let list = "<div>"
    data.rows.forEach((row) => {
      list += `<section id="par${row.id}">
      <img class="title_img" src="${row.image_url}"></img>
      <h1>${row.combatant_name}: </h1>
      ${'<img  id="gold" src="/images/site/champions.png">'.repeat(row.gold_titles)
      + '<img  id="silver" src="/images/site/second-prize.png"> '.repeat(row.silver_titles)}</section>`;
    })
    list += "</div>"
    return list
  }
Util.getGrave = async function (req, res, next) {
    let data = await userModel.getDeadPokemons()
    console.log(data)
    let list = "<div>"
    list +=`<h1 class="grave">Graveyard:</h1>`
  list += `<p1>${data.rows[3].gallery}</p1>`
    list += "</div>"
    return list
  }
  module.exports = Util
  Util.handleErrors = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)