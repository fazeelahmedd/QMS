const { supabase } = require('../../client')
const logout = async (req, res) => {
    let { error } = await supabase.auth.signOut()
    if(error){
        console.log(error)
    }
    
  }
  module.exports = {
    logout
}