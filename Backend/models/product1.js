const mongoo=require("mongoose");
const {Schema} =mongoo;
const productSchema1=new Schema({
    name:{
type:String,
require:true
    },
    price:{
type:Number,
require:true
    },
    urltoimage:{
type:String,
require:true
    }

})
const product1=mongoo.model("productdetails1",productSchema1);
module.exports=product1;