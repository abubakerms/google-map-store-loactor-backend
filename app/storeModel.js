const mongoose=require('mongoose')

const Schema=mongoose.Schema

const StoreSchema=new Schema({
    storeName:{
        type:String
    },
    phoneNumber:String,
    address:{},
    addressLines:Array,
    location:{
        type:{
            type:String,
            enum:['Point']
        },
        coordinates:{
            type:[Number],
            required:true
        }
    }
})

const Store= mongoose.model('Store',StoreSchema)

module.exports=Store