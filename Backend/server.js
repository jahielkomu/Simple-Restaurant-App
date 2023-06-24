
require ('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const restaurantRoutes = require('./routes/restaurants')

//restaurant app
const restaurantApp = express()


//middleware

restaurantApp.use(express.json({limit: '25mb'}))
restaurantApp.use(express.urlencoded({ limit: '25mb',extended: true}))

restaurantApp.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
restaurantApp.use('/api/restaurants',restaurantRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {

    //listen for requests
    restaurantApp.listen(process.env.PORT, ()=>{
        console.log('connected to the db & listening on port', process.env.PORT)
    })

})

.catch((error) => {
    console.log(error)
})

