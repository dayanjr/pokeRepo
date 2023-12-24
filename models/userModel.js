const pool = require("../database/")

/* ***************************
 *  Get all participants data
 * ************************** */
async function getParticipants(){
  return await pool.query("SELECT * FROM public.participants ORDER BY id")
}
module.exports = {getParticipants}