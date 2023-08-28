import Header from '../../../components/header/index';
import Arvores from '../../../components/cards/cardArvore/index';
import Style from './listalocais.module.css';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Logotipo from '../../../assets/images/fundofloresta4.jpg';
import Footer from '../../../components/footer/index';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaGlobeAmericas, FaCity, FaTree, FaSeedling, FaRulerCombined,
   FaEdit, FaTrashAlt, FaRedoAlt, FaFilter, FaListOl, FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa";
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CardLocalEdit from '../cadastrarLocal/cardCadLocalEdit/index';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Especie from '../../../components/cards/cardArvore/index'

 
export default function ListarLocal(){
    const URL_API = process.env.NEXT_PUBLIC_API_URL+"plantingPlace";

    const [reloadCount, setReloadCount] = useState(0);
    const [dataCat, setData] = useState([]);
    const [name, setNome] = useState('');
    const [id, setId] = useState('');
    const [idPapel, setIdPapel] = useState('');
    const [ordenar, setOrdenar] = useState('recente')
    const [loading, setLoading] = useState(false);
    const [aviso, setAviso] = useState(false);
    const [errorInt, setErroInterno] = useState(false);
    const [success, setSuccess] = useState(false);
    const [successDell, setSuccessDell] = useState(false);
    const [initialRepos, setInitialRepo] = useState([]);
    const [repos, setRepo] = useState([]);
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [show2, setShow2] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [dataLocal, setDataLocal] = useState('');

    const handleClose2 = () => setShow2(false);

    const handleClose = () =>{
      setShow(false)
      setShowEdit(false)
      setShowDetail(false)
    } ;

    const [nome, setPapelNome] = useState('');


  //Primeiro carregamengto para saber se esta tudo certo
  // const fecthAllData = async () => {
  //   try {

  //     //setLoading(true)
  //     const response = await fetch(URL_API+"?order="+ordenar) //por padrão o fetch ja utiliza o GET
  //     const dataCat = await response.json()

  //     if (!dataCat)
  //       throw 'problema na requisição' //Aqui será tratado o erro de requisição. Porém é melhor tratar pelo status(200, 400, 500)
  //     setData(dataCat)

  //     setNome(dataCat.name)
  //     console.log("Lista de locais: ",dataCat)


  //     setInitialRepo(dataCat);
  //     setRepo(dataCat);
  //     //Iniciando a estrutura da requisição

  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //   //   setLoading(false)
  //   }

  // }

  // useEffect(() => {
  //   fecthAllData();

  // }, [reloadCount]);
  useEffect(() => {
    
    const fetchRepos = async () => {
      try {
        setLoading(true)
          const response = await fetch(URL_API+"?order="+ordenar)
          const dados = await response.json();
        setInitialRepo(dados);
        setRepo(dados);
        setLoading(false)

      } catch (error) {
        console.log(error)
        setErroInterno(true)
      }
    }
    fetchRepos()
  }, [reloadCount]);

  const handleChange = ({ target }) => {
    if (!target.value) {
      setRepo(initialRepos)
      return;
    }

    const filterRepos = repos.filter(({ name }) => name.includes(target.value));
    setRepo(filterRepos)
  }

//------------------------------DELETAR LOCAL INICIO
const idUsuario = (event, nome) =>{
   
  console.log("O id do usuario é: ", event)
  setId(event)
  setPapelNome(nome)
  setShow2(true)
}

const DeleteLocal = async (evt) => {
    
  evt.preventDefault()
  //console.log("deletando o papel de id: ",id)
  try{
  const response = await fetch(URL_API+"/"+id,{
    method: 'DELETE',
    headers:{
      Accept: 'application/json',
      'Content-type': 'application/json'
    },

    body: JSON.stringify({ id }),
    
  })
  
  const json = await response.json()


  handleClose2()//Fechar a janela modal
  setSuccessDell(true) // Aparecer o alert de sucesso 

  setTimeout(() => { //Uso do setTimeout para fechar o alert dos dados
    setSuccessDell(false);
  }, 3500);
  setReloadCount(prevCount => prevCount + 1);
  //window.location.reload();

} catch(err){
  console.log(err)
}

return false
}

//---------------------------DELETAR LUGAR FIM

//---------------------------EDITAR LOCAL INICIO
const [dadosEditar, setDadosEditar] = useState([])

const handleShowEdit = (idUser, irrigacao, possuiViveiro) =>{
console.log("os dados passados: ",idUser, irrigacao, possuiViveiro )
  setShowEdit(true);
  setDadosEditar([idUser, irrigacao, possuiViveiro]);
  
}




const fecthAllData = async (idDatail) => {
  try {

    setLoading(true)
    const response = await fetch(URL_API+"/"+idDatail) //por padrão o fetch ja utiliza o GET
    const dadosLocal = await response.json()

    if (!dadosLocal)
      throw 'problema na requisição' //Aqui será tratado o erro de requisição. Porém é melhor tratar pelo status(200, 400, 500)
    setDataLocal(dadosLocal)
    console.log("Dados trazidos local: ", dadosLocal )

  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }

}



const handleShowDetail = (idDetail) => {

  fecthAllData(idDetail);
  console.log("o id para delatlhar: ", idDetail)

  setShowDetail(true);
}

console.log("no vetor: ", dadosEditar)

const onChangeOrdem=(ordem) =>{
  setOrdenar(ordem)
  setLoading(true)
  setTimeout(() => { //Uso do setTimeout para fechar o alert dos dados
    setLoading(false)
  }, 1000);
  setReloadCount(prevCount => prevCount + 1);
}


//---------------------------EDITAR LOCAL FIM

 
    return(
      <>
       <Header></Header>
      
        <div className={Style.divFubdoLista}>
        <Breadcrumb className={Style.migalhas}>
        <Breadcrumb.Item href="/home">Home  </Breadcrumb.Item>
        
        <Breadcrumb.Item active>Lista de Locais.</Breadcrumb.Item>
        </Breadcrumb>
            
            <div className={Style.divtitulo}>
            <h1>
                Lista de locais de plantação em atividade
            </h1>
            </div>


           
            <Navbar className={Style.headerTabela}>
          <Container>
            <InputGroup className={Style.Busca}>
              <Form.Control
                placeholder="Buscar por nome"
                aria-label="Buscar por nome"
                aria-describedby="basic-addon2"
                onChange={handleChange}
              />
          
            </InputGroup>

            <Dropdown className={Style.DropMENU}>
              {/* <Dropdown.Toggle variant="primary" id="dropdown-basic" className={Style.IconeMENU}>
              <Nav.Link> <FaFilter className={Style.Icon} />Mostrar</Nav.Link>
             
              </Dropdown.Toggle> */}

              {/* <Dropdown.Menu  className={Style.OpDropNotifi}>
              <Dropdown.Item onClick={() => onChangeRoles("todos")}>Todos</Dropdown.Item>
                <Dropdown.Item onClick={() => onChangeRoles("user")}>Usuário</Dropdown.Item>
                <Dropdown.Item onClick={() => onChangeRoles("admin")}>Administrador</Dropdown.Item>


              </Dropdown.Menu> */}
            </Dropdown>
            <Dropdown >
                  <Dropdown.Toggle variant="primary" id="dropdown-basic" className={Style.IconeMENU}>
                  <Nav.Link><FaListOl className={Style.Icon} />Ordenar</Nav.Link>
                  
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => onChangeOrdem("recente")}>Antigo para o recente</Dropdown.Item>
                    <Dropdown.Item onClick={() => onChangeOrdem("antigo")}>Recente para o antigo</Dropdown.Item>
                  </Dropdown.Menu>
             </Dropdown>

            {/* <Dropdown className={Style.DropMENU}>
              <Dropdown.Toggle className={Style.IconeMENU}>
                <Nav.Link><FaFilter className={Style.Icon} />Filtro</Nav.Link>
              </Dropdown.Toggle>

              <Dropdown.Menu className={Style.OpDropNotifi} onClick={(e) =>onChangeRoles(e.target.value) }>
                <Dropdown.Item value="todos" >Todos</Dropdown.Item>
                <Dropdown.Item value="admin">Administrador</Dropdown.Item>
                <Dropdown.Item value="user">Usuario</Dropdown.Item>

             
              </Dropdown.Menu>

            </Dropdown> */}
          </Container>
        </Navbar>


           <div className={Style.divLocais}>

           

           {repos && repos.map((item, i = index) => (

          <Card key={i} className={Style.cardLocais} onClick={()=>handleShowDetail(item._id)}>
                        <Card.Header className={Style.HeaderLocais}><h4>{item.name} </h4>
                         <div className={Style.iconesAdmin}>
                          <FaEdit className={Style.iconesAdminIcon1} onClick={()=> handleShowEdit(item._id, item.irrigation, item.nursery)}/>
                          <FaTrashAlt className={Style.iconesAdminIcon2}  onClick={() => idUsuario(item._id, item.name)}/>
                          </div>
                          
                          
                         
                         </Card.Header>
                        <Card.Body>
                          {/* <Card.Title>Special title treatment</Card.Title> */}
                          <Image src={Logotipo} className={Style.imagemLocal} alt="" />
                          <Card.Text className={Style.DescricaoLocais}>
                            <div className={Style.divDescricao}>
                              <h5>{item.description}</h5>
                            </div>
                          
                          </Card.Text>
                          {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        <Card.Footer className="text-muted">
                          {/* <div className={Style.footerCard}>
                           
                          </div> */}
                          <div className={Style.divIcones}><FaGlobeAmericas className={Style.Icon1}/> País: <h5 className={Style.nomeItem}>{item.country}</h5></div>
                          <div className={Style.divIcones}><FaCity className={Style.Icon2}/> Cidade: <h5 className={Style.nomeItem}>{item.city}</h5></div>
                          <div className={Style.divIcones}><FaTree className={Style.Icon3}/> Árvores plantadas: <h5 className={Style.nomeItem}>{item.plantedTrees}</h5></div>
                          <div className={Style.divIcones}><FaSeedling className={Style.Icon4}/> Árvores a plantar: <h5 className={Style.nomeItem}>{item.treesToBePlanted}</h5></div>
                          <div className={Style.divIcones}><FaRulerCombined className={Style.Icon5}/> Hectares: <h5 className={Style.nomeItem}>{item.hectare}</h5></div>
                          <div className={Style.divBotaoPlant}>
                          <Button className={Style.botaoPlantar} href='/plantar'>Plantar aqui</Button>
                          
                          </div>
                          
                          </Card.Footer>
          </Card>

            ))}

           </div>
           
           <Footer/>

           


           
{/* ==============Modal de deletar local============== */}
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <h2 className={Style.tituloDeletar}>Deletar Local!</h2>
            <h5 className={Style.tituloDelet}>{nome}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <h4><FaRedoAlt /> Por conveniência, poderá restaurá-lo mais tarde. </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={DeleteLocal} >
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>
      {/* ----------------------Editar -------------------------------------*/}
      <Offcanvas show={showEdit} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Editar Local</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
     
        <CardLocalEdit handleShowEdit={dadosEditar} /> 
        </Offcanvas.Body>
      </Offcanvas>

      {/* ----------------------Detalhes -------------------------------------*/}
      <Offcanvas show={showDetail} onHide={handleClose} placement={'bottom'} className={Style.modalRodape}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Detalhes</Offcanvas.Title>
         
        </Offcanvas.Header>
        <div className={Style.divHeaderDetail}>
        </div>
        {dataLocal.approved == true &&
          <div className={Style.divBottomHeaderDetail}>
          <h4>Aprovado</h4> 
        </div>
        }
        
        {dataLocal.approved == false &&
          <div className={Style.divBottomHeaderDetail2}>
          <h4>Em análise</h4> 
        </div>
        }
        
        <div>
          <h4  className={Style.nomeLocal}>{dataLocal.name} <FaMapMarkerAlt className={Style.inconLocal}/></h4> 
        </div>
        <Offcanvas.Body>
          <div>
            <div className={Style.divDetalhes}>
                <h5 >Detalhes: </h5>
                <h5 className={Style.itemDetalhe}>Hectare: {dataLocal.hectare}km</h5>
                {dataLocal.irrigation == true &&
                  <h5 className={Style.itemDetalhe}>Possui irrigação</h5>
                }
                {dataLocal.irrigation == false &&
                  <h5 className={Style.itemDetalhe}>Não possui irrigação</h5>
                }
                {dataLocal.nursery == true &&
                  <h5 className={Style.itemDetalhe}>Possui viveiro</h5>
                }
                {dataLocal.nursery == false &&
                  <h5 className={Style.itemDetalhe}>Não possui viveiro</h5>
                }
                
            </div>
            <div className={Style.divDetalhes}>
                <h5>Quantidade: </h5>
                {/* <h5 className={Style.itemDetalhe}>Total de árvore: 39</h5> */}
                <h5 className={Style.itemDetalhe}>Árvores plantadas: {dataLocal.plantedTrees} </h5>
                <h5 className={Style.itemDetalhe}>Árvores para plantar: {dataLocal.treesToBePlanted}</h5>
                <h5 className={Style.itemDetalhe}>Árvores derrubadas: {dataLocal.falledTrees}</h5>
            </div>
            
            
            <h5>Descrição </h5>
            <div className={Style.divDescricaoDetail}>
              <p>{dataLocal.description}</p>
            </div>
           
            
          </div>
          <hr/>
            <h5>Espécies</h5>
            <hr/>
            <Especie/>
     
        {/* <CardLocalEdit handleShowEdit={dadosEditar} />  */}
        </Offcanvas.Body>

      </Offcanvas>


      {/* ----------------------FeedBack do sistema -------------------------------------*/}
      {success &&
          <Alert key="1232" variant="success" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
            <Spinner animation="grow" variant="success" /> Salvo com sucesso!
          </Alert>
        }
        {successDell &&
          <Alert key="1232" variant="success" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
            <Spinner animation="grow" variant="success" /> Deletado com sucesso!
          </Alert>
        }
 
        {loading &&
          <Alert key="12345" variant="primary" className={Style.botaoCarregamento}>
            <Spinner animation="border" variant="primary" /> Aguarde, carregando...
          </Alert>
        }

        {/* {aviso &&
          <Alert key="123456" variant="primary" className={Style.botaoCarregamento}  dismissible>
            <Spinner animation="border" variant="warning" /> O nome não pode ser vazio!
          </Alert>
        } */}

        {errorInt &&
          <Alert key="1234" variant="danger" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
            <Spinner animation="grow" variant="danger" /> Ops! algo deu errado com o servidor, tente novamente.
          </Alert>
        }



        </div>
        </>
    )
}