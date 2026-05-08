// 06) Crie um componente chamado Aluno que receba:
// nome
// curso
// imagem
// Exiba:
// A imagem do aluno
// O nome
// O curso
import './Aluno.css';

export default function Aluno({ nome, curso, imagem }) {
    return (
        <nav className="card-aluno">
           
            <div className="card-alunoimg">
                <img className="card-aluno__image" src={imagem} alt={`Foto de ${nome}`}/>
            </div>

            <h2>{nome}</h2> 
            <p><strong>Curso:</strong> {curso}</p>
        </nav>
    );
}
