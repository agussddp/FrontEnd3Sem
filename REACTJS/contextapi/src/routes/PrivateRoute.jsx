import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"
import { Navigate } from "react-router-dom"

//Alterar provinder
//Componente para rotas privadas
const PrivateRoute = ({children}) => {
    //Recupera os dados do usuario
    const {usuario} = useContext(UsuarioContext)
    //Se o usuario estiver logado, poder acessar (children)
    //senão redireciona para a Home (/)
    return usuario ? children : <Navigate to="/" />
}

export default PrivateRoute