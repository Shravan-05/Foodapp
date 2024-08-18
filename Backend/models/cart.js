const mongoo=require("mongoose");
const {Schema} =mongoo;
const cartSchema=new Schema({
    user:{
    type:mongoo.Schema.Types.ObjectId,
ref:'user'
    },
    name:{
type:String,
require:true
    },
    price:{
type:Number,
require:true
    },
    url:{
        type:String,
        require:true
    },
    size:{
        type:String,
        require:true
    },
    qty:{
        type:String,
        require:true
    }
})
const Cart=mongoo.model("cart",cartSchema);
module.exports=Cart;