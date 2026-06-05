import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Perfil = () => {
    // state global (UsaurioContext)
    const {usuario, setUsuario} = useContext(UsuarioContext)
    //state local
    const [novoUsuario, setNovoUsuario] = useState("")

    const login = (dadosUsuario) => {
        setUsuario(novoUsuario);
        localStorage.setItem("usuario", JSON.stringify(novoUsuario))//pegar o dado e colocar no storage
        setNovoUsuario("")
    }


    return(
        <>
            <h2>Página Perfil</h2>
            <span>Usuário: {usuario}</span>
            <p>
                <input type="text" 
                placeholder="Novo usuário"
                value={novoUsuario}
                onChange={(e) =>{
                    setNovoUsuario(e.target.value)
                }}
            />
            <button onClick={() => {
                login()
                
            }}>Entrar</button>
            </p>
        </>
    )
}

export default Perfil