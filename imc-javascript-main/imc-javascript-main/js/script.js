function calcular(){
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat (document.getElementById("peso").value);
   


    if(nome.trim().length == 0 || isNaN(altura) || isNaN(peso)){
        alert("preencha todos os campos Nome, Altura, Peso");
        return false
    }

    const IMC = calcularImc(altura, peso);
    const textoSituacao = gerarTextoIMC(IMC);


 
   
const objIMC = {
    nome : nome,
    altura : altura,
    peso : peso,
    IMC : IMC,
    situacao : textoSituacao
};





             
const retorno = cadastrarNaAPI(objIMC);

if(retorno){
     const tabela = document.getElementById("cadastro");

    tabela.innerHTML += `<td>${nome}</td>
     <td>${altura}</td>
     <td>${peso}</td>
     <td>${IMC.toFixed(2)}</td>
     <td>${textoSituacao}</td>`;

    document.getElementById("nome").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";

    alert(`${nome} foi cadastrado no banco:
            Nome: ${nome}
            IMC: ${IMC}
            Situação: ${situacao}`
        );


}else{
    alert("não foi possivel cadastrar")
}


    function calcularImc(altura, peso){
        return peso / (altura * altura);
    }

    function gerarTextoIMC(IMC){
        if(IMC < 16){
            return "Magreza grave"
        }
        else if(IMC < 17){
            return "Magreza moderada"
        }
        else if(IMC < 18.5){
            return "Magreza leve"
        }
        else if(IMC < 25){
            return "Saudável"
        }
        else if(IMC < 30){
            return "Sobrepeso"
        }
        else if(IMC < 35){
            return "Obesidade Grau I"
        }
        else if(IMC < 40){
            return "Obesidade Grau II"
        }
        else{
            return "Obesidade Grau III"
        }

      
    }
  
}


async function cadastrarNaAPI(objIMC) {

  try {
      let resposta = await fetch("http://localhost:3000/imc", {
      method: "POST",
      body: JSON.stringify(objIMC),
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


async function buscarIMCs(){
    try {
       const retorno = await fetch("http://localhost:3000/imc");
       const dadosRetornados = await retorno.json();

       console.log(dadosRetornados);

       const tabela = document.getElementById("cadastro");


       for (let i = 0; i < dadosRetornados.length; i++) {

        tabela.innerHTML += 
        `<tr>
        <td>${dadosRetornados[i].nome}</td>
        <td>${dadosRetornados[i].altura}</td>
        <td>${dadosRetornados[i].peso}</td>
        <td>${dadosRetornados[i].IMC.toFixed(2)}</td>
        <td>${dadosRetornados[i].situacao}</td>
        </tr>`;
       }

       

    } catch (error) {
        console.log(error);
    }
}