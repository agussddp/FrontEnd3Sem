function calcular(){
    // alert("Função Calcular rodando!!")
    //pegar os valores dos campos

    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    // validar se esta tudo preenchido
    if (nome.trim().length == 0 || isNaN(altura) || isNaN(peso)){
        alert("Preencha todos os campos: Nome, Altura e Peso");
        return false;
    }

    const IMC = calcularIMC(altura,peso); //criando a constante imc
    const textoSituacao = gerarTextoImc(IMC); //chama a função que gera o texto do IMC, 
                         
    // que chama o imc da constante de cima

    console.log(nome);
    console.log(altura);
    console.log(peso);
    console.log(IMC);
    console.log(textoSituacao);


    //cadastrar a uma linha de tabelo no html
    
    const tabela = document.getElementById("cadastro");

    tabela.innerHTML += //(innerHTML) acessa o html interno do id
            `<tr>
                <td>${nome}</td>
                <td>${altura}</td>
                <td>${peso}</td>
                <td>${IMC}</td>
                <td>${textoSituacao}</td> 
            </tr>`;
}

    




// calcular o IMC
function calcularIMC(altura, peso){
    return peso / (altura * altura);
}

function gerarTextoImc(IMC){
    // Menor que 16 – Magreza grave;
    // 16 a menor que 17 – Magreza moderada;
    // 17 a menor que 18,5 – Magreza leve;
    // 18,5 a menor que 25 – Saudável;
    // 25 a menor que 30 – Sobrepeso;
    // 30 a menor que 35 – Obesidade Grau I;
    // 35 a menor que 40 – Obesidade Grau II (considerada severa);
    // Maior que 40 – Obesidade Grau III (considerada mórbida).

     if (IMC < 16) {
        return "Magreza grave";
    } else if (IMC < 17) {
        return "Magreza moderada";
    } else if (IMC < 18.5) {
        return "Magreza leve";
    } else if (IMC < 25) {
        return "Saudável";
    } else if (IMC < 30) {
        return "Sobrepeso";
    } else if (IMC < 35) {
        return "Obesidade Grau I";
    } else if (IMC < 40) {
        return "Obesidade Grau II (severa)";
    } else {
        return "Obesidade Grau III (mórbida)";
    }
}

