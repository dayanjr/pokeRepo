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
async function upgrav(name, dead){
  try {
    const sql =`UPDATE public.graveyard 
    SET grave = 
        CASE 
            WHEN combatant_name = $1 THEN $2;`
    const data = await pool.query(sql,[name,dead])
      console.log('mamam',data.rows[0])
    return data.rows[0]
  } catch (error) {
    console.error("model error: " + error)
  }
}
async function updateGrave(normalType, fireType, waterType, 
  electricType, grassType, iceType, 
  fightingType, poisonType, groundType, 
  flyingType, psychicType, bugType, rockType, 
  ghostType, dragonType, darkType, steelType, fairyType ) {
  try {
    const sql =`UPDATE public.pokemons 
    SET pokemon_name = 
        CASE 
            WHEN id = 1 THEN $1
            WHEN id = 2 THEN $2
            WHEN id = 3 THEN $3
            WHEN id = 4 THEN $4
            WHEN id = 5 THEN $5
            WHEN id = 6 THEN $6
            WHEN id = 7 THEN $7
            WHEN id = 8 THEN $8
            WHEN id = 9 THEN $9
            WHEN id = 10 THEN $10
            WHEN id = 11 THEN $11
            WHEN id = 12 THEN $12
            WHEN id = 13 THEN $13
            WHEN id = 14 THEN $14
            WHEN id = 15 THEN $15
            WHEN id = 16 THEN $16
            WHEN id = 17 THEN $17
            WHEN id = 18 THEN $18
            -- Add more WHEN clauses for each id you want to update
            ELSE pokemon_name  -- If id doesn't match any WHEN clause, keep the original value
        END
    WHERE id IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18);`
    const data = await pool.query(sql,[normalType, fireType, waterType, 
      electricType, grassType, iceType, 
      fightingType, poisonType, groundType, 
      flyingType, psychicType, bugType, rockType, 
      ghostType, dragonType, darkType, steelType, fairyType])
      console.log('mamam',data.rows[0])
    return data.rows[0]
  } catch (error) {
    console.error("model error: " + error)
  }
}

module.exports = {getParticipants, updateGrave,getDeadPokemons, upgrav}