const express = require("express")
const mongoose = require("mongoose")
require ("./Model/config")
var bodyparser = require('body-parser');
const router = require ('./routes/userRoutes')
//var crudSchema = require('./model/crudSchema');
const user_schema = require("./Model/user_schema");
const User = require ('./Model/user_schema.js');
const bcrypt = require ("bcrypt");
const app = express();
app.use(express.json());
app.use(bodyPareser.json());



  //Register
//   app.post('/Registeruser', async (req, resp) => {
//     const email = req.body.email;


//     const user = new user_schema({
//         user: req.body.name,
//         phone: req.body.phone,
//         email: req.body.email,
//         city : req.body.city,
//         state: req.body.state

//     })
//     console.log(req.body.user);
    
//         //let user = new User (req.body)
//         //const email = user . email 
//     //}
//     try {
//         const  userExist = await User.findOne ({email : email})
//         if (userExist) {
//             return resp.status (400).json({status:400,error:"Email already exist"});



//         }
//     const salt = await bcrypt.genSalt(10);
//     new_user.password = await bcrypt.hash (password,salt );
//     let result = await new_user.save ();

//         console.log('inside try');
//         const addRes = await user.save()
//         console.log('after try');
//         resp.json(addRes)
//     } catch (err) {
//         resp.send('Error')
//     }
// })
app.use('/',router)
app.listen(9000, function (req, res) {
    console.log("server is running on port 9000")
})
