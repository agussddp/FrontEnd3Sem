import './Menu.css'
//Importa o caminho da imagem
import MyPeople from "../../assets/imggato.jpg";

function Menu() {
    return(
        <nav class="menu">
            {/* <!-- Elementos --> */}
            <a href="#" className="menu__item">Home</a>
            <a href="#" className="menu__item">Quem somos</a>
            <a href="#" className="menu__item">Contato</a>
            <a href="#" className="menu__item menu__item--signin">Entrar</a>
            <a href="#" className="menu__item menu__item--signup">Cadastrar</a>

            <div class="card-perfil">
                <img class="card-perfil__image" src={MyPeople} alt="imagem do usuario"/>
            </div>
        </nav>
    );
}

export default Menu