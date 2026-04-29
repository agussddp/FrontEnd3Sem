function calcular() {
    //entrada
    let n1 = parseFloat( document.getElementById('n1').value ) ;
    let n2 = parseFloat( document.getElementById("n2").value );
    let op = document.getElementById("operacao").value;//soma
    let resultado = null;
    
    if( isNaN(n1) || isNaN(n2) ){
        document.getElementById('resultado').innerText = 'Preencha todos os números!'
    }
    
 
    
    
    
   

    
    //processamento
    if(op == 'soma'){
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);
        
    } else if(op == 'subtracao') {
        resultado = subtrair(n1, n2);
        resultado = resultado.toFixed(2);
        
    } else if (op == 'multiplicacao'){
        resultado = multiplicar(n1, n2);
        resultado = resultado.toFixed(2);
        
    } else if (op == 'divisao'){
        
        if(n2 == 0) {
            resultado = 'Não é um número';
        } else {
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }
        
    } else {
        resultado = "Operação Inválida";
    }
    
    //saída
    // console.log(`Resultado da operação: ${resultado}`);
    document.getElementById('resultado').innerHTML = resultado;



       const objCAL ={
        n1 : n1,
        n2 : n2,
        op : op,
        resultado : resultado
        
    };


    const retorno = cadastrarNaAPI(objCAL);

     if(retorno){
        const tabela = document.getElementById("cadastro");
        
        tabela.innerHTML +=
    `<article class="data__card-result">
    <span><strong>Primeiro Número:</strong>${n1}</span>
    <span><strong>Segundo Número:</strong>${n2}</span>
    <span><strong>Operação:</strong>${op}</span>
    <span><strong>Resultado:</strong>${resultado}</span>
    </article>`;
    
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("resultado").value = "";
    
    alert(`equação foi cadastrada no banco:
                Numero 1: ${n1}
                Numero 2: ${n2}
                Resultado: ${resultado}`
            );
    
    }else{
        alert("não foi possivel cadastrar")
    }
}


/**
 * Função somar recebe 2 valores e retorna a soma dos 
 * dois valores
 */
 function somar(valor1, valor2) {
    return valor1 + valor2;
}


function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    if(valor2 == 0) {
        return 'Não é um número';
    }
    
    return valor1 / valor2;
}

document.getElementById('cadastro')



async function cadastrarNaAPI(objCAL) {
    try {
    let resposta = await fetch ("http://localhost:3000/calculadora", {
    method : "POST",
    body: JSON.stringify(objCAL),
    headers : {
          "Content-Type" : "application/json; charset=UTF-8"
    }
    });
    return true;

    } catch (error) {
        console.log(error);
        return false;
    }
}

    
async function buscarEquacao() {
    try {
        const retorno =await fetch("http://localhost:3000/calculadora");
        const dadosRetornados = await retorno.json();

        console.log(dadosRetornados);

        const tabela = document.getElementById("cadastro")

        for (let i = 0; i< dadosRetornados.length; i++) {
          
            tabela.innerHTML +=
            `<article class="data__card-result">
            <span><strong>Primeiro Número:</strong>${dadosRetornados[i].n1}</span>
            <span><strong>Segundo Número:</strong>${dadosRetornados[i].n2}</span>
            <span><strong>Operação:</strong>${dadosRetornados[i].operacao}</span>
            <span><strong>Resultado:</strong>${dadosRetornados[i].resultado}</span>
            </article>`;


        }



    } catch (error) {
        console.log(error);
    }
    
}
    