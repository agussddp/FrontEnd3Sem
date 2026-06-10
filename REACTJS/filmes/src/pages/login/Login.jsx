import './Login.css';
import Botao from '../../components/botao/Botao';
import Logo from '../../assets/img/logo.svg';
import { useContext, useEffect, useState } from 'react';
import { UsuarioContext } from '../../context/UsuarioContext';
import { useNavigate } from 'react-router-dom';
import { Alerta } from '../../components/alerta/Alerta';
import api from '../../services/Services'; 
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  // state global
  const { usuario, setUsuario } = useContext(UsuarioContext);
  
  // state local
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    // Validação do formulário (Corrigido: senh para senha)
    if (email.trim().length === 0 || senha.trim().length === 0) {
      Alerta({
        title: "Login",
        text: "Preencha o formulário",
        icon: "warning",
        confirmButtonText: "OK"
      });
      return false;
    }

    const dadosLogin = {
      email: email,
      senha: senha,
    };

    try {
      // Fazendo a requisição para a API
      const retornoAPI = await api.post('/Login', dadosLogin);

      const token = retornoAPI.data.token
      const usuarioDecoded = jwtDecode(token)


      return false;

      // Se deu tudo certo
      setUsuario(email);
      localStorage.setItem("usuario", JSON.stringify(usuarioDecoded)); 
      setEmail("");
      navigate('/generos');

    } catch (error) {
      Alerta({
        title: "Login",
        text: "Erro ao logar o usuário. Verifique seus dados.",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
  };

  const verificaLogin = () => {
    const logado = localStorage.getItem("usuario");
    
    // Verifica se existe um usuário salvo
    if (logado) {
      setUsuario(JSON.parse(logado));
      navigate('/generos');
    }
  };

  // Carrega os dados do login
  useEffect(() => {
    verificaLogin();
  }, []);

  return (
    <main className="main_login">
      <div className="banner"></div>
      <section className="section_login">
        <img src={Logo} alt="Logo do Filmoteca" />
        <form className="form_login" onSubmit={(e) => e.preventDefault()}>
          <h1>Login</h1>
          <div className="campos_login">
            <div className="campo_input">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Digite seu e-mail" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="campo_input">
              <label htmlFor="senha">Senha:</label>
              <input 
                type="password" 
                name="senha" 
                placeholder="Digite sua senha" 
                value={senha} 
                onChange={(e) => setSenha(e.target.value)} 
              />
            </div>
          </div>
          <Botao nomeDoBotao="Entrar" btnLogin={true} fnLogin={login} />
        </form>
      </section>
    </main>
  );
};

export default Login;
