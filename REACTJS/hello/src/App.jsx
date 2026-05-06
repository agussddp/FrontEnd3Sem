import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Title from './components/title/Title'
import Subtitle from './components/title/subtitle/Subtitle'

function App() {
  
  return (
    //// container imaginario
    <>    
      <Title texto="Título pagina"/>
      <Subtitle texto="Minha página"/>
      <Subtitle texto="Minha página 2"/>
    </>
    //////elemetos irmãos tem que estar dentro de um container
  );
}

export default App
