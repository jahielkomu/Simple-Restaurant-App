import { useEffect} from "react"
import { useRestaurantsContext } from "../hooks/useRestaurantContext"

import RestaurantDetails from "../components/RestaurantDetails"
import RestaurantForm from "../components/RestaurantForm"


const Home = () => {
  const {restaurants, dispatch } = useRestaurantsContext()

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch('/api/restaurants')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_RESTAURANTS', payload: json})
      }
    }

    fetchRestaurants()
  }, [dispatch])

  return (
    <div className="home">
      <div className="restaurants">
        {restaurants && restaurants.map(restaurant => (
          <RestaurantDetails restaurant={restaurant} key={restaurant._id} />
        ))}
      </div>
      <RestaurantForm />
    </div>
  )
}

export default Home
