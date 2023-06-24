import { useRestaurantsContext } from "../hooks/useRestaurantContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { Link } from "react-router-dom";

const RestaurantDetails = ({ restaurant }) => {
  const { dispatch } = useRestaurantsContext();

  const handleClick = async () => {
    const response = await fetch("/api/restaurants/" + restaurant._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_RESTAURANT", payload: json });
    }
  };

  // const uploadPicture = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("/api/restaurants/" + restaurant._id, {
  //     method: "PATCH",
  //   });

  // const json = await response.json();

  //   if (response.ok) {
  //     dispatch({ type: "UPDATE_IMAGE", payload: json });
  //   }
  // };

  // const changePicture = (e) => {
  //   e.preventDefault();

  //   let files = e.target.files;
  //   let reader = new FileReader();
  //   reader.readAsDataURL(files[0]);

  //   reader.onload = (e) => {
  //     const newItem = { file: e.target.result };

  //     setImage(e.target.result);
  //     // console.log(image)
  //   };
  // };

  return (
    <div className="restaurant-details">
      <Link to={"/" + restaurant._id}>
        {" "}
        <h4>{restaurant.name}</h4>
      </Link>
      <p>
        <strong>Cuisine (Food Type): </strong>
        {restaurant.cousine}
      </p>
      <p>
        <strong>Location: </strong>
        {restaurant.location}
      </p>
      <p>
        <strong>Created: </strong>

        {formatDistanceToNow(new Date(restaurant.createdAt), {
          addSuffix: true,
        })}

        {/* 
        {formatDistanceToNow(new Date(parseISO(restaurant.createdAt)), {
          addSuffix: true,
        })} */}
      </p>

      <img
        alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmSdRAJphwWrHdu_ovOTW3AKGQFhui5nQ7ORut3HmgfYryXB4M08QGzthOzWl_3EOl-c&usqp=CAU"
        title={restaurant.name}
        src={restaurant.Image}
        style={{
          borderRadius: "5%",
          width: "200px",
          height: "200px",
        }}
      />

      {/* <Button variant="primary">
                      <div>
                        <input
                          type="file"
                          class="dropify"
                          onChange={(e) => changePicture(e)}
                        />
                        <button
                          type="submit"
                          onClick={uploadPicture}
                          className="btn btn-warning btn-sm mt-4"
                          style={{ float: "right" }}
                        >
                          Upload
                        </button>
                      </div>
      </Button> */}

      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default RestaurantDetails;
