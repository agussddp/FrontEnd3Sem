import CardPerfil from '../cardperfil/card-perfil';
import './Menu.css'
//Importa o caminho da imagem

function Menu() {
    return(
        <nav class="menu">
            {/* <!-- Elementos --> */}
            <a href="#" className="menu__item">Home</a>
            <a href="#" className="menu__item">Quem somos</a>
            <a href="#" className="menu__item">Contato</a>
            <a href="#" className="menu__item menu__item--signin">Entrar</a>
            <a href="#" className="menu__item menu__item--signup">Cadastrar</a>

            <CardPerfil />
        </nav>
    );
}

export default Menu