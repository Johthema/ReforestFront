import Header from '../../../components/header/index';
import Arvores from '../../../components/cards/cardArvore/index';
import { useState, useEffect } from 'react';
import Style from './listaarvores.module.css';
import Table from 'react-bootstrap/Table';
import { FaEdit, FaTrashAlt, FaSearch, FaFilter, FaRedoAlt, FaListOl } from 'react-icons/fa';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CardArvoreEdit from '../../../components/cards/cardCadArvore/cardArvoreEdit/index';
import Footer from '../../../components/footer/index'
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import ImgArvore from '../../../assets/images/arvore_1.jpg';

const URL_API = process.env.NEXT_PUBLIC_API_URL+"tree";


export default function ListarArvore() {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [errorInt, setErroInterno] = useState(false);

  //variáveis de filtros
  const [initialRepos, setInitialRepo] = useState([]);
  const [repos, setRepo] = useState([]);
  const [tipo, setTipo] = useState('todos')
  const [ordenar, setOrdenar] = useState('recente')
  const [pageQtd, setPageQtd] = useState(1);
  const [pageLimit, setPageLimit] = useState('12');

  //variaveis do modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseEdit = () => setShowEdit(false);

  //variaveis deletar usuario
  const [success, setSuccess] = useState(false)
  const [id, setId] = useState('');
  const [nome, setUsuarioNome] = useState('');
  const [reloadCount, setReloadCount] = useState(0);
  //Variáveis editar usuario
  const [showEdit, setShowEdit] = useState(false);
  const [dadosEditar, setDadosEditar] = useState([])

  const handleShowEdit = (idUser, categ) =>{
    console.log("o id a passar: ", idUser)
    console.log("a categoria a passar: ", categ)
    setShowEdit(true);
    setDadosEditar([idUser, categ]);
    
  }

  //-----------------------------------------------------------------------Inicio Função de filtros
  useEffect(() => {
    
    const fetchRepos = async () => {
      try {
        setLoading(true)
        console.log("o tipo de arvore é: ",tipo)
        if(tipo!='todos'){
          // const response = await fetch(URL_API+"?order="+ordenar+"&role="+tipo)
          const response = await fetch(URL_API + "?page=" + pageQtd + "&limit=" + pageLimit + "&order="+ordenar)
          const dados = await response.json();
        setInitialRepo(dados);
        setRepo(dados);
        setLoading(false)
        } else if (tipo=='todos'){
          // const response = await fetch(URL_API)
          const response = await fetch(URL_API + "?page=" + pageQtd + "&limit=" + pageLimit + "&order="+ordenar)
          const dados = await response.json();
        setInitialRepo(dados);
        setRepo(dados);
        setLoading(false)
        } 

      } catch (error) {
        console.log(error)
        setErroInterno(true)
      }
    }
    fetchRepos()
  }, [reloadCount]);

  const handleChange = ({ target }) => {
    // if (!target.value) {
    //   setRepo(initialRepos)
    //   return;
    // }

    const filterRepos = repos.filter(({ name }) => name.includes(target.value));
    setRepo(filterRepos)
  }
  //----------------------------------------------------------------------------Fim Função de filtros

  //----------------------------------------------------------------------------Inicio função deletar árvore
  const idArvore = (event, nome) =>{
   
    console.log("O id da arvore é: ", event)
    setId(event)
    setUsuarioNome(nome)
    setShow(true)
  }

  const DeleteUser = async (evt) => {
    
    evt.preventDefault()
    console.log("deletando a arvore de id: ",id)
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


    handleClose()//Fechar a janela modal
    setSuccess(true) // Aparecer o alert de sucesso 

    setTimeout(() => { //Uso do setTimeout para fechar o alert dos dados
      setSuccess(false);
    }, 2000);
    setReloadCount(prevCount => prevCount + 1);
    //window.location.reload();

  } catch(err){
    console.log(err)
  }
  
  return false
  }
  //----------------------------------------------------------------------------Fim função deletar árvore

//----------------------------------Filtros --------------------------------
  const onChangeRoles=(role) =>{
    setTipo(role)
    setLoading(true)
    setReloadCount(prevCount => prevCount + 1);
  }

  const onChangeOrdem=(ordem) =>{
    setOrdenar(ordem)
    setLoading(true)
    setReloadCount(prevCount => prevCount + 1);
  }
  
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
 
