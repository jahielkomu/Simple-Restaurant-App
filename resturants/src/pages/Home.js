import { useEffect} from "react"
import { useResturantsContext } from "../hooks/useResturantContext"

import ResturantDetails from "../components/ResturantDetails"
import ResturantForm from "../components/ResturantForm"


const Home = () => {
  const {resturants, dispatch } = useResturantsContext()

  useEffect(() => {
    const fetchResturants = async () => {
      const response = await fetch('/api/resturants')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_RESTURANTS', payload: json})
      }
    }

    fetchResturants()
  }, [dispatch])

  return (
    <div className="home">
      <div className="resturants">
        {resturants && resturants.map(resturant => (
          <ResturantDetails resturant={resturant} key={resturant._id} />
        ))}
      </div>
      <ResturantForm />
    </div>
  )
}

export default Home
