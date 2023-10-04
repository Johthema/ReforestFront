import Header from '../../components/header/index'
import Foot from '../../components/footer/index'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Style from './plantar.module.css';
import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import { FaStar, FaFilter, FaGlobeAmericas, FaCity, FaTree, FaSeedling, FaRulerCombined, FaTrashAlt, FaLeaf, FaRegWindowClose } from "react-icons/fa";
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Map from "../../components/mapa/index";
import ImgArvore from '../../assets/images/arvore_1.jpg';
import Pagination from 'react-bootstrap/Pagination';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const URL_API_TREE = process.env.NEXT_PUBLIC_API_URL + "tree";
const URL_API = process.env.NEXT_PUBLIC_API_URL + "plantingPlace";
const URL_API_CATEGORY = process.env.NEXT_PUBLIC_API_URL + "category";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

export default function Plantar() {
  //Variaveis internos
  const [loading, setLoading] = useState('')
  const [aviso, setAviso] = useState(false);
  const [errorInt, setErroInterno] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resposta, setResposta] = useState('')

  //Variaveis de local
  const [reloadCount, setReloadCount] = useState(0);
  const [dados, setData] = useState([]);
  const [index, setIndex] = useState(0);

  const latitude = -23.550520;
  const longitude = -46.633308;

  //Variaveis árvores
  const [repos, setRepo] = useState([]);
  const [dadosArvore, setDadosArvore] = useState([]);
  const [initialRepos, setInitialRepo] = useState([]);
  const [tipo, setTipo] = useState('todos');
  const [ordenar, setOrdenar] = useState('recente');
  const [contadorPage, setContadorPage] = useState('1');
  const [busca, setBusca] = useState('')
  const [categori, setCategori] = useState('');
  const [dadosCategoria, setDadosCat] = useState([])
  const [pageQtd, setPageQtd] = useState(1);
  const [pageLimit, setPageLimit] = useState('6');
  // const [trees, setTrees] = useState([]);
  // const [locId, setLoc] = useState('');




  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };

  useEffect(() => {

    const fetchRepos = async () => {
      try {
        setLoading(true)
        //console.log("o tipo de arvore é: ",tipo)

        const response = await fetch(URL_API)
        // const dados = await response.json();
        const dados = await response.json()

        const responseCat = await fetch(URL_API_CATEGORY)
        const dadosCat = await responseCat.json();
        setDadosCat(dadosCat);
        setData(dados)
        if (tipo == 'todos') {
          const responseArvore = await fetch(URL_API_TREE + "?search=" + busca + "&category=" + categori + "&page=" + pageQtd + "&limit=" + pageLimit)
          const dadosArvore = await responseArvore.json();

          setRepo(dadosArvore);

          console.log("Lista pronta: ", dados)


          setLoading(false)
        } else {
          console.log("..")
        }


      } catch (error) {
        console.log(error)
        setErroInterno(true)
      }
    }

    fetchRepos()
  }, [reloadCount]);


  //-------------------------Paginação inicio
  const paginacao = (qtd) => {
    // setPageLimit(qtd)
    setPageQtd(qtd)
    setLoading(true)
    setReloadCount(prevCount => prevCount + 1);

  }

  const paginaContador = (prop) => {

    if (prop == 'sum') {
      setPageQtd(pageQtd + 1)
      setReloadCount(prevCount => prevCount + 1);
    } else if (prop == 'sub') {
      setPageQtd(pageQtd - 1)
      setReloadCount(prevCount => prevCount + 1);
    }
  }
  //-------------------------Paginação fim




  //====================================Selecionar arvores para plantar inicio=====================
  // Estado para armazenar a coleção
  // const [colecao, setColecao] = useState([]);
  const [especie, setEspecie] = useState('');
  const [local, setLocal] = useState('');
  const [selecionado, setSelecionado] = useState(0)
  const [selecionadoTree, setSelecionadoTree] = useState(0)
  const [trees, setTrees] = useState([]);
  const [locId, setLoc] = useState('');
  const [contadorIndex, setContadorIndex] = useState('');

  const [treeId, setreeId] = useState('');
  const [contadorTreeIndex, setContadorTreeIndex] = useState('');

  const [qtdEspec, setQtdEspec] = useState('');
  const [idEspQtd, setIdQtde] = useState('');

  const selecionarLocal = (evt, idLoc, i) => {
    console.log("o event check: ", event)
    if(locId == ''){
      console.log("entrou na funcao idLoc == vazio")
      //setSelecionado(1)
      setLocal(evt)
      setContadorIndex(i)
      setLoc(idLoc)
    } else if(idLoc == locId){
      //setSelecionado(0)
      console.log("entrou na funcao idLoc == locid")
      setLocal('')
      setLoc('')
      setContadorIndex(i)
      setTrees('')
    }  
    
    
  }
  const selecionarEspecie = (evt, idTree, i) => {
    console.log("o event check: ", event)



    if(treeId == ''){
      console.log("entrou na funcao idLoc == vazio")
    
      setEspecie(evt)
      setContadorTreeIndex(i)
      setreeId(idTree)
    } else if(idTree == treeId){
   
      console.log("entrou na funcao idLoc == locid")
      setEspecie('')
      
      setContadorTreeIndex(i)
      setreeId('')
    }  


  };

  const selecionarQtd = (qtd, id) => {

    console.log("o id do card: ", id)

    if(qtdEspec == ''){
      setQtdEspec(qtd)
      setIdQtde(id)
    } else if (qtdEspec == qtd){
      setQtdEspec('')
      setIdQtde('')
    }

    // if(treeId == ''){
    //   console.log("entrou na funcao idLoc == vazio")
    
    //   setEspecie(evt)
    //   setContadorTreeIndex(i)
    //   setreeId(idTree)
    // } else if(idTree == treeId){
   
    //   console.log("entrou na funcao idLoc == locid")
    //   setEspecie('')
      
    //   setContadorTreeIndex(i)
    //   setreeId('')
    // }  


  };

  //------Remover elemento inicio
  // const removerElemento = (elemento) => {
  //   const novaColecao = colecao.filter((item) => item !== elemento);
  //   setColecao(novaColecao);
  // };
  //--------Remover elemento fim


  // console.log("a coleção esta: ", colecao)
  // console.log("o id coleção esta: ", trees)

