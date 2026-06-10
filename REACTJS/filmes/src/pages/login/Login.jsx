import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao.jsx";
import { useContext, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext.jsx";





const Login = () => {

    const { usuario, setUsuario } = useContext(UsuarioContext)
    const [email, setEmail] = useState("");


    const login = (e) => {

        

            setUsuario(email);
            localStorage.setItem("usuario", JSON.stringify(email));
            setEmail("");

        
    }

    return (
        <main className="main_login">
            <div className="banner"></div>
            <section className="section_login">
                <img src={Logo} alt="Logo do Filmoteca" />
                <form action="" className="form_login">
                    <h1>Login</h1>
                    <div className="campos_login">
                        <div className="campo_input">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                        </div>
                        <div className="campo_input">
                            <label htmlFor="senha">Senha:</label>
                            <input type="password" name="senha" placeholder="Digite sua senha" />
                        </div>
                    </div>
                    <Botao nomeDoBotao="Entrar" btnLogin={true} fnLogin={login} onClick={() => { login() }} />
                </form>
            </section>
        </main>
    )
}

export default Login;