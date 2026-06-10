import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"
import { Navigate } from "react-router-dom"

// Componete de rotas privadas
const PrivateRoute = ({children}) => {//children sao as tags desse private route
    // Recupera o state global do usuário (Vem do UsuarioProvider)
    const {usuario} = useContext(UsuarioContext)
    
    // logado? renderiza o componente privado
    // Não logado? volta pra página inicial
    return usuario ? children : <Navigate to="/" /> 
}

export default PrivateRoute