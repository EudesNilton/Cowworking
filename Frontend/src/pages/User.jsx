import Processes from "../components/Processes"

const User = () => {
  return (
    <>
        <header>
            <div>
                <img src="#" alt="logo" />

                <nav>
                    <ul>
                        <li>Processos</li>
                        <li>Sobre a Cowworking</li>
                    </ul>
                </nav>
                <div>
                    <button>sair</button>
                </div>
            </div>
        </header>
        <section>
            <Processes/>
            <div>
                <h2>Processos que já participei</h2>
            </div>
            <div>
                <h2>Empresas que almejo</h2>
            </div>
        </section>
    </>
  )
}

export default User