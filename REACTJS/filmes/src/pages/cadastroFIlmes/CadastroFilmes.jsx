import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import "./CadastroFilmes.css";
import Cadastro from "../../components/cadastro/Cadastro";
import { Alerta } from "../../components/alerta/Alerta";
import { useState } from "react";
import Lista from "../../components/lista/Lista";
import api from "../../services/services";


const CadastroFilme = () => {



    //States e Variáveis
    const [valor, setValor] = useState("")
    const [editar, setEditar] = useState(false)
    const [id, setId] = useState(0)
    const [listaFilmes, setListarFilmes] = useState([
        {
            idGenero: 1,
            titulo: "Os Smurfs",
            genero: { idGenero: 2, nome: "Comedia" }

        }
        //   {
        // idGenero: 1,
        // titulo: "O silencio dos inocentes",
        // genero: {idGenero: 2, nome: "Terror"}

        //   }



    ])
    const [listaGeneros, setListaGeneros] = useState([])


    // GET
    const getGeneros = async () => {
        try {
            const RetornoAPI = await api.get("/Genero")
            setListaGeneros(RetornoAPI.data)//preencher o array listarGeneros


        } catch (error) {
            alert("Problemas ao carregar os dados da API " + error)
        }
    }
    const getFilmes = async () => {
        try {
            const RetornoAPI = await api.get("/Filme")
            setListarFilmes(RetornoAPI.data)//preencher o array listarGeneros
        } catch (error) {
            alert("Problemas ao carregar os dados da API " + error)
        }
    }

    // POST
    const cadastrarFilme = async (e) => {
        e.preventDefault()

        if (valor.trim() == "") {
            return false;
        }

        const objCadastro = {
            nome : valor
        }


        try {

            await api.post('/Filme', objCadastro);

            Alerta({
                title: 'Cadastro de filme',
                text: 'cadastrado com sucesso',
                icon: 'success',
                confirmButtonText: 'Top!'
            })

            setValor('');
            getFilmes();
        } catch (error) {

            Alerta("error", "Erro ao cadastrar gênero!");


            console.log(error);
            
        }

    }

    // PUT
    const preEditar = () => {
        setEditar(true)
        setValor(item.nome)
        setId(item.id)
    }


    const editarFilme = async (e) => {


        e.preventDefault();
        if (valor.trim() == "") {

            Swal.fire({
                title: 'Cadastro de genero',
                text: 'Preencha o nome do gênero!',
                icon: 'error',
                confirmButtonText: 'cool'
            })
            return false;

        }
        const objetoEditar = {
            nome: valor,
        };

        try {
            const retornoAPI = await api.put(`/Filme/${id}`, objetoEditar);

            limparFormulario()
            getFilmes()
            alert("filme editado foi atualizado")

        } catch (error) {

            alert("error", "Erro ao editar gênero!");
            console.log(error);
        }


    }

    // DELETE
    const excluirFilme = async () => {

        const result = await Swal.fire({
            title: "Tem certeza?",
            text: `Quer apagar o Filme ${item.nome}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Apagar",
            cancelButtonText: "Jamais"
        })
        if (!result.isConfirmed) {
            return false;
        }
        try {
            const RetornoAPI = await api.delete(`/Filme/${item.id}`)
            if (RetornoAPI.status == 200 || RetornoAPI.status == 204) {
                alert("Apagado com sucesso")
                getGeneros()
            }

        } catch (error) {
            Swal.fire({
                title: 'Cadastro de genero',
                text: 'erro ao carregar dados da API',
                icon: 'error',
                confirmButtonText: 'cool'
            })
        }

    }

    //Funções auxiliares
    const limparFormulario = () => {
        setValor("")
        setEditar(false)
        setId(0)

    }



    //Funções



    //Ciclo de vidgeneroa


    return (
        <>
            <Header />
            <main>
                <Cadastro
                    //Define o título que será exibidgeneroo no formulário
                    tituloCadastro="Cadastro de filme"
                    // esconde o select de genero
                    // visibilidgeneroade="none"
                    // Define o texto que aparece dentro do campo de input
                    placeholder="filme"
                    // ----------------------------------------------------
                    // Propriedades voltada ao cadastro:

                    //Função que será chamada ao enviar o formulário (onSubmit)
                    funcCadastro={editar ? editarFilme : cadastrarFilme}
                    //Valor atual do campo de texto
                    valor={valor}
                    //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
                    setValor={setValor}
                    btnEditar={editar}
                    cancelarEdicao={limparFormulario}
                    listaGeneros={listaGeneros}
                />

                <Lista
                    tituloLista="Lista de Filmes"
                    // visibilidade="none"
                    //Chama o método para validar:
                    lista={listaFilmes}
                    //Identifica o tipo de lista:
                    tipoLista="filme"
                    funcExcluir={excluirFilme}
                    funcEditar={preEditar}
                />

            </main>
            <Footer />
        </>
    );
};

export default CadastroFilme;