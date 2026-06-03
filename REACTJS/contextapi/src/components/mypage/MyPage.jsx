import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const MyPage = () => {
    //extrair o susuario para utilizar os seus dados
    const {usuario} = useContext(UsuarioContext)
    return(
        <>
            <h2>Minha página </h2>
            <p>Dados do usuário: {usuario}</p>
        </>
    )
}

export default MyPage