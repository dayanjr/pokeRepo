const pool = require("../database/")

/* ***************************
 *  Get all participants data
 * ************************** */
async function getParticipants(){
  return await pool.query("SELECT * FROM public.participants")
}
async function getDeadPokemons(){
  return await pool.query("SELECT * FROM public.pokemons")
}
async function updateGrave(gallery) {
  try {
    const sql ="UPDATE public.pokemons SET gallery = gallery || $1 WHERE id = 4;"
    const data = await pool.query(sql,[gallery])
    return data.rows[0]
  } catch (error) {
    console.error("model error: " + error)
  }
}

module.exports = {getParticipants, updateGrave,getDeadPokemons}