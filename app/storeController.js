const Store=require('../app/storeModel')

module.exports.list=(req,res)=>{
    Store.find()
        .then(store=>{
            res.json(store)
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.create=(req,res)=>{
    const dbStores=[]
    const stores=req.body
    
    stores.forEach((store)=>{
        dbStores.push({
            storeName:store.name,
            phoneNumber:store.phoneNumber,
            address:store.address,
            openStatusText:store.openStatusText,
            addressLines:store.addressLines,
            location:{
                type: 'Point',
                coordinates:[
                    store.coordinates.longitude,
                    store.coordinates.latitude
                ]
            }


        })
    })

    console.log(dbStores)
    Store.create(dbStores,(err,stores)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(stores)
        }
    })


}