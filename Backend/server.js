
require ('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const resturantRoutes = require('./routes/resturants')

//resturant app
const resturantApp = express()


//middleware

resturantApp.use(express.json())

resturantApp.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
resturantApp.use('/api/resturants',resturantRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {

    //listen for requests
    resturantApp.listen(process.env.PORT, ()=>{
        console.log('connected to the db & listening on port', process.env.PORT)
    })

})

.catch((error) => {
    console.log(error)
})

