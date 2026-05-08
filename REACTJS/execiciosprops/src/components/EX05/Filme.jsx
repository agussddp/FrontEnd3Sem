// 05) Crie um componente chamado Filme que receba:
// titulo
// ano
// genero
// nota
// Mostre todas as informações na tela.
// Crie pelo menos 3 filmes diferentes.


import './Filme.css'

function Filme({ titulo, ano, genero, nota }) {
  return (
    <div className="cartao-filme">
        <h2>{titulo}</h2>
        <p><strong>Ano:</strong> {ano}</p>
        <p><strong>Gênero:</strong> {genero}</p>
        <p><strong>Nota:</strong> {nota}</p>
    </div>   
  );
}

export default Filme;

