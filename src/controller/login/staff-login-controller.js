const { supabase } = require('../../client')
const logInStaff =  async (req, res, email) => {
    const { user_name, password } = req.body || {};
    try{
    let { data: users, error } = await supabase
    .from('users')
    .select("user_email")
    .eq('user_name', user_name)
    
    if(error){
        throw error;
    }
    // const insertedData= await logIn(users[0].user_email)
    email = users[0].user_email
    console.log(email)
    return email
    
    }
    catch (error) {
        res.status(500).send(error)
      }

  }
const logIn = async (req, res) => {
    const email = await logInStaff(req,res)
    const {  password } = req.body || {};
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