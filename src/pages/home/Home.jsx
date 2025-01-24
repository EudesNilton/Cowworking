import Cow from '../../assets/cow.jpeg'
import '../../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
        <section>
            <img className='vaca' src={Cow} alt="" />

            <div>
                <h1>Onde os processos seletivos estão sempre abertos!</h1>
                <p>Nem sempre!</p>
            </div>
        </section>
        <section className='vagas'>
            <h2>Processos seletivos que ja abriram esse ano</h2>
            <ul>
                <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-GG2pPAPdCWzUICNfsreSQY9dgdRB-Qu4xnmW_qQdjm4HRnp36KWediXTPZIq-tluz7k&usqp=CAU" alt="" /></li>
                <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGawd9Lh8sOFPLrbIZni1Z-tZQ56cKIUYQ_Q&s" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
            </ul>
        </section>
    </div>
  )
}

export default Home