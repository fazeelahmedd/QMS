const { supabase } = require('../../client')
const addBusiness = async (req, res) => {
    const { business_id, business_name, business_category, business_contact, business_email, business_address, business_city, ubd_user_name, ubd_user_type, ubd_user_status  } = req.body || {};
    
    try{
        const { data, error } = await supabase
            .from('business')
            .insert([
                {
                    business_id,
                    business_name,
                    business_category,
                    business_contact,
                    business_email,
                    business_address,
                    business_city
    
                }
            ])
            if (error) {
                res.status(500).send(error)
                return 0
            }
            
        } catch(error){
            throw error
        }
        try{ 
            const {data, error} = await supabase
    
            .from('user_business_detail')
            .insert([
            {
                ubd_user_name,
                ubd_business_id : business_id,
                ubd_user_type : 'vendor',
                ubd_user_status 
    
            }
            ])
            if (error) {
                console.log(error)
            }
            res.status(200).send("Successfully registered.")
        }
        catch(error){
            throw error
        }
}

            
       
module.exports = {
    addBusiness
}


