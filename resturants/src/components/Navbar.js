import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1> Simple Web Application for Restaurants</h1>
          <p>Actions include create restaurant, delete restaurant, update restaurant, show all restaurants</p>
        </Link>
        <Link to={'/'} > <h1>HOME</h1></Link>
      </div>
    </header>
  )
}

export default Navbar