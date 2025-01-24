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
            <Link to="/" ><li>Início</li></Link>
            <Link to="/vagas"><li>Vagas</li></Link>
            <Link to="/about"><li>Sobre</li></Link>
          </ul>
          <Link to="/login"><img src={User} alt="" /></Link>
          
        </nav>

        
    </header>
  )
}

export default Header