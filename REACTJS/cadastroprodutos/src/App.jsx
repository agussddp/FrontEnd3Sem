
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CadastroFruta from './pages/quemsomos/cadastrofruta/cadastrofrutapage'
import CadastroProdutos from './pages/quemsomos/cadastroprodutos/cadastroprodutospage'
import HomePage from './pages/quemsomos/home/homepage'
import QuemSomos from './pages/quemsomos/quemsomospage'

export default function App(){
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<HomePage/>} path='/' />
            <Route element={<QuemSomos/>} path='/quemsomos' />
            <Route element={<CadastroFruta/>} path='/fruta' />
            <Route element={<CadastroProdutos/>} path='/produto' />
        </Routes>
    </BrowserRouter>
  )
}

// fazer todos os componet