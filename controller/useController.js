const express = require("express")
const app=express()
app.use(express.json)

const bcrypt = require ("bcrypt");
const User = require ("../model/user_schema");
const userSchema =  require ('../model/user_schema')


const userSignup = 
 async (req, resp) => {
    const email = req.body.email;


    const user = new user_schema({
        user: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        city : req.body.city,
        state: req.body.state

    })
    console.log(req.body.user);
    
        //let user = new User (req.body)
        //const email = user . email 
    //}
    try {
        const  userExist = await User.findOne ({email : email})
        if (userExist) {
            return resp.status (400).json({status:400,error:"Email already exist"});



        }
    const salt = await bcrypt.genSalt(10);
    new_user.password = await bcrypt.hash (password,salt );
    let result = await new_user.save ();

        console.log('inside try');
        const addRes = await user.save()
        console.log('after try');
        resp.json(addRes)
    } catch (err) {
        resp.send('Error')
    }
}
module.exports = {
  
    userSignup
  

};