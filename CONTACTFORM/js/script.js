
            async function cadastrarContato(objetoContato){
                console.log(objetoContato);

                //cadastrar na API
                let resposta = await fetch("http://localhost:3000", {
                    method: "POST",
                    body: JSON.stringify(objetoContato),
                    headers : {
                        "Content-Type" : "aplication/json; charset=UTF-8"
                    }
                });
            }
            
            
            function validarFormulario() {
                let nome = document.getElementById("Nome").value.trim();//pega o valor do campo com id nome
                let sobrenome = document.getElementById("Sobrenome").value.trim();//pega o valor do campo com id sobrenome
                // let email = document.getElementById("Email").value.trim();//pega o valor do campo com id email
                // let message = document.getElementById("Message").value.trim();//pega o valor do campo com id Message
                // let estado = document.getElementById("Estado").value.trim();//pega o valor do campo com id Estado
                // let cidade = document.getElementById("Cidade").value.trim();//pega o valor do campo com id Cidade
                // let bairro = document.getElementById("Bairro").value.trim();//pega o valor do campo com id Bairro
                // let apt = document.getElementById("Apt").value.trim();//pega o valor do campo com id Apt
                // let numero = document.getElementById("Numero").value.trim();//pega o valor do campo com id Numero
                // let rua = document.getElementById("Rua").value.trim();//pega o valor do campo com id Rua
                // let cep = document.getElementById("Cep").value.trim();//pega o valor do campo com id Cep
                // let telefoneN = document.getElementById("TelefoneN").value.trim();//pega o valor do campo com id TelefoneN
                // let DDD = document.getElementById("DDD").value.trim();//pega o valor do campo com id DDD
                // let DDI = document.getElementById("DDI").value.trim();//pega o valor do campo com id DDI

                
                


                let quantidadeErros = 0; 

                    //valida o preenchimento do campo NOME
                if(nome.length == 0){ //se o nome estiver vazio
                    formError("Nome");
                    quantidadeErros++;
                    } else {
                        reiniciaBorda("Nome");
                    }

                    //valida o preenchimento do campo SOBRENOME
                if(sobrenome.length == 0){ //se o sobrenome estiver vazio
                    formError("Sobrenome");
                    quantidadeErros++;
                    } else {
                        reiniciaBorda("Sobrenome");
                    }

                let objetoContato = {
                    nome: nome, 
                    sobrenome: sobrenome
                }

                let cadastrado = cadastradoContato(objetoContato);
                return false;


                        //valida o preenchimento do campo EMAIL
                // if(email.length == 0){ //se o email estiver vazio
                //     formError("Email");
                //     quantidadeErros++;
                //     } else {
                //         reiniciaBorda("Email");
                //     }

                //         //valida o preenchimento do campo MESSAGE/ANOTAÇÃO
                // if(message.length == 0){ //se a message/anotação estiver vazia
                //     formError("Message");
                //     quantidadeErros++;
                //     } else {
                //         reiniciaBorda("Message");
                //     }

                //         //valida o preenchimento do campo ESTADO
                // if(estado.length == 0){ //se a Estado estiver vazia
                //     formError("Estado");
                //     quantidadeErros++;
                //     } else {
                //         reiniciaBorda("Estado");
                //     }

                //         //valida o preenchimento do campo CIDADE
                // if(cidade.length == 0){ //se a Cidade estiver vazia
                //     formError("Cidade");
                //     quantidadeErros++;
                //     } else {
                //         reiniciaBorda("Cidade");
                //     }
                    
                //         //valida o preenchimento do campo BAIRRO
                // if(bairro.length == 0){ //se o Bairro estiver vazio
                //     formError("Bairro");
                //     quantidadeErros++;
                //     } else {
                //         reiniciaBorda("Bairro");
                //     }

                //         //valida o preenchimento do campo APT
                // if(apt.length == 0){ //se o Apt estiver vazio
                //     formError("Apt");
                //     quantidadeErros++;
                //     } else {
                //         reiniciaBorda("Apt");
                //     }

                //     //valida o preenchimento do campo NUMERO
                // if(numero.length == 0){ //se o Numero estiver vazio
                //     formError("Numero");
                //     quantidadeErros++;
                //     } else {
                //         reiniciaBorda("Numero");
                //     }

                //         //valida o preenchimento do campo RUA
                // if(rua.length == 0){ //se a Rua estiver vazia
                //     formError("Rua");
                //     quantidadeErros++;
                //     } else {
                //         reiniciaBorda("Rua");
                //     }

                //         //valida o preenchimento do campo CEP
                // if(cep.length == 0){ //se o Cep estiver vazio
                //     formError("Cep");
                //     quantidadeErros++;
                //     } else {
                //         reiniciaBorda("Cep");
                //     }

                //         //valida o preenchimento do campo TELEFONEN
                // if(telefoneN.length == 0){ //se a TelefoneN estiver vazio
                //     formError("TelefoneN");
                //     quantidadeErros++;
                //     } else {
                //         reiniciaBorda("TelefoneN");
                //     }

                //         //valida o preenchimento do campo DDD
                // if(DDD.length == 0){ //se o DDD estiver vazio
                //     formError("DDD");
                //     quantidadeErros++;
                //     } else {
                //         reiniciaBorda("DDD");
                //     }

                //         //valida o preenchimento do campo DDI
                // if(DDI.length == 0){ //se o DDI estiver vazio
                //     formError("DDI");
                //     quantidadeErros++;
                //     } else {
                //         reiniciaBorda("DDI");
                //     }

        




                //exibir mensagem + quantidade de erros

                if(quantidadeErros != 0){
                    alert("Existem " + quantidadeErros + " campo(s) obrigatório(s) não preenchido(s) :(");
                    quantidadeErros =0;
                }

               

            }

             //funcao que pinta a borda do campo que falta preencher
                function formError(fildId){
                    document.getElementById(fildId).style.border = "1px solid red"; 
                }

                //funcao que nao pinta a borda do campo que é preenchida
                function reiniciaBorda(fildId){
                    document.getElementById(fildId).style.border = "none"; 
                }

                // literal template: é a crase ``
                // console.log(`
                // Aluno: ${nome} ${sobrenome} |
                // E-mail: ${email}`);

                
                // alert(`Nome: ${nome} ${sobrenome} | Email: ${email} |`);

                // alert("Ola eu fui clicado, top top!");

                 
                function cadastradoContato(objetoContato){
                    console.log(objetoContato);
                }

                async function buscarEndereco(cep){
                    if(cep.trim().length < 8){
                        alert("O campo CEP esta incompletp");
                        return false;
                    }

                    try {
                        let retorno = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
                        let dados = await retorno.json();
                        

                        document.getElementById("Rua").value = dados.logradouro;
                        document.getElementById("Bairro").value = dados.bairro;
                        document.getElementById("Cidade").value = dados.cidade;
                        document.getElementById("Estado").value = dados.uf;


                    } catch {
                        alert("Erro ao procurar o endereço!");
                    }
                }

                function aguardarCampo(){
                    document.getElementById("Rua").value = "aguardando...";
                    document.getElementById("Bairro").value = "aguardando...";
                    document.getElementById("Cidade").value = "aguardando...";
                    document.getElementById("Estado").value = "aguardando...";
                }