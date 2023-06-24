const express = require("express");
// const Rest = require('../models/Restaurant')
const {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  deleteRestaurant,
  updateRestaurant,
} = require("../controllers/restaurantController");

const router = express.Router();

//get all restaurants
router.get("/", getRestaurants);

//get a particular restaurant
router.get("/:id", getRestaurant);

//post or creating a new restaurant
router.post("/", createRestaurant);

//delete a restaurant
router.delete("/:id", deleteRestaurant);

//update a restaurant
router.patch("/:id", updateRestaurant);

module.exports = router;
