import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Perfil from "./components/perfil/perfil"
import MyPage from "./components/mypage/mypage"
import Header from "./components/header/Header"



function App() {

  return (
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path= '/' element={<Home />} />
            <Route path= '/Perfil' element={<Perfil />} />
            <Route path= '/MyPage' element={<MyPage />} />
          </Routes>
        
      </BrowserRouter>
      
  )
}

export default App
