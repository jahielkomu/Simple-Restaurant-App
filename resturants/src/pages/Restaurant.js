import React, {useEffect} from 'react'
import { useParams} from 'react-router-dom'
import {Grid} from '@mui/material'
import EditResturantForm from "../components/EditResturantForm"
//import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ResturantDetails from '../components/ResturantDetails'
import { useResturantsContext } from "../hooks/useResturantContext"


export default function Restaurant({resturant}) 
{
  const {restaurantID} =  useParams()
  const {resturants, dispatch} = useResturantsContext()

  
  useEffect(() => {
    const fetchResturant = async () => {
      const response = await fetch(`/api/resturants/${restaurantID}`)
      const json = await response.json()

      if (response.ok) {
         dispatch({type:'GET_RESTURANT', payload:json})
       // console.log(json)
      }
    }
    fetchResturant()
  },[restaurantID, dispatch])

  return (
    <Grid container>
      <Grid item xs={12} md={6}>

      <div className="home">
      <div className="resturants">
        
        { resturants && resturants.map(resturant => (
          <ResturantDetails resturant={resturant} key={resturant._id} />
        ))}
      </div>
      </div>            
      </Grid>
      <Grid item xs={12} md={6}>      
        <EditResturantForm/>
      </Grid>
    </Grid>
  )
}



