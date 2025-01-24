import '../styles/Footer.css'
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
        <div>
            <ul>
                <li><a className='image' href="https://instagram.com" target="_blank"><FaInstagram/></a></li>
                <li><a className='image' href="https://linkedin.com" target="_blank"><FaLinkedinIn/></a></li>
            </ul>
        </div>
    <div class="footer-bottom">
        <p>&copy; 2025 Cowworking. Todos os direitos reservados.</p>
    </div>
    </footer>
  )
}

export default Footer