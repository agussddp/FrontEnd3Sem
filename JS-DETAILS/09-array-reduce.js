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


// Reduz o array a um único elemento. No caso um somatório, por exemplo:

let totalProdutos = estoque.reduce((total, produto)=> {
    return total + produto.quantidade;
}, 0);