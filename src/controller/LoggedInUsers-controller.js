const { supabase } = require('../client')
const getAllUsers = async (req, res) => {
    const user = supabase.auth.user()
    res.status(200).json({user: user})
  }

  module.exports = {
    getAllUsers
  }