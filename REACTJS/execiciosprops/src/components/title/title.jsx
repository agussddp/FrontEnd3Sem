import "./title.css"

// Destructuring
function Title({texto, sobrenome, idade}){
       return (
            <h1>{texto} - {sobrenome} - {idade}</h1>
        )
   }


// function Title(props)    //Primeiro parametro do componente 
                            //serve para passar infos para dentro dos componentes
//     {
//         return <h1>{props.texto}</h1>
//     }

export default Title