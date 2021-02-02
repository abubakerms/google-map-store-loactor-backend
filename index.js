const express=require('express')
const mongoose=require('./config/database-connection')
const router=require('./config/routes')

const port=9100

const app=express()
app.use(express.json())

app.use('/',router)

app.get('/',(req,res)=>{
    res.json({Wecome:'Abubaker to google maps'})
})

app.listen(port,()=>{
    console.log("lisning to the port",port)
})
