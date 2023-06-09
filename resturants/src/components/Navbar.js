import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1> Simple Web Application for Resturants</h1>
          <p>Actions include create resturant, delete resturant, update resturant, show all resturants</p>
        </Link>
        <Link to={'/'} > <h1>HOME</h1></Link>
      </div>
    </header>
  )
}

export default Navbar