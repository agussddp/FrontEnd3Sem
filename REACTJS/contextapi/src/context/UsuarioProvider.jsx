import { useEffect, useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

const UsuarioProvider = ( {children} ) => {
    const [usuario, setUsuario] = useState(null)
    // const [usuario, setUsuario] = useState([])

    // ciclo de vida
    useEffect(() => {
        // Ao montar o componente, pega os dados do usuario do localStorage
        const usuarioStorage = JSON.parse(localStorage.getItem("usuario")) || ""
        setUsuario(usuarioStorage)
    })

    return (<UsuarioContext.Provider
            value={{
                usuario, 
                setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider