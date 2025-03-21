import '../styles/Header.css'

const Header = () => {
  return (
    <header>
    <img src="#" alt="logo" />

    <nav className="web">
        <ul>
            <li>Inicio</li>
            <li>Vagas</li>
            <li>Perfil</li>
       </ul>
    </nav>

    <nav className="mobile">
        <ul>
            <li>Inicio</li>
            <li>Vagas</li>
            <li>Perfil</li>
       </ul>
    </nav>
    </header>
  )
}

export default Header