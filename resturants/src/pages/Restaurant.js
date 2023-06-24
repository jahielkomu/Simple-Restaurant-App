import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import RestaurantDetails from "../components/RestaurantDetails";
import { useRestaurantsContext } from "../hooks/useRestaurantContext";

export default function Restaurant({ restaurant }) {
  const [name, setName] = useState("");
  const [cousine, setCousine] = useState("");
  const [location, setLocation] = useState("");
  const [Image, setImage] = useState("");
  const [error, setError] = useState(null);
  const { restaurantID } = useParams();
  const { restaurants, dispatch } = useRestaurantsContext();

  useEffect(() => {
    const fetchRestaurant = async () => {
      const response = await fetch(`/api/restaurants/${restaurantID}`);
      const json = await response.json();

      if (response.ok) {
        // setEmptyFields([])
        setName(json.name);
        setImage(json.Image);
        setCousine(json.cousine);
        setLocation(json.location);

        dispatch({ type: "GET_RESTAURANT", payload: json });
        // console.log(json)
      }
    };
    fetchRestaurant();
  }, [restaurantID, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const restaurant = { name, cousine, location, Image };

    const response = await fetch(`/api/restaurants/${restaurantID}`, {
      method: "PATCH",
      body: JSON.stringify(restaurant),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      //setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setError(null);
      // setEmptyFields([])
      setName("");
      setImage();
      setCousine("");
      setLocation("");
      dispatch({ type: "UPDATE_RESTAURANT", payload: json });
    }
  };

  //setting the update values

  //function for changing the picture
  const changePicture = (e) => {
    e.preventDefault();

    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      // const newItem = { file: e.target.result };

      setImage(e.target.result);
      // console.log(image)
    };
  };

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <div className="home">
          <div className="restaurants">
            {restaurants &&
              restaurants.map((restaurant) => (
                <RestaurantDetails
                  restaurant={restaurant}
                  key={restaurant._id}
                />
              ))}
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <form className="create" onSubmit={handleSubmit}>
          <h3>Edit Restaurant Details</h3>

          <label>Restaurant Name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            defaultValue={name}
            // defaultValue={restaurant.name}
          />

          <label>Cuisine(Food Type):</label>
          <input
            type="text"
            onChange={(e) => setCousine(e.target.value)}
            defaultValue={cousine}
            // defaultValue={restaurant.cousine}
          />

          <label>Location:</label>
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            defaultValue={location}
            // defaultValue={restaurant.location}
          />

          <label>Image:</label>
          <input type="file" onChange={(e) => changePicture(e)} />

          <button type="submit">Edit Restaurant</button>
          {error && <div className="error">{error}</div>}
        </form>
      </Grid>
    </Grid>
  );
}
