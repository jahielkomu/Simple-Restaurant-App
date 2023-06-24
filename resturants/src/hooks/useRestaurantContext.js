import { RestaurantsContext } from "../context/RestaurantsContext"
import { useContext } from "react"

export const useRestaurantsContext = () => {
  const context = useContext(RestaurantsContext)

  if(!context) {
    throw Error('useRestaurantsContext must be used inside a RestaurantsContextProvider')
  }

  return context
}