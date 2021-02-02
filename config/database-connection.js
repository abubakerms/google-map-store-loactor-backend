const mongoose=require('mongoose')

mongoose.Promise=global.Promise

mongoose.connect('mongodb://localhost:27017/googlemaps')
    .then(() => {
        console.log('sucessfully connected to db')
    })
    .catch((err) => {
        console.log(err)
    })

module.exports=mongoose