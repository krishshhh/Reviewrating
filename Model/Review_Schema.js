const mongoose =require("mongoose")
const { stringify } = require("nodemon/lib/utils")
const Review_Schema= new mongoose.Schema ({
userID:{
    type:mongoose.Schema.Types.ObjectId,
    require:true ,
    ref:'user'
},
CompanyId:{
    type:String,
    require:true
},
    userId:{
        type:String,
        require:true
    },
    subject:{ 
        type:String,
        require:true,
    default : false },

    review:{
        type:String,
        require:true
    },
rating : {
    type :String,
    require:true
},
isActive : {
    type: string,
    default : true
},
    //ReviewSchema.set ('timestamps')
})
module.exports=mongoose.model('user',comapanySchema)