let frutasVermelhas = new Array();
let frutasCitricas = ["limao", "Laranja", "Abacaxi", "Tangerina", "Acerola"];

frutasVermelhas.push("Morango");
frutasVermelhas.push("Maça");
frutasVermelhas.push("Amora");
frutasVermelhas.push("Cereja");

// console.log(frutasCitricas);
console.log(frutasVermelhas);
const frutaremovida = frutasVermelhas.pop(); //retira o último elemetno do array
console.log(frutasVermelhas);

console.log(`${frutaremovida} foi removida da cesta de frutas`);