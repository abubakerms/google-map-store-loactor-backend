const express=require('express')
const router=express.Router()

const StoreController=require('../app/storeController')

router.get('/list',StoreController.list)
router.post('/create',StoreController.create)

module.exports=router