const {CartModel} = require('../model/cart.model')
const express = require('express')
const cartRouter = express.Router()
const {auth} = require('../middel_Ware/auth')

cartRouter.get('/', auth, async(req, res)=>{
    try{
        const cart = await CartModel.find({userID:req.body.userID})
        res.status(200).json(cart)
    }catch(err){
        res.status(400).json({'err':err.message})
    }
})

cartRouter.post('/addtocart', auth, async(req, res)=>{
    try{
        const cart = new CartModel(req.body)
        await cart.save()
        res.status(200).json({'msg':'added to cart!'})
    }catch(err){
        res.status(400).json({'err':err.message})
    }
})
module.exports = {cartRouter}