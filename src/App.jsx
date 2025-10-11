import './App.css'
import { FormularioDeEvento } from './components/FormularioEvento/index.jsx'
import { Tema } from './components/Tema/index.jsx'

const temas = [
  {
    id:1,
    nome:'front-end'
  },
  {
    id:2,
    nome:'back-end'
  },
  {
    id:3,
    nome:'devops'
  },
  {
    id:4,
    nome:'inteligencia artificial'
  },
  {
    id:5,
    nome:'data science'
  },
  {
    id:6,
    nome:'cloud'
  }
]
function App() {
  return (
    <main>
      <header>
        <img src='/logo.png'alt=''/>
      </header>
      <section>
        <img src='/banner.png' alt=''/>
      </section>
      <FormularioDeEvento />
      <section>
        <Tema tema={temas[0]}/>
      </section>
      <section>
        <Tema tema={temas[1]}/>
      </section>
      <section>
        <Tema tema={temas[2]}/>
      </section>
      <section>
        <Tema tema={temas[3]}/>
      </section>
      <section>
        <Tema tema={temas[4]}/>
      </section>
      <section>
        <Tema tema={temas[5]}/>
      </section>
    </main>
  )
}

export default App
