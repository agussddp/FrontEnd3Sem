import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsuarioContext } from "../../context/UsuarioContext";

const Header = () => {

    const {usuario, setUsuario} = useContext(UsuarioContext)

    const logout = () => {
        setUsuario(null)//apaga do state
        localStorage.removeItem("usuario")//Apaga do localStorage
    }


    return(
       <header>
        <nav>
            <Link to={'/'}>Home</Link>{" | "}
            <Link to="/Perfil">Perfil</Link>{" | "}
            <Link to="/MyPage">MyPage</Link>{" | "}
            <Link to="/Produto">Produto</Link>{" | "}
            <span>( {usuario} )</span>
            <button
                onClick={()=>{
                    setUsuario(null)
                }}
            >Sair</button>
        </nav>
       </header>
    )
}

export default Header