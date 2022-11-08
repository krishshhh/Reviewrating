const mongoose =require("mongoose")
const { stringify } = require("nodemon/lib/utils")
const company_Schema= new mongoose.Schema ({
userID:{
    type:mongoose.Schema.Types.ObjectId,
    require:true ,
    ref:'user'
},
Companyname:{
    type:String,
    require:true
},
    city:{
        type:String,
        require:true
    },
    location:{ 
        type:String,
        require:true,
    default : false },
    email:{
        type:String,
        require:true
    },
founded  : {
    type :String,
    require:true

},
isActive : {
    type: string,
    default : true
}
})
    companySchema.set ('timestamps')

module.exports=mongoose.model('company',comapanySchema)