const mongoose =require("mongoose")
const user_schema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phone:{ 
        type:String,
        require:true,
    default : false },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require : true
    }, 
city  : {
    type :String,
    require:true
},
state : {
    type : String,
    require : true
},
isActive : {
    type: Boolean,
    default : true
},
})

user_schema.set('timestamps',true);
module.exports=mongoose.model('user2',user_schema);