//----------Filtro de busca inicio-------------------------
const handleCampo1KeyPress = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    setBusca(e.target.value)
    setLoading(true)
    setReloadCount(prevCount => prevCount + 1);
    console.log("os dados salvos na variavel: ", e.target.value)
  }
};

function onChangeTodos() {
  setBusca('')
  setLoading(true)
  setReloadCount(prevCount => prevCount + 1);
}
const onChangeFilterCategoria = (cate) => {
  setCategori(cate);
  setLoading(true)
  setReloadCount(prevCount => prevCount + 1);
}

//----------Filtro de busca fim----------------------------



  //====================================Selecionar arvores para plantar fim========================

const items = [];

{dados && dados.map((item, i = index) => (
  items.push(
    // <div className="item" data-value={i}>local-{i}: {item.name}</div>


  
      <Card key={i} className={Style.cardLocais}>
      <Card.Header className={Style.HeaderLocais}><h4>{item.name} </h4>
        <div className={Style.iconesAdmin}>
        </div>

      </Card.Header>
      <Card.Body>


        <div className={Style.divHeaderDetail}>
          {/* <Map lat={dataLocal.latitude} lng={dataLocal.longitude} /> */}
          <Map lat={latitude} lng={longitude} />
        </div>

      </Card.Body>
      <Card.Footer className={Style.textmuted}>

        <div className={Style.divIcones}><FaGlobeAmericas className={Style.Icon1} /> País: <h5 className={Style.nomeItem}>{item.country}</h5></div>
        <div className={Style.divIcones}><FaCity className={Style.Icon2} /> Cidade: <h5 className={Style.nomeItem}>{item.city}</h5></div>
        <div className={Style.divIcones}><FaTree className={Style.Icon3} /> Árvores plantadas: <h5 className={Style.nomeItem}>{item.plantedTrees}</h5></div>
        <div className={Style.divIcones}><FaSeedling className={Style.Icon4} /> Árvores a plantar: <h5 className={Style.nomeItem}>{item.treesToBePlanted}</h5></div>
        <div className={Style.divIcones}><FaRulerCombined className={Style.Icon5} /> Hectares: <h5 className={Style.nomeItem}>{item.hectare}</h5></div>
        <div className={Style.divBotaoPlant}>
          {locId == item._id &&
          <Button className={Style.botaoPlantar} onClick={(e) => selecionarLocal(item.name, item._id, i)}>Cancelar</Button>
          }
          {locId == '' &&
          <Button className={Style.botaoPlantar} onClick={(e) => selecionarLocal(item.name, item._id, i)}>Plantar aqui</Button>
          }

        </div>

      </Card.Footer>
    </Card>

  )
))}




  return (
    <>
      <Header></Header>
      <div className={Style.divFundoPlantar}>

        <div className={Style.Coluna1}>
        <div className={Style.divTituloPassos}><span className={Style.PassosEstilo}>1</span><h5 className={Style.PassosTitulo}>- Escolha um local de plantação</h5>
        </div>
{dados != '' &&
        <AliceCarousel 
        mouseTracking
        items={items}
        activeIndex={contadorIndex-1}
        // autoPlay={true}
        autoPlayInterval={3000}
        responsive={responsive}
        keyboardNavigation="ArrowLeft"
        controlsStrategy="responsive, default"
        />
}{dados == '' &&
<div className={Style.LegendaAviso}>
   <h4>Não existe nenhum lugar de plantação!</h4>
   <Button className={Style.botaoPlantar} href='/locaisPlantacao/cadastrarLocal'>Cadastrar Lugar</Button>
</div>

}








          <p/>
          <div className={Style.divTituloPassos}><span className={Style.PassosEstilo}>2</span><h5 className={Style.PassosTitulo}>- Escolha uma espécie a ser plantada</h5></div>
          {/* <div className={Style.divTituloPassos}><h5>Passo 2 - Escolha uma espécie a ser plantada</h5></div> */}
          <p/>


          <div className={Style.divItens1}>




          <Navbar className={Style.headerTabela}>
              <Container>

                <Form.Group className={Style.Busca}>
                  <Form.Control
                    type="text"
                    placeholder="Buscar por nome"
                    id="meuInput"
                    onKeyPress={handleCampo1KeyPress}
                  />

                </Form.Group>


                <Dropdown className={Style.DropMENU}>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic" className={Style.IconeMENU}>
                    <Nav.Link> <FaFilter className={Style.Icon} />Mostrar</Nav.Link>

                  </Dropdown.Toggle>

                  <Dropdown.Menu className={Style.OpDropNotifi}>
                    <Dropdown.Item onClick={() => onChangeTodos("todos")}>Todos</Dropdown.Item>
                    <hr />
                    {dadosCategoria.map((item, index) => (
                      <Dropdown.Item key={index} onClick={() => onChangeFilterCategoria(item.name)}>{item.name}</Dropdown.Item>
                    ))}

                    {/* <Dropdown.Item onClick={() => onChangeRoles("user")}>Usuário</Dropdown.Item>
                    <Dropdown.Item onClick={() => onChangeRoles("admin")}>Administrador</Dropdown.Item> */}

                  </Dropdown.Menu>
                </Dropdown>
                {/* <Dropdown >
                      <Dropdown.Toggle variant="primary" id="dropdown-basic" className={Style.IconeMENU}>
                      <Nav.Link><FaListOl className={Style.Icon} />Ordenar</Nav.Link>
                      
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => onChangeOrdem("recente")}>Mais recente</Dropdown.Item>
                        <Dropdown.Item onClick={() => onChangeOrdem("antigo")}>Mais antigo</Dropdown.Item>
                      </Dropdown.Menu>
                </Dropdown> */}

              </Container>
            </Navbar>

 

          <div className={Style.divCardArv}>
            {repos && repos.map((item, i = index) => (


              <Card className={Style.CardArvore} key={item._id}  >
                
                <Card.Header className={Style.HeaderCard0}>
                  <div className={Style.HeaderCard}>

                    {item.approved == true &&
                      <h3 className={Style.StatusCard} >
                        Aprovado
                      </h3>
                    }
                    {item.approved == false &&
                      <h3 className={Style.StatusCard2} >
                        Reprovado
                      </h3>
                    }

                    <div className={Style.opcoesCard}>
                      {/* <FaEdit className={Style.iconeCard}/> */}
                      {/* <CloseButton/> */}
                      {/* <Form.Check onClick={(e) => selecionarItem(item.name, e.target.checked, item._id)} /> */}
                      {/* <FaRegWindowClose className={Style.iconeCard} onClick={(e) => selecionarItem(item.name, item._id)}/> */}
                    </div>
                  </div>

                </Card.Header>

                <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                  {/* {selecionadoTree == 1 && 
                  <Card.Title>{item.name}</Card.Title>
                  }
                  {selecionadoTree == 0 && 
                  <Card.Title>{item.name} - Escolhido</Card.Title>
                  } */}
                  
                  {/* <Image src={ImgArvore} className={Style.imgArvore} alt=""/> */}
                  <Image src={ImgArvore} className={Style.imgArvore} alt="" />
                </Card.Body>
                <Card.Footer className="text-muted">
                  {/* <Form.Control type="number" placeholder="Quantidade" /> */}
                  <h5>Categoria: {item.category.name}</h5>
                  <h5>Compensação: {item.carbonOffset}kg/ano</h5>
                  <h5>toda vida util: {item.lifeTimeCarbon}</h5>
                  
                  
                  {treeId == item._id &&
                  <Button className={Style.botaoPlantar} onClick={(e) => selecionarEspecie(item.name, item._id)}>Cancelar espécie </Button>
              
                  }
                  {treeId == '' &&
                  <Button className={Style.botaoPlantar} onClick={(e) => selecionarEspecie(item.name, item._id, i)}>Selecionar espécie</Button>
                    // <Button className={Style.botaoPlantar} onClick={(e) => selecionarLocal(item.name, item._id, i)}>Plantar aqui</Button>
                  }

                </Card.Footer>
              </Card>

            ))}
            </div>
 
            <div className={Style.divPaginacao}>
              <Pagination>
                <Pagination.First onClick={() => paginacao(1)} />
                <Pagination.Prev onClick={() => paginaContador('sub')} />
                <Pagination.Item onClick={() => paginacao(pageQtd)} active>{pageQtd}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item onClick={() => paginacao(pageQtd + 2)} disabled={pageQtd >= 125}>{pageQtd + 2}</Pagination.Item>
                <Pagination.Item onClick={() => paginacao(pageQtd + 3)} disabled={pageQtd >= 125}>{pageQtd + 3}</Pagination.Item>
                <Pagination.Item onClick={() => paginacao(pageQtd + 4)} disabled={pageQtd >= 125}>{pageQtd + 4}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item onClick={() => paginacao(pageQtd + 20)} disabled={pageQtd >= 125}>{pageQtd + 20}</Pagination.Item>
                <Pagination.Next onClick={() => paginaContador('sum')} disabled={pageQtd >= 125} />
                <Pagination.Last onClick={() => paginacao(130)} disabled={pageQtd >= 125} />
              </Pagination>
            </div>

          </div>

          <p/>
          <div className={Style.divTituloPassos}><span className={Style.PassosEstilo}>3</span><h5 className={Style.PassosTitulo}>- Escolha a quantidade da espécie a ser plantada</h5></div>
          
          <p/>

{/*======================================= Inserir quantidade espécie para plantar Início============================== */}


<div className={Style.divCardsQuantidade}>
<Card style={{ width: '18rem' }} className={Style.CardQtd} >
      
      <Card.Body>
       
          <div className={Style.divIconeEstrela}>
          <FaStar className={Style.Estrelas}/>
        <FaStar className={Style.Estrelas}/>
          <FaLeaf className={Style.IconePlantaQtd}/>
        <FaStar className={Style.Estrelas}/>
        <FaStar className={Style.Estrelas}/>
          </div>
        
          <div className={Style.divLegQtd}>
            <h1 className={Style.legQtd}>1+</h1>
            Compensação anual: 1kg de CO2
            <p/>
            compensação em vida útil: 200kg de CO2

          </div>
          
          
        <div className={Style.divBotaoPlant}>
        
{qtdEspec == '' && 
<Button className={Style.botaoPlantar}onClick={() => selecionarQtd(1, 1)}>Selecionar </Button>
} {qtdEspec != ''  && idEspQtd==1 &&
<Button className={Style.botaoPlantar}onClick={() => selecionarQtd(1, 1)}>Cancelar </Button>
}

        </div>
        
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }} className={Style.CardQtd} >
      
      <Card.Body>
        
          <div className={Style.divIconeEstrela}>
          <FaStar className={Style.Estrelas}/>
        <FaStar className={Style.Estrelas}/>
          <FaLeaf className={Style.IconePlantaQtd}/>
        <FaStar className={Style.Estrelas}/>
        <FaStar className={Style.Estrelas}/>
          </div>
        
          <div className={Style.divLegQtd}>
            <h1 className={Style.legQtd}>3+</h1>
            Compensação anual: 5kg de CO2
            <p/>
            compensação em vida útil: 200kg de CO2
          </div>
          
          
          
       
        <div className={Style.divBotaoPlant}>
        {qtdEspec == '' && 
<Button className={Style.botaoPlantar}onClick={() => selecionarQtd(3, 2)}>Selecionar </Button>
} {qtdEspec != '' && idEspQtd==2 &&
<Button className={Style.botaoPlantar}onClick={() => selecionarQtd(3, 2)}>Cancelar </Button>
}

        </div>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className={Style.CardQtd} >
      
      <Card.Body>
        
       
          <div className={Style.divIconeEstrela}>
          <FaStar className={Style.Estrelas}/>
        <FaStar className={Style.Estrelas}/>
          <FaLeaf className={Style.IconePlantaQtd}/>
        <FaStar className={Style.Estrelas}/>
        <FaStar className={Style.Estrelas}/>
          </div>
        
          <div className={Style.divLegQtd}>
            <h1 className={Style.legQtd}>5+</h1>
            Compensação anual: 5kg de CO2
            <p/>
            compensação em vida útil: 200kg de CO2
          </div>
          
          
          
      
        <div className={Style.divBotaoPlant}>
        {qtdEspec == '' && 
<Button className={Style.botaoPlantar}onClick={() => selecionarQtd(5, 3)}>Selecionar </Button>
} {qtdEspec != ''  && idEspQtd==3 &&
<Button className={Style.botaoPlantar}onClick={() => selecionarQtd(5, 3)}>Cancelar </Button>
}
        </div>
        
      </Card.Body>
    </Card>

