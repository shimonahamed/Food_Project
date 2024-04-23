const mongoose=require('mongoose')
const ProductSchema=mongoose.Schema({
    name:{type:String,required:true},
    code:{type:String,required:true},
    img:{type:String,required:true},
    category:{type:String,required:true},
    qty:{type:String,required:true},
    price:{type:Number,required:true},



},{timestamps:true,versionKey:false})

let FoodModel=mongoose.model('foods',ProductSchema);

module.exports=FoodModel;