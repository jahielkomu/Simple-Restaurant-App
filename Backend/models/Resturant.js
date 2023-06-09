const mongoose = require('mongoose')

const Schema = mongoose.Schema

const resturantSchema = new Schema({
  name: {
    type: String, //enforces tittle to be a string
    required: true //the tittle is required
  },
  cousine: {
    type: String, //type of cusine
    required: true
  },
  location: {
    type: Number, //
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Resturant', resturantSchema)