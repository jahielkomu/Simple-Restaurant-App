import { useState } from 'react'
import { useResturantsContext } from "../hooks/useResturantContext"



const ResturantForm = () => {

const  {dispatch} = useResturantsContext()


  const [name, setName] = useState('')
  const [cousine, setCousine] = useState('')
  const [location, setLocation] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields , setEmptyFields] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const resturant = {name, cousine, location}
    
    const response = await fetch('/api/resturants', {
      method: 'POST',
      body: JSON.stringify(resturant),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setError(null)
      setEmptyFields([])
      setName('')
      setCousine('')
      setLocation('')
      dispatch({type: 'CREATE_RESTURANT', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Resturant</h3>

      <label>Resturant Name:</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
        className={emptyFields.includes('name') ? 'error' : ''}
      />

      <label>Cusine(Food Type):</label>
      <input 
        type="text" 
        onChange={(e) => setCousine(e.target.value)} 
        value={cousine}
        className={emptyFields.includes('cousine') ? 'error' : ''}
      />

      <label>Location:</label>
      <input 
        type="number" 
        onChange={(e) => setLocation(e.target.value)} 
        value={location} 
        className={emptyFields.includes('location') ? 'error' : ''}
      />

      <button>Add Resturant</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ResturantForm
