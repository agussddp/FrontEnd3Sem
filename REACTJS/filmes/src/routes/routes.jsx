import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"
import CadastroFilmes from "../pages/cadastroFIlmes/CadastroFilmes"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"
import PrivateRoute from "../routes/PrivateRoute"
import { UsuarioContext } from "../context/UsuarioContext"




const Rotas = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/filmes" element={

                    <>
                        <PrivateRoute />
                        <CadastroFilmes />
                        <PrivateRoute />
                    </>

                } />
                <Route path="/generos" element={

                    <>
                        <PrivateRoute />
                        <CadastroGenero />
                        <PrivateRoute />
                    </>


                } />
            </Routes>
        </BrowserRouter>


    )
}

export default Rotas