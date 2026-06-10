import "./Botao.css"

const Botao = (props) => {
    return(

        <button 
        
            className="botao" 
            type={props.btnEditar ? "button" : "submit"}
            onClick={() => {
                if (props.btnEditar) {
                    props.cancelarEdicao()
                }else if (props.btnLogin) {
                    props.fnLogin()
                }else {
                    null
                }
            }}
        >
            {props.nomeDoBotao}
        </button>

    )
}

export default Botao;
