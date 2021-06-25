import "../../App.scss"
import { Link } from 'react-router-dom'
export  const NavItem = ()=>{
    return (
      <div  className="navBar">
          <ul>
              <li><Link to="/">Home</Link></li>
              <li>  <Link to="/weather">Weather</Link></li>

          </ul>
      </div>
    );
}