import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Contador from './components/contador/Contador'
import FormularioState from './components/formulariostate/Formulariostate'
import CadFruta from './components/cadfruta/cadfruta'

function App() {
  // Variável privada (objeto) só poder ser mudada pela função setTítulo
  const [titulo, setTitulo] = useState("Google")

  function mudarTexto(){
    setTitulo("Microsoft")

  }
  function mudarTexto2(){
    setTitulo("Adenivon")

  }

  return (
    <>
    {/* {/* <h1>Mihnha Página de {titulo}</h1>
    <button onClick={mudarTexto}></button>
    <br />
    <button onClick={mudarTexto2}>Adenivon</button>

    <Contador />
    <br />
    <FormularioState />} */}
    

    <CadFruta />
    </> 
  )
}

export default App
