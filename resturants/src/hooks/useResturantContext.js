import { ResturantsContext } from "../context/ResturantsContext"
import { useContext } from "react"

export const useResturantsContext = () => {
  const context = useContext(ResturantsContext)

  if(!context) {
    throw Error('useResturantsContext must be used inside a ResturantsContextProvider')
  }

  return context
}