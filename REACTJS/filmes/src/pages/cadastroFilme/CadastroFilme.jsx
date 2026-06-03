import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./CadastroFilme.css";
import Cadastro from "../../components/cadastro/Cadastro";
import { Alerta } from "../../components/alerta/Alerta";
import { useState, useEffect } from "react";
import Lista from "../../components/lista/Lista";
import api from "../../Services/services"; 

const CadastroFilme = () => {
  // States e Variáveis 
  const [valor, setValor] = useState(""); 
  const [idGenero, setIdGenero] = useState(""); //Guarda o gênero selecionado no select
  const [id, setId] = useState(0); // Guarda o id do filme na edição
  const [editar, setEditar] = useState(false);
  const [listaFilmes, setListarFilmes] = useState([]);
  const [listaGeneros, setListaGeneros] = useState([]);

  // GET
  const getGeneros = async () => {
    try {
      const retornoAPI = await api.get("/Genero");
      setListaGeneros(retornoAPI.data);
    } catch (error) {
      Alerta({
        title: "Cadastro de Filme",
        text: "Problemas ao carregar os gêneros da API",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.log(error);
    }
  };

  const getFilmes = async () => {
    try {
      const retornoAPI = await api.get("/Filme");
      setListarFilmes(retornoAPI.data);
    } catch (error) {
      Alerta({
        title: "Cadastro de Filme",
        text: "Problemas ao carregar os filmes da API",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.log(error);
    }
  };

  // Ciclo de vida 
  useEffect(() => {
    getFilmes();
    getGeneros();
  }, []);

  // POST
  const cadastrarFilme = async (e) => {
    e.preventDefault();
    
    if (valor.trim().length === 0 || !idGenero) {
      Alerta({
        title: "Cadastro de Filme",
        text: "Preencha o título e selecione um gênero!",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }

    const objCadastros = {
      nome: valor,
      idGenero: Number(idGenero),
    };

    try {
      await api.post("/Filme", objCadastros);
      
      Alerta({
        title: "Cadastro de Filme",
        text: `${valor} cadastrado com sucesso`,
        icon: "success",
        confirmButtonText: "Top!",
      });

      getFilmes(); 
      limparFormulario();
    } catch (error) {
      Alerta({
        title: "Cadastro de Filme",
        text: "Erro ao cadastrar na API",
        icon: "error",
        confirmButtonText: "Ok!",
      });
      console.log(error);
    }
  };

  // PUT 
  const preEditar = (item) => {
    setEditar(true);
    setValor(item.nome);
    setIdGenero(item.idGenero);
    setId(item.id);
  };

  // PUT 
  const editarFilme = async (e) => {
    e.preventDefault();

    if (valor.trim().length === 0 || !idGenero) {
      Alerta({
        title: "Cadastro de Filme",
        text: "Preencha todos os campos!",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }

    const objEditar = {
      nome: valor,
      idGenero: Number(idGenero),
    };

    try {
      await api.put(`/Filme/${id}`, objEditar);
      limparFormulario();
      getFilmes();

      Alerta({
        title: "Cadastro de Filme",
        text: "Filme atualizado com sucesso!",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      Alerta({
        title: "Cadastro de Filme",
        text: "Erro ao atualizar os dados na API",
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.log(error);
    }
  };

  // DELETE
  const excluirFilme = async (item) => {
    const result = await Alerta({
      title: "Cadastro de Filme",
      text: `Quer apagar o filme ${item.nome}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Apagar",
      cancelButtonText: "Jamais",
    });

    if (!result.isConfirmed) {
      return false;
    }

    try {
      const retornoAPI = await api.delete(`/Filme/${item.id}`);
      if (retornoAPI.status === 200 || retornoAPI.status === 204) {
        Alerta({
          title: "Cadastro de Filme",
          text: "Apagado com sucesso",
          icon: "success",
          confirmButtonText: "Ok",
        });
        getFilmes();
      } else {
        Alerta({
          title: "Cadastro de Filme",
          text: "Problemas ao apagar o filme",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      Alerta({
        title: "Cadastro de Filme",
        text: "Problemas ao conectar com a API",
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.log(error);
    }
  };

  // Funções auxiliares
  const limparFormulario = () => {
    setValor("");
    setIdGenero("");
    setEditar(false);
    setId(0);
  };

  return (
    <>
      <Header />
      <main>
        <Cadastro
          //Define o título que será exibidgeneroo no formulário 
          nomeCadastro="Cadastro de filme"
          // esconde o select de genero
          visibilidgeneroade="none" 
          // Define o texto que aparece dentro do campo de input 
          placeholder="filme"
          // ----------------------------------------------------
          // Propriedades voltada ao cadastro:
          // Função que será chamada ao enviar o formulário (onSubmit) 
          funcCadastro={editar ? editarFilme : cadastrarFilme} 
          //Valor atual do campo de texto 
          valor={valor}
          //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo 
          setValor={setValor} 
          btnEditar={editar} 
          cancelarEdicao={limparFormulario} 
          listaGeneros={listaGeneros}
        />
        
         <Lista nomeLista="Lista de Filmes"
         visibilidade="none" 
         //Chama o método para validar: 
         lista={listaFilmes} 
         //Identifica o tipo de lista
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


