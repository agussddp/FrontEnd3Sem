
async function cadastrarNaAPI(n1, n2, op, resultado) {

  try {
       await fetch( {
            method: "POST",
            body: JSON.stringify(objOperacao),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
      }
       });
       return true;

  } catch (error) {

    console.log(error);
    return false;

  }
}



function atualizarTela(dados) {
    const secaoData = document.getElementById("cadastro");
    
    secaoData.innerHTML += `
        <article class="data__card-result">
            <span><strong>Primeiro Número:</strong> ${dados.n1}</span>
            <span><strong>Segundo Número:</strong> ${dados.n2}</span>
            <span><strong>Operação:</strong> ${dados.operacao}</span>
            <span><strong>Resultado:</strong> ${dados.resultado}</span>
        </article>`;
}

    
    async function buscarHistorico() {
    try {
        const resposta = await fetch();
        const dados = await resposta.json();
        
        document.getElementById("cadastro").innerHTML = "";

        dados.forEach(item => {
            atualizarTela(item);
        });
    } catch (error) {
        console.log("Erro ao buscar histórico:", error);
    }
}

