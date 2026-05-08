
// o que quer que o usuário coloque entre as tags, vai exibir neste local
// trata o componente como uma "caixa" onde pode enfiar qualquer coisa 

//É uma prop especial do React que contém tudo o que for colocado
// entre a tag de abertura (<Card>) e fechamento (</Card>) do componente.



import './mychildren.css'

function MyChildren({children}){
    return (
        <div className="container">{children}</div>
    )
}

export default MyChildren