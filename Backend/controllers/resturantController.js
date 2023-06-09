const Resturant = require('../models/Resturant')
const mongoose = require('mongoose')

// get all resturants
const getResturants = async (req, res) => {
  const resturants = await Resturant.find({}).sort({createdAt: -1})

  res.status(200).json(resturants)
}

// get a single resturant
const getResturant = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such resturant'})
  }

  const resturant = await Resturant.findById(id)

  if (!resturant) {
    return res.status(404).json({error: 'No such resturant'})
  }

  res.status(200).json(resturant)
}

// create a new Resturant
const createResturant = async (req, res) => {
  const {name, cousine, location} = req.body
   
 //ERROR CHECKING

 let emptyFields = []

  if (!name) {
    emptyFields.push('name')
  }
  if (!cousine) {
    emptyFields.push('cousine')
  }
  if (!location) {
    emptyFields.push('location')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try{
    const resturant =  await Resturant.create( {name, cousine, location})
res.status(200).json(resturant)
   } catch(error){
       res.status(400).json({error:error.message})
   }
}

// delete a resturant
const deleteResturant = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such resturant'})
    }
  
    const resturant = await Resturant.findOneAndDelete({_id: id})
  
    if(!resturant) {
      return res.status(400).json({error: 'No such resturant'})
    }
  
    res.status(200).json(resturant)

}

// update a Resturant
const updateResturant = async (req, res) => {

    const { id } = req.params
    
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such resturant'})
  }

  const resturant = await Resturant.findOneAndUpdate({_id: id}, {
    ...req.body
  })

//   let emptyFields = []

//   if (!name) {
//     emptyFields.push('name')
//   }
//   if (!cousine) {
//     emptyFields.push('cousine')
//   }
//   if (!location) {
//     emptyFields.push('location')
//   }
//   if (emptyFields.length > 0) {
//     return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
//   }

  if (!resturant) {
    return res.status(400).json({error: 'No such resturant'})
  }

  res.status(200).json(resturant)

}

module.exports = {
  getResturants,
  getResturant,
  createResturant,
  deleteResturant,
  updateResturant
}