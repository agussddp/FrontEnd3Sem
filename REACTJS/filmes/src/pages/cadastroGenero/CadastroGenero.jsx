import './CadastroGenero.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Cadastro from '../../components/cadastro/Cadastro'
import Lista from '../../components/lista/Lista'
import { useEffect, useState } from 'react'
import api from '../../Services/Services'

const CadastroGenero = () => {
  // variaveis e states
  const [valor, setValor] = useState('')
  const [listaGeneros, setListaGeneros] = useState([])

  //funcoes e ciclo de vida
  const getGeneros = async () => {
    //chamar na api
    try {
      const retornoAPI = await api.get('/Genero')//chamar a api
      setListaGeneros(retornoAPI.data)//preencher o array listaGeneros
    } catch (error) {
      alert('Problemas ao carregar os dados da API')
    }
    //preencher o array listaGeneros
  }

  //ciclo de vida
  useEffect(() => {
    getGeneros()
  }, [])

  async function cadastrarGenero(e){
    e.preventDefault()
    // alert( Função cadastrar gênero em desenvolvimento )
    
    //Validar o formulário
    if (valor.trim().length === 0) {
      alert('Preencher o gênero')
      return false
    }

    const objCadastrado = { nome : valor }

    //cadastrar na api com post
    try {
      const retornoAPI = await api.post('/Genero' , objCadastrado)
      alert('Cadastrado com sucesso')
      // limpa o input após cadastrar
      setValor('')
      // listar os dados novamente - (chamar o getGeneros)
      getGeneros()
    } catch (error) {
      alert('Erro ao cadastrar na API')
      console.log(error);
    }
  }

 const excluirGenero = async (item) => {
    if (!confirm (`Quer apagar o gênero ${item.nome}`)) {
        return false
        
    }
    try {
      const retornoAPI = await api.delete(`/Genero/${item.id}`);
      alert("Gênero excluído com sucesso!");
      getGeneros();
    } catch (error) {
      alert("Ocorreu um erro ao excluir o gênero.");
      console.log(error);
    }
  };

  const editarGenero = () => {
    alert ('Função Editar em desenvolvimento')
  }

  // o JSX em si (XML e HTML)
  return (
    <>
      <Header />
      <main>
        <Cadastro
          //Define o título que será exibido no formulário
          tituloCadastro="Cadastro de Gênero"
          // esconde o select de genero
          visibilidade="none"
          // Define o texto que aparece dentro do campo de input
          placeholder="gênero"
          // ----------------------------------------------------
          // Propriedades voltada ao cadastro:
          //Função que será chamada ao enviar o formulário (onSubmit)
          funcCadastro={cadastrarGenero}
          //Valor atual do campo de texto
          valor={valor}
          //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
          setValor={setValor}
        />
        
        <p> Valor Digitado: <strong>{valor}</strong></p>

        {/* //Lista de Gêneros */}
        <Lista
          tituloLista="Lista de Gêneros"
          visibilidade="none"
          //Chama o método para validar:
          lista={listaGeneros}
          //Identifica o tipo de lista:
          tipoLista="genero"
          funcExcluir={excluirGenero}
          funcEditar={editarGenero}
        />
      </main>
      <Footer />
    </>
  )
}

export default CadastroGenero
