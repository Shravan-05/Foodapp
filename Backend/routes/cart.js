const express = require("express");
const router = express.Router();
const cart = require("../models/cart");
const {body}=require('express-validator');
const fetchuser = require("../middleware/fetchuser");
router.post("/addcart", 
   [
    body("name","enter the name").isLength(5),
    body("price","enter the price").isLength(5)
   ] 
    ,fetchuser, async(req, res) => {
  try {
    const {name,price}=req.body;
    let data=await cart.create({
        user:req.user.id,
        name:name,
        price:price,
        url:req.body.url,
        size:req.body.size,
        qty:req.body.qty
    })
    res.send(data);
  } catch (err) {
res.status(400).json({error:"internal error"})
  }
});
router.get("/fetchcart", 
 fetchuser, async(req, res) => {
   try {
const cart1=await cart.find({user:req.user.id});
res.json(cart1);
   } 
   catch (err) {
 res.status(400).json({error:"internal error"})
   }
 });
 router.get("/deletecart/:id", 
    fetchuser, async(req, res) => {
      try {
   let cart1=await cart.findById(req.params.id);
   if(!cart1)
   {
    return res.status(404).json({ error: "Note not found" });
}
if (cart1.user.toString() !== req.user.id) {
    return res.status(403).json({ error: "Not allowed" });
  }
  await cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Successfully deleted" })
      } 
      catch (err) {
    res.status(400).json({error:"internal error"})
      }
    });
   

module.exports=router;

