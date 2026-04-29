const hobbies  = [
    "Jogar campo minado", 
    "Ler", 
    "Jogar Sudoku", 
    "Ouvir musica",
];

// Array map é um método de classe array que intera sobre o 
// array retornando um novo array, compondo um novo resultado para cada índice antigp, 
//      veja:

const novosHobbies = hobbies.map((hobby) => {
    return `<p> ${hobby} </p>;`;
}); 

console.log(novosHobbies);