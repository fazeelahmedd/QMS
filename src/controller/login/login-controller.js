const { supabase } = require('../../../client')
const logIn = async (req, res) => {
    const { email, password } = req.body || {};
    try {
      let { user, error } = await supabase.auth.signIn({
        email,
        password
      })
  
      if (error) {
        throw error;
      }
  
      const session = supabase.auth.session()
      console.log("aa")
      res.status(200).send(session)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  module.exports = {
    logIn
  }