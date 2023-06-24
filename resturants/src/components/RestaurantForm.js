import { useState } from "react";
import { useRestaurantsContext } from "../hooks/useRestaurantContext";

const RestaurantForm = () => {
  const { dispatch } = useRestaurantsContext();

  const [name, setName] = useState("");
  const [cousine, setCousine] = useState("");
  const [location, setLocation] = useState("");
  const [Image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const restaurant = { name, cousine, location, Image };

    const response = await fetch("/api/restaurants", {
      method: "POST",
      body: JSON.stringify(restaurant),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setEmptyFields([]);
      setName("");
      setCousine("");
      setLocation("");
      setImage("");
      dispatch({ type: "CREATE_RESTAURANT", payload: json });
    }
  };
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
    <div data-testid="create-1">
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Restaurant</h3>

        <label>Restaurant Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={emptyFields.includes("name") ? "error" : ""}
        />

        <label>Cusine(Food Type):</label>
        <input
          type="text"
          onChange={(e) => setCousine(e.target.value)}
          value={cousine}
          className={emptyFields.includes("cousine") ? "error" : ""}
        />

        <label>Location:</label>
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          className={emptyFields.includes("location") ? "error" : ""}
        />

        <label>Image:</label>
        <input
          type="file"
          onChange={(e) => changePicture(e)}
          className={emptyFields.includes("Image") ? "error" : ""}
        />

        <button>Add Restaurant</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default RestaurantForm;
