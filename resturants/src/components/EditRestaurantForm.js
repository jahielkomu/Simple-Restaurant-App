// import { useState } from "react";
// import { useRestaurantsContext } from "../hooks/useRestaurantContext";
// import { useParams } from "react-router-dom";

// const EditRestaurantForm = ({ restaurant }) => {
//   const { dispatch } = useRestaurantsContext();
//   const { restaurantID } = useParams();

//   const [name, setName] = useState("");
//   const [cousine, setCousine] = useState("");
//   const [location, setLocation] = useState("");
//   const [Image, setImage] = useState("");
//   const [error, setError] = useState(null);
//   //const [emptyFields , setEmptyFields] = useState('')

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const restaurant = { name, cousine, location, Image };

//     const response = await fetch(`/api/restaurants/${restaurantID}`, {
//       method: "PATCH",
//       body: JSON.stringify(restaurant),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();

//     if (!response.ok) {
//       setError(json.error);
//       //setEmptyFields(json.emptyFields)
//     }
//     if (response.ok) {
//       setError(null);
//       // setEmptyFields([])
//       setName("");
//       setCousine("");
//       setLocation("");
//       dispatch({ type: "UPDATE_RESTAURANT", payload: json });
//     }
//   };
//   //function for changing the picture
//   const changePicture = (e) => {
//     e.preventDefault();

//     let files = e.target.files;
//     let reader = new FileReader();
//     reader.readAsDataURL(files[0]);

//     reader.onload = (e) => {
//       // const newItem = { file: e.target.result };

//       setImage(e.target.result);
//     };
//   };

//   return (
//     <form className="create" onSubmit={handleSubmit}>
//       <h3>Edit Restaurant Details</h3>

//       <label>Restaurant Name:</label>
//       <input
//         type="text"
//         onChange={(e) => setName(e.target.value)}
//         defaultValue={name}
//       />

//       <label>Cusine(Food Type):</label>
//       <input
//         type="text"
//         onChange={(e) => setCousine(e.target.value)}
//         value={cousine}
//       />

//       <label>Location:</label>
//       <input
//         type="number"
//         onChange={(e) => setLocation(e.target.value)}
//         value={location}
//       />

//       <label>Image:</label>
//       <input type="file" onChange={(e) => changePicture(e)} />

//       <button type="submit">Edit Restaurant</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   );
// };

// export default EditRestaurantForm;
