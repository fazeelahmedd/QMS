const { supabase } = require('../client')
const signUp = async (req, res) => {
    const { email, password } = req.body || {};
    console.log(req.body);
    try {
        let { user, error } = await supabase.auth.signUp({
            email,
            password
        })

        
        console.log("a");
        
        if (error) {
            throw error;
        }
        
        const insertedData= await insert(req, res)
        res.status(200).send(insertedData)
        
        
    } catch (error) {
        res.status(500).send(error)
    }
}

const insert = async (req, res) => {
    
    const { user_name, professional_name, user_contact, email:user_email, user_type, user_address, user_city, user_language } = req.body || {};
    try{
        const { data, error } = await supabase
            .from('users')
            .insert([
                {
                    user_name,
                    professional_name,
                    user_contact,
                    user_email,
                    user_type,
                    user_address,
                    user_city,
                    user_language
    
                }
            ])
        if (error) {
            console.log(error)
        }
        // res.status(200).send(data)
    } catch(error){
        throw error
    }
}


module.exports = {
    signUp
}