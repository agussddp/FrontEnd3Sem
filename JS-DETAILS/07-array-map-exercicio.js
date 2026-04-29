// Criar um array com 10 números.
// Rodar o map multiplicando o valor de cada item  por 2
// Exbir o array modificado no final com o console log


// Criar um array com 10 números.
const numeros = [   1, 2, 3, 
                    4, 5, 6, 
                    7, 8, 9, 
                    10];


//Rodar o map multiplicando o valor dos itens
const dobro = numeros.map((n) => {
    return n * 2;
});


// Exbir o array modificado no final com o console log
console.log(dobro);
