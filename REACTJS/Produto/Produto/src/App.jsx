import "./App.css" 
import Produto from "./components/produto/Produto"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

function App() { 
  return ( 
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Produto />} /> 
      </Routes> 
    </BrowserRouter> 
  ); 
} 

export default App;