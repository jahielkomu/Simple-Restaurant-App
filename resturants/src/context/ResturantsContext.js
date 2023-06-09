import { createContext, useReducer } from 'react'

export const ResturantsContext = createContext()

export const resturantsReducer = (state, action) => {

  switch (action.type) {

    case 'SET_RESTURANTS':
      return { 
        resturants: action.payload
      }

    case 'CREATE_RESTURANT':
      return { 
        resturants: [action.payload, ...state.resturants] 
      }

      case 'DELETE_RESTURANT':
        return { 
          resturants: state.resturants.filter((R) => R._id !==action.payload._id) 
        }

        case 'UPDATE_RESTURANT':
        return { 
        resturants: state.resturants.filter((R) => R._id === action.payload._id)
        }
        case 'GET_RESTURANT':
          return { 
            resturants: [action.payload]
            
          }
        
    default:
      return state
  }
}

export const ResturantsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(resturantsReducer, { 
    resturants: null
  })
  
  return (
    <ResturantsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </ResturantsContext.Provider>
  )
}