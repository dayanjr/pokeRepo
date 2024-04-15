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
    for(let i = 0; i < 18; i++){
  list += `<p1>${data.rows[i].pokemon_type}</p1><br>`
    }
    list += "</div>"
    return list
  }
  Util.getpartGrave = async function (req, res, next) {
    let data = await userModel.getDeadPokemons()
    console.log(data)
    let list = "<div>"
    for (let i = 1; i < data.rows.length; i++) {
      const row = data.rows[i];
      list += `<section id="par${row.id}">
      <img class="title_img" src="${row.images_src}"></img>
      <h1>${row.participant_name}'s graveyard:</h1>
      <h1>${row.gallery}</h1></section>`;
  }
    list += "</div>"
    return list
  }
  module.exports = Util
  Util.handleErrors = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)