import { useEffect, useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null)
    // const [listaUsuario, setListaUsuario] = useState([])

    useEffect(() => {
        const usuarioStorage = JSON.stringify(localStorage.getItem("usuario")) || ""
        setUsuario(usuarioStorage)
    }, [])

    return (
        <UsuarioContext.Provider value={{
            usuario, setUsuario

        }}>{children}</UsuarioContext.Provider>

    )

}

export default UsuarioProvider