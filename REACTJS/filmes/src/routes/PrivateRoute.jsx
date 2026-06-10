import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {

    // recupera os dados do usuario
const {usuario} = useContext(UsuarioContext)

return usuario ? children : <Navigate to="/" />

}
export default PrivateRoute