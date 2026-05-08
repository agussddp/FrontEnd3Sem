import MyPeople from "../../assets/imggato.jpg";
import "./card-perfil.css"


function CardPerfil(){
    return (
        <div class="card-perfil">
            <img class="card-perfil__image" 
            src={MyPeople} 
            alt="imagem do usuario"
            />
        </div>
    )
}

export default CardPerfil