import './produto.css';
import { useEffect, useState } from 'react';
import img from '../../assets/laptop-png.png';
import api from '../../services/services';


export default function Produto() {
  // states de variaveis
  const [id, setId] = useState(0);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState(0);
  const [imagem, setImagem] = useState(img);
  const [editar, setEditar] = useState(false);
  const [arrProdutos, setArrProdutos] = useState([]);

  // ciclos de vida e funcoes
  useEffect(() => {
      // chamar de api e jogar dados no state
      getProdutos();
    }, []);

  async function cadastrarProduto(e) {


    e.preventDefault(); // nao deixa o formulario postado
    // alert('funcao cadastrar chamada')
      // return false

      // validar formulario
      if (
    nome.trim().length === 0 ||
    descricao.trim().length === 0 ||
    isNaN(preco) || preco <= 0 ||
    isNaN(quantidade) || quantidade <= 0
    ) {
      alert('Preencha os campos corretamente');
      return false;
    }

    // gerar objeto que vai na api
    const objCadastrado = {
      nome: nome,
      preco: preco,
      descricao: descricao,
      quantidade: quantidade,
      imagem: 'image.jpg',
    };
    console.log(objCadastrado);

    // cadastrar na api
    try {
      const retornoAPI = await api.post('/produtos', objCadastrado);
      
      console.log(retornoAPI);
        //validando o retorno da API
      if (retornoAPI.status == 201) {
        const dadosCadastrados = await retornoAPI.data; // console.log(dadosCadastrados);
        setArrProdutos([...arrProdutos, dadosCadastrados]);
        alert('dados cadastrados com sucesso');
        LimparFormulario();
      } else {
        alert('problema inesperado');
      }
    } catch (error) {
      alert('nao foi possivel salvar os dados');
      console.log(error);
    }
  }

  // funcao que reinicia os states pra limpar o formulário
  function LimparFormulario() {
    setId(0);
    setNome('');
    setDescricao('');
    setQuantidade(0);
    setPreco(0);
  }

  

  async function getProdutos() {
    try {
      //faz requisição na api
      const retornoAPI = await api.get('/produtos');
      // transforma o  retorno que é json em objeto javascript
      const dados = await retornoAPI.data;
      console.log(dados);
      // inserir os dados no state
      setArrProdutos(dados);
    } catch (error) {
      console.log('Erro ao buscar os produtos');
      console.log(error);
    }
  }

  function putprodutos() {}

  async function deletar(id) {
    if (!confirm("Você quer realmente apagar o produto?")) {
      return false;
    }

    try {
      const retornoAPI = await api.delete(`/produtos/${id}`

      );
      if (retornoAPI.status == 200 && retornoAPI.statusText == 'OK') {
        alert('Produto apagado com sucesso');

        //gerar uma nova lista com os produtos que sobraram
        const novaLista = arrProdutos.filter((prod) => {
          return prod.id != id;
        });

        // atualiza a variavel de produtos
        setArrProdutos(novaLista);
      } else {
        alert('Algum erro ocorreu ao apagar');
      }
    } catch (error) {
      alert('Erro ao apagar o produto');
      console.log(error);
    }
  }

  async function editarProduto(e) {
    e.preventDefault();

    if (
      nome.trim().length == 0 ||
      descricao.trim().length == 0 ||
      isNaN(preco) ||
      preco > 0 ||
      isNaN(quantidade) ||
      quantidade <= 0
    ) {
      alert('Preencha os campos corretamente');
      return false;
    }

    // gerar objeto que vai na api
    const objCadastrado = {
      nome: nome,
      preco: preco,
      descricao: descricao,
      quantidade: quantidade,
      imagem: 'image.jpg',
    };

    try {
      const retornoAPI = await api.put(`/produtos/${id}`, objCadastrado);

      if(retornoAPI.status == 200){
        alert("Produto alterado com sucessp")
        getProdutos(); // listar os dados
      LimparFormulario(); // limpar o form
      setEditar(false);
      } else{
        alert("Erro ao editar");
      }
    } catch (error) {
      alert('erro ao editar o produto');
      console.log(error);
    }
  }

  // desenhos de componentes na tela em si
  return (
    <>
      <header className="cabecalho">
        <h1 className="titulo--cinza">SENAI</h1>
        <h1 className="titulo--vermelho">LOJA</h1>
      </header>

      <form
        className="formzin"
        action=""
        onSubmit={editar ? editarProduto : cadastrarProduto}
      >

        <div className="input--dados">
          <input
            className="input--metade"
            type="text"
            id="nome"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="input--metade"
            type="number"
            id="preco"
            placeholder="Preço"
            value={preco}
            onChange={(e) => setPreco(parseFloat(e.target.value))}
          />
          <input
            className="input--metade"
            type="number"
            id="quantidade"
            placeholder="Quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(parseInt(e.target.value))}
          />
          <input
            className="input--metade"
            type="text"
            id="descricao"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        {editar && (
          <button
            type="submit"
            className="btn--cadastro"
            onClick={() => {
              setEditar(false);
              setId(0);
              LimparFormulario();
            }}
          >
            Cancelar
          </button>
        )}

        {}
        <button type="submit" className="btn--cadastro">
          Adicionar Produto
        </button>
      </form>

      <section className="produtos">
        {arrProdutos.map((prod) => (
          <div key={prod.id} className="produto">
            <h2>{prod.nome}</h2>
            <p>Preço: R$ {Number(prod.preco).toFixed(2)}</p>
            <p>Descrição: {prod.descricao}</p>
            <p>Quantidade: {prod.quantidade}</p>
            <img src={img} alt={prod.nome} />

            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                deletar(prod.id);
              }}
            >
              Apagar
            </a>

            <button className="produtos__btn-comprar">Comprar</button>

            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setEditar(true);
                setId(prod.id);
                setNome(prod.nome);
                setDescricao(prod.descricao);
                setPreco(prod.preco);
                setQuantidade(prod.quantidade);
              }}
            >
              Editar
            </a>
          </div>
        ))}
      </section>
    </>
  );
}
