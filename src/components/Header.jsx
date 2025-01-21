import Logo from "../assets/Cowworking-logo.png"
import User from "../assets/User.png"
import { Link } from "react-router-dom"
import "../styles/Header.css"

const Header = () => {

  return (
    <header className="header">
        <img src={Logo} alt="" />
        

        <nav>
          <ul>
            <Link to="/" ><li>Inicio</li></Link>
            <li>Vagas</li>
            <li>Quem somos?</li>

            
          </ul>
          <Link to="/login"><img src={User} alt="" /></Link>
          
        </nav>

        
    </header>
  )
}

export default Header