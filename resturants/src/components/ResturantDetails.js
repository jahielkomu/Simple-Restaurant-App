import { useResturantsContext } from "../hooks/useResturantContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import {Link} from 'react-router-dom'
  
  
  const ResturantDetails = ({resturant}) => {

  const {dispatch} = useResturantsContext()

  const handleClick = async()=>{
      const response = await fetch('/api/resturants/' + resturant._id, {
        method: 'DELETE'
      })

      const json = await response.json()
       
      if (response.ok){
       dispatch({type:'DELETE_RESTURANT', payload: json })
      }
    }

  return (
    <div className="resturant-details">
      <Link to={'/' + resturant._id } > <h4>{resturant.name}</h4></Link>
      <p><strong>Cusine (Food Type): </strong>{resturant.cousine}</p>
      <p><strong>Location: </strong>{resturant.location}</p>
      <p>{formatDistanceToNow(new Date(resturant.createdAt), { addSuffix: true })}</p> 

      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
     

     
    </div>
  )
}

export default ResturantDetails