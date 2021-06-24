import "../../App.scss"
import { Link } from 'react-router-dom'
export  const NavItem = ()=>{
    return (
      <div  className="navbar">
          <Link to="/">Home</Link>
          <Link to="/weather">Weather</Link>
          <Link to={"/weather"}>Weather</Link>
          <Link to={"/weather"}>Weather</Link>
      </div>
    );
}