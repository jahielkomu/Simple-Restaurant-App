const Restaurant = require("../models/Restaurant");
const mongoose = require("mongoose");

// get all restaurants
const getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find({}).sort({ createdAt: -1 });

  res.status(200).json(restaurants);
};

// get a single restaurant
const getRestaurant = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such restaurant" });
  }

  const restaurant = await Restaurant.findById(id);

  if (!restaurant) {
    return res.status(404).json({ error: "No such restaurant" });
  }

  res.status(200).json(restaurant);
};

// create a new Restaurant
const createRestaurant = async (req, res) => {
  const { name, cousine, location, Image } = req.body;

  //ERROR CHECKING

  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!cousine) {
    emptyFields.push("cousine");
  }
  if (!location) {
    emptyFields.push("cousine");
  }
  if (!Image) {
    emptyFields.push("Image");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  // add to the database
  try {
    const restaurant = await Restaurant.create({
      name,
      cousine,
      location,
      Image,
    });
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a restaurant
const deleteRestaurant = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such restaurant" });
  }

  const restaurant = await Restaurant.findOneAndDelete({ _id: id });

  if (!restaurant) {
    return res.status(400).json({ error: "No such restaurant" });
  }

  res.status(200).json(restaurant);
};

// update a Restaurant
const updateRestaurant = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such restaurant" });
  }

  const restaurant = await Restaurant.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!restaurant) {
    return res.status(400).json({ error: "No such restaurant" });
  }

  res.status(200).json(restaurant);
};

// const updateImage = async (req, res) => {

//   const { id } = req.params

// if (!mongoose.Types.ObjectId.isValid(id)) {
//   return res.status(400).json({error: 'No such restaurant'})
// }

// const restaurant = await Restaurant.findOneAndUpdate({_id: id}, {
//   ...req.body
// })

// if (!restaurant) {
//   return res.status(400).json({error: 'No such restaurant'})
// }

// res.status(200).json(restaurant)

// }

module.exports = {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  deleteRestaurant,
  updateRestaurant,
  // updateImage
};