</div>

{/*======================================= Inserir quantidade espécie para plantar Fim============================== */}



<div className={Style.EspecQtd}>
<h4>Especificar quantidade</h4>
    <FloatingLabel
        controlId="floatingInput"
        label="Quantidade"
        className="mb-3"
      >
        <Form.Control type="number"  className={Style.caixaQtd}/>
      </FloatingLabel>

</div>

<p/>


        </div>
        {locId != '' &&

        
        <div className={Style.Coluna2}>
          
          <div className={Style.divDetailCompra}>
          <h4 className={Style.nomeH4}>Pronto para plantar?</h4>
            <div className={Style.divDetailhesLados}>
              {/* <div className={Style.legendaladoA}>
                                <h5 className={Style.legendah5}><b>Local de plantação</b></h5>
                                <h5 className={Style.legendah5}><b>Espécie</b></h5>
                                <h5 className={Style.legendah5}><b>Árvores para plantar</b></h5>
                                <h5 className={Style.legendah5}><b>Compensação total de CO2</b></h5>
                                <h5 className={Style.legendah5}><b>Valor total</b></h5>
                                
                            </div>
                            <div className={Style.legendaladoB}>
                                <h5 className={Style.legendah5}>Alberton - Gold Coast, Austrália </h5>
                                <h5 className={Style.legendah5}>Tectona grandis</h5>
                                <h5 className={Style.legendah5}>10</h5>
                                <h5 className={Style.legendah5}>1,500 Kg</h5>
                                <h5 className={Style.legendah5}>40€</h5>
                            </div> */}
            </div>

            <h5 className={Style.legendaH5}><b>Local de plantação</b> <span className={Style.legendaH5}>{local}</span></h5>
            <h5 className={Style.legendaH5}><b>Espécie</b><span className={Style.legendaH5}>{especie}</span></h5>
            <h5 className={Style.legendaH5}><b>Quantidade a plantar</b><span className={Style.legendaH5}>{qtdEspec}</span></h5>
            <h5 className={Style.legendaH5}><b>Compensação total de CO2</b><span className={Style.legendaH5}>1,500 Kg</span></h5>
            <h5 className={Style.legendaH5}><b>Valor total</b><span className={Style.legendaH5}>40€</span></h5>


            <div className={Style.botaoContinuar}>
              Plantar agora
            </div>
          </div>

        </div>
 }
      </div>
   
      <Foot />




      {/* ==============================================Alertas ==================================================== */}
      {/* {success &&
        <Alert key="1232" variant="success" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
          <Spinner animation="grow" variant="success" /> Salvo com sucesso! | <Alert.Link href="/locaisPlantacao/listaLocais">Ver lista de locais</Alert.Link>
        </Alert>
      } */}

      {loading &&
        <Alert key="12345" variant="primary" className={Style.botaoCarregamento}>
          <Spinner animation="border" variant="primary" /> Aguarde, carregando...
        </Alert>
      }

      {aviso &&
        <Alert key="123456" variant="primary" className={Style.botaoCarregamento} dismissible>
          <Spinner animation="border" variant="warning" /> O nome não pode ser vazio!
        </Alert>
      }

      {errorInt &&
        <Alert key="1234" variant="danger" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
          <Spinner animation="grow" variant="danger" /> Ops! algo deu errado com o servidor, Obs:  {resposta}
        </Alert>
      }

    </>
  )
}