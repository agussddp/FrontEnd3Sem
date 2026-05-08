import Produto from '../EX02/Produto'
import './Produtos.css'

export default function Produtos() {
    const Produtos = [
        {
            nome: "Tênis de marca",
            preco: 550,
            descricap: "Tênis chique!"
        },
        {
            nome: "Camiseta de marca",
            preco: 270,
            descricap: "Tênis chique e confortável!"
        },
    ]

    return(
        Produtos.map((produtinho) => {
            <Produto 
                nome={produtinho.nome}
                preco={produtinho.preco}
                descricap={produtinho.descricao}
            />
        })
    )
}