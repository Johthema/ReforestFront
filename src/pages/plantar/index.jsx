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
import { FaEdit, FaGlobeAmericas, FaCity, FaTree, FaSeedling, FaRulerCombined, FaTrashAlt } from "react-icons/fa";
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Map from "../../components/mapa/index";
import ImgArvore from '../../assets/images/arvore_1.jpg';
import Pagination from 'react-bootstrap/Pagination';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';


const URL_API_TREE = process.env.NEXT_PUBLIC_API_URL + "tree";
const URL_API = process.env.NEXT_PUBLIC_API_URL + "plantingPlace";

export default function Plantar() {
  //Variaveis internos
  const [loading, setLoading] = useState('')
  const [aviso, setAviso] = useState(false);
  const [errorInt, setErroInterno] = useState(false);
  const [success, setSuccess] = useState(false);

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
  const [pageLimit, setPageLimit] = useState('8');
  const [trees, setTrees] = useState([]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {

    const fetchRepos = async () => {
      try {
        setLoading(true)
        //console.log("o tipo de arvore é: ",tipo)

        const response = await fetch(URL_API)
        // const dados = await response.json();
        const dados = await response.json()
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
  const [colecao, setColecao] = useState([]);


  const selecionarItem = (evt, event, idTree) => {
    console.log("o event check: ", event)

    if (event == false) {
      removerElemento(evt)
    } else if (event == true) {
      // Crie o novo elemento (pode ser qualquer valor ou objeto)
      const novoElemento = `Elemento ${colecao.length + 1}`;

      const novoElementoTree = `Elemento ${trees.length + 1}`;
      // Atualize o estado da coleção adicionando o novo elemento à última posição
      setColecao([...colecao, evt]);
      setTrees([...trees, { _id: idTree }]);
      // return colecaoTree

    }

  };

  //------Remover elemento inicio
  const removerElemento = (elemento) => {
    const novaColecao = colecao.filter((item) => item !== elemento);
    setColecao(novaColecao);
  };
  //--------Remover elemento fim


  console.log("a coleção esta: ", colecao)
  console.log("o id coleção esta: ", trees)


  //====================================Selecionar arvores para plantar fim========================



  return (
    <>
      <Header></Header>
      <div className={Style.divFundoPlantar}>

        <div className={Style.Coluna1}>


          <Carousel data-bs-theme="dark" indicators={""} >

            {/* {dados && dados.map((item, i = index) => (

            <Carousel.Item key={i} >

            <Card className={Style.Card} key={item._id}>
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
          
            <CloseButton/>
           
            </div>
            </div>

            </Card.Header>

            <Card.Body>
            <Card.Title>{item.name}</Card.Title>
           
            </Card.Body>
            <Card.Footer className="text-muted">
            <Form.Control type="number" placeholder="Quantidade" />
            </Card.Footer>
            </Card>
            </Carousel.Item>

            ))} */}


            {dados && dados.map((item, i = index) => (
              <Carousel.Item key={i} >
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
                  <Card.Footer className="text-muted">

                    <div className={Style.divIcones}><FaGlobeAmericas className={Style.Icon1} /> País: <h5 className={Style.nomeItem}>{item.country}</h5></div>
                    <div className={Style.divIcones}><FaCity className={Style.Icon2} /> Cidade: <h5 className={Style.nomeItem}>{item.city}</h5></div>
                    <div className={Style.divIcones}><FaTree className={Style.Icon3} /> Árvores plantadas: <h5 className={Style.nomeItem}>{item.plantedTrees}</h5></div>
                    <div className={Style.divIcones}><FaSeedling className={Style.Icon4} /> Árvores a plantar: <h5 className={Style.nomeItem}>{item.treesToBePlanted}</h5></div>
                    <div className={Style.divIcones}><FaRulerCombined className={Style.Icon5} /> Hectares: <h5 className={Style.nomeItem}>{item.hectare}</h5></div>
                    <div className={Style.divBotaoPlant}>
                      <Button className={Style.botaoPlantar}>Plantar aqui</Button>

                    </div>

                  </Card.Footer>
                </Card>
              </Carousel.Item>

            ))}


          </Carousel>

          <hr />


          <div className={Style.divItens1}>


            {repos.map((item, index) => (

              <Card className={Style.CardArvore} key={item._id} >
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
                      {/* <FaRegWindowClose className={Style.iconeCard}/> */}
                    </div>
                  </div>

                </Card.Header>

                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  {/* <Image src={ImgArvore} className={Style.imgArvore} alt=""/> */}
                  <Image src={ImgArvore} className={Style.imgArvore} alt="" />
                </Card.Body>
                <Card.Footer className="text-muted">
                  {/* <Form.Control type="number" placeholder="Quantidade" /> */}
                  <h5>Categoria: {item.category.name}</h5>
                </Card.Footer>
              </Card>

            ))}




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






        </div>
        <div className={Style.Coluna2}>
          <h4 className={Style.nomeH4}>Revise seu investimento</h4>
          <div className={Style.divDetailCompra}>
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

            <h5 className={Style.legendaH5}><b>Local de plantação</b> <span className={Style.legendaH5}>Alberton -Austrália</span></h5>
            <h5 className={Style.legendaH5}><b>Espécie</b><span className={Style.legendaH5}>Tectona grandis</span></h5>
            <h5 className={Style.legendaH5}><b>Árvores para plantar</b><span className={Style.legendaH5}>10</span></h5>
            <h5 className={Style.legendaH5}><b>Compensação total de CO2</b><span className={Style.legendaH5}>1,500 Kg</span></h5>
            <h5 className={Style.legendaH5}><b>Valor total</b><span className={Style.legendaH5}>40€</span></h5>


            <div className={Style.botaoContinuar}>
              Continuar compra
            </div>
          </div>

        </div>

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