// Utilizado para filtrar um elemento dentro de um array. Retorna apenas o encontrado 

const numeros = [5, 10, 14];

const encontrado = numeros.filter((n) => {
    return n == 10;
});

// console.log(encontrado);

const estoque = [
    {
        descricao : "Camisa Polo",
        cor : "Verde",
        perfil : "M",
        quantidade : 10
    },
    {
        descricao : "Camisa Polo",
        cor : "Azul",
        perfil : "F",
        quantidade : 15
    },
    {
        descricao : "Camisa Polo",
        cor : "Cinza",
        perfil : "F",
        quantidade : 30
    },
    {
        descricao : "Camisa Polo",
        cor : "Indigo",
        perfil : "F",
        quantidade : 5
    }
];

const camisetasFemininas = estoque.filter((camiseta) => {
    return camiseta.perfil == "F";
});

console.log(camisetasFemininas);
console.log("Camisetas Polo Femininas");
console.log();

// Utilizar o foreach e exibir os textos conforme o exemplo abaixo
    //"Amarela: 10 unidade(s)"
    //"Roxa: 10 unidade(s)"

    
    camisetasFemininas.forEach((camiseta) => {
    console.log(`${camiseta.cor}: ${camiseta.quantidade} unidade(s)`);
});