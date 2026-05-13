import { useState } from "react"

function Contador () {

    //States e Variáveis
    // Funções
     
    const [contador, setContador] = useState(0)

    function Incrementar () {
        if (contador < 10){
            setContador(contador + 1 )
        } else{
            setContador(0)
        }
    }

    function Decrementar() {
        if (contador > 0) {
            setContador(contador - 1);
        } else{
            setContador(0)
        }
    }

    return (
        <div className="contador">
            <h1 className="contador__title">Contador {contador}</h1>

            <button onClick={Decrementar}>Contar --</button>
            <button onClick={Incrementar}>Contar ++</button>
        </div>
    )
}




//  Elaborar a funcionalidade de decrementar (Feito)
//  Quando o contador chegar em 10 deve ser zerado novamente (Feito)
//  O contador só pode aceitar números positivos (Feito)




export default Contador;