//===========================================[[[RENDERIZAÇÃO DA PAGINA]]]===================================================
  return (
    <>
    <div className={Style.divFundoLista}>
      <Header></Header>
      <Breadcrumb className={Style.migalhas}>
        <Breadcrumb.Item href="/home">Home  </Breadcrumb.Item>
        
        <Breadcrumb.Item active>Lista de árvores.</Breadcrumb.Item>
      </Breadcrumb>
      {/* <Arvores/>
    <hr/> */}

      {/* Primeiro carregamento será o loadingo para saber se existe algo em data */}

      <div className={Style.divFundo}>

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
              <Dropdown.Toggle variant="primary" id="dropdown-basic" className={Style.IconeMENU}>
              <Nav.Link> <FaFilter className={Style.Icon} />Mostrar</Nav.Link>

              </Dropdown.Toggle>

              <Dropdown.Menu  className={Style.OpDropNotifi}>
              <Dropdown.Item onClick={() => onChangeRoles("todos")}>Todos</Dropdown.Item>
                {/* <Dropdown.Item onClick={() => onChangeRoles("user")}>Usuário</Dropdown.Item>
                <Dropdown.Item onClick={() => onChangeRoles("admin")}>Administrador</Dropdown.Item> */}

              </Dropdown.Menu>
            </Dropdown>
            <Dropdown >
                  <Dropdown.Toggle variant="primary" id="dropdown-basic" className={Style.IconeMENU}>
                  <Nav.Link><FaListOl className={Style.Icon} />Ordenar</Nav.Link>
                  
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => onChangeOrdem("recente")}>Mais recente</Dropdown.Item>
                    <Dropdown.Item onClick={() => onChangeOrdem("antigo")}>Mais antigo</Dropdown.Item>
                  </Dropdown.Menu>
             </Dropdown>

          </Container>
        </Navbar>
 
        {/* <Table striped bordered hover className={Style.Tabela}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Nome Científico</th>
              <th>Preço</th>
              <th>Criado em</th>
             
              <th></th>
              <th></th>
            </tr>

          </thead>

          <tbody>

            {repos.map((repo,index) => (

              <tr className={Style.trUsuario} key={index}>
                <td className={Style.tdUsuario}><h2 key={repo._id} className={Style.FontUsuario}> {repo.name}</h2></td>
                <td className={Style.tdUsuario}><h2 key={repo._id} className={Style.FontUsuario}> {repo.cientificName}</h2></td>
                <td className={Style.tdUsuario}><h2 key={repo._id} className={Style.FontUsuario}> {repo.price}</h2></td>
                <td className={Style.tdUsuario}><h2 key={repo._id} className={Style.FontUsuario}> {repo.createdAt}</h2></td>

                <td className={Style.Editar} value={repo._id} onClick={() => handleShowEdit(repo._id, repo.category.name)}><FaEdit className={Style.icoEditar} /></td>
                <td className={Style.Deletar} value={repo._id} onClick={() => idArvore(repo._id, repo.name)} ><FaTrashAlt className={Style.icoDeletar} /></td>
              </tr>

            ))}


          </tbody>
        </Table> */}

<div className={Style.divCardArv}>
            {repos && repos.map((item, i = index) => (


              <Card className={Style.CardArvore} key={item._id} value={repos._id} onClick={() => handleShowEdit(item._id, item.category.name)} >
                
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
                </Card.Footer>
              </Card>

            ))}
            </div>



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

      {loading && !data &&
        <Alert key="1231" variant="primary" className={Style.botaoCarregamento}>
          <Spinner animation="border" variant="primary" /> Carregando informações..
        </Alert>
      }

      {success &&
        <Alert key="1232" variant="primary" className={Style.botaoCarregamento}>
          <Spinner animation="border" variant="primary" /> Deletado com sucesso..
        </Alert>
      }

      {errorInt &&
        <Alert key="1234" variant="danger" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
          <Spinner animation="grow" variant="danger" /> Ops! algo deu errado com o servidor, tente novamente.
        </Alert>
      }


      {/* Modal de exclusão de usuario */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <h2 className={Style.tituloDeletar}>Deletar árvore!</h2>
            <h5 className={Style.tituloDelet}>{nome}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <h4><FaRedoAlt /> Por conveniência, poderá restaurá-lo mais tarde. </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={DeleteUser} >
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Formulario para edição do usuario selecionado */}
      <Offcanvas show={showEdit} onHide={handleCloseEdit}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Editar árvore</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
     
        <CardArvoreEdit handleShowEdit={dadosEditar} /> 
        </Offcanvas.Body>
      </Offcanvas>
      <Footer/>
    </div>
    </>
  )

}