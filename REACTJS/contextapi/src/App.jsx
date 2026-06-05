import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Perfil from "./components/perfil/Perfil"
import MyPage from "./components/mypage/Mypage"
import Header from "./components/header/Header"
import PrivateRoute from "./routes/PrivateRoute"
import CadastroProduto from "./components/produto/CadastroProduto"
import { ProdutoContext } from "./context/ProdutoContext"




function App() {
  return (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Produto" element={
              <PrivateRoute> 
                <CadastroProduto /> 
              </PrivateRoute>} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/MyPage" element={
              <PrivateRoute> 
                <MyPage />  
              </PrivateRoute>
              } />

          </Routes>
        </BrowserRouter>
  );
}

export default App
