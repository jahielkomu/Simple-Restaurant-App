const express = require('express')
// const Rest = require('../models/Resturant')
const {getResturants,
    getResturant,
    createResturant,
    deleteResturant,
    updateResturant} = require('../controllers/resturantController')

const router = express.Router()


//get all resturants
router.get('/', getResturants)

//get a particular resturant
router.get('/:id',  getResturant) 

//post or creating a new resturant
router.post('/', createResturant)

//delete a resturant
router.delete('/:id', deleteResturant)

//update a resturant
router.patch('/:id', updateResturant)

module.exports = router