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
async function updateGrave(normalType, fireType, waterType, 
  electricType, grassType, iceType, 
  fightingType, poisonType, groundType, 
  flyingType, psychicType, bugType, rockType, 
  ghostType, dragonType, darkType, steelType, fairyType ) {
  try {
    const sql =`UPDATE public.pokemons SET pokemon_name = $1 WHERE id = 1;
    UPDATE public.pokemons SET pokemon_name = $2 WHERE id = 2;
    UPDATE public.pokemons SET pokemon_name = $3 WHERE id = 3;
    UPDATE public.pokemons SET pokemon_name = $4 WHERE id = 4;
    UPDATE public.pokemons SET pokemon_name = $5 WHERE id = 5;
    UPDATE public.pokemons SET pokemon_name = $6 WHERE id = 6;
    UPDATE public.pokemons SET pokemon_name = $7 WHERE id = 7;
    UPDATE public.pokemons SET pokemon_name = $8 WHERE id = 8;
    UPDATE public.pokemons SET pokemon_name = $9 WHERE id = 9;
    UPDATE public.pokemons SET pokemon_name = $10 WHERE id = 10;
    UPDATE public.pokemons SET pokemon_name = $11 WHERE id = 11;
    UPDATE public.pokemons SET pokemon_name = $12 WHERE id = 12;
    UPDATE public.pokemons SET pokemon_name = $13 WHERE id = 13;
    UPDATE public.pokemons SET pokemon_name = $14 WHERE id = 14;
    UPDATE public.pokemons SET pokemon_name = $15 WHERE id = 15;
    UPDATE public.pokemons SET pokemon_name = $16 WHERE id = 16;
    UPDATE public.pokemons SET pokemon_name = $17 WHERE id = 17;
    UPDATE public.pokemons SET pokemon_name = $18 WHERE id = 18;`
    const data = await pool.query(sql,[normalType, fireType, waterType, 
      electricType, grassType, iceType, 
      fightingType, poisonType, groundType, 
      flyingType, psychicType, bugType, rockType, 
      ghostType, dragonType, darkType, steelType, fairyType])
    return data.rows[0]
  } catch (error) {
    console.error("model error: " + error)
  }
}

module.exports = {getParticipants, updateGrave,getDeadPokemons}