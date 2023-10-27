import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import {useState, useEffect} from 'react'
import Style from './restauracao.module.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import ImgUser from '../../assets/images/fotoperfil/fotoper.jpg';
import {FaMapMarkerAlt, FaTree, FaUserClock, FaRulerCombined, FaHistorys, FaShapes,
    FaTrashRestoreAlt, FaTrashAlt, FaBoxes, FaUserShield,
    FaEdit, FaSearch, FaFilter, FaRedoAlt, FaListOl} from "react-icons/fa";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown'; 
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';

const URL_API = process.env.NEXT_PUBLIC_API_URL+"user";

export default function Hist_restauracao(){
    //variaveis do sistema
    const [loading, setLoading] = useState(false);
    const [aviso, setAviso] = useState(false);
    const [errorInt, setErroInterno] = useState(false);
    const [success, setSuccess] = useState(false);

        //Variaveis de filtro
        const [pageQtd, setPageQtd] = useState(1);
        const [pageLimit, setPageLimit] = useState('9');

        //variáveis de filtros
        const [initialRepos, setInitialRepo] = useState([]);
        const [repos, setRepo] = useState([]);
        const [tipo, setTipo] = useState('')
        const [ordenar, setOrdenar] = useState('recente')
        const [nome, setUsuarioNome] = useState('');
        const [reloadCount, setReloadCount] = useState(0);
        const [busca, setBusca] = useState('')
        const [buscaTexto, setBuscaTexto] = useState('')

        const [opcaoElemento, setOpcaoElemento] = useState('1');

        //Variaveis restauração
        const [idUsuario, setIdUsuario] = useState('');
        //Variaveis de modal
        const [showPermissao, setShowPermissao] = useState(false);
        const [dadosPermissao, setDadosPermissao] = useState([]);
        const [showEdit, setShowEdit] = useState(false);

        const [caminho, setCaminho] = useState('/usuarios/listaUsuario');
        //Função do modal
        const handleClose = () => setShowPermissao(false);
       

        const handleShowEdit = (idElemento, nome) =>{
            // console.log("o id a passar: ", idUser)
            // console.log("a categoria a passar: ", categ)
            setIdUsuario(idElemento)
            setShowPermissao(true);
            setUsuarioNome(nome)
            // setDadosEditar([idElemento, categ]);
            
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


      useEffect(() => {
    
        const fetchRepos = async () => {
          try {
            setLoading(true)
            // console.log("o tipo de usuario é: ",tipo)
            const response = await fetch(URL_API+"?page="+pageQtd+"&limit="+pageLimit+"&search="+busca+"&role="+tipo+"&isDeleted=true")
            const dados = await response.json();
        //   setInitialRepo(dados);
          setRepo(dados);
       setLoading(false)
         
          } catch (error) {
            console.log(error)
            setErroInterno(true)
          }
        }
        fetchRepos()
      }, [reloadCount]);


function opcao(elemento){
    setOpcaoElemento(elemento);
    if(opcaoElemento == 1){
        setCaminho('/usuarios/listaUsuario')

    } else if(opcaoElemento == 2){
        setCaminho('/arvores/listarArvores')

    } else 
    if(opcaoElemento == 3){
        setCaminho('/locaisPlantacao/listaLocais')

    } else 
    if(opcaoElemento == 4){
        setCaminho('/configuracao')

    } else 
    if(opcaoElemento == 5){
        setCaminho('/configuracao')

    }
}

// function Restaurar(){

// }

const [show, setShow] = useState(true);

const Restaurar = async (evt) => {
    
    // evt.preventDefault()
    try{
    setLoading(true)
   
        const response = await fetch(URL_API+"/"+evt,{
          method: 'PATCH',
          headers:{
            Accept: 'application/json',
            'Content-type': 'application/json'
          },
    
        //   body: JSON.stringify({ name, surname, email, phone, password, person }),
        })
        setLoading(false)
        setSuccess(true)
        setShowPermissao(false)
        setReloadCount(prevCount => prevCount + 1);
      
    
  } catch(err){
    console.log("O erro retornado: ",err)
    setLoading(false)
    setErroInterno(true)
  }
  return false
  }




const onChangeBusca = (evt) => {
    setBuscaTexto(evt.target.value)
    // setBusca(buscaTexto) 
    // if (!evt.value ) {
    //     setRepo(initialRepos)
    //     setTipo('todos')
    //     setBuscaTexto('')
    //     setReloadCount(prevCount => prevCount + 1);
    //     return;
    //   }
    
  }

  const handleCampo1KeyPress = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        setBusca(buscaTexto)
     
     setReloadCount(prevCount => prevCount + 1);
    }
  };


  const onChangeRoles=(role) =>{
    setTipo(role)
    // setLoading(true)
    setReloadCount(prevCount => prevCount + 1);
  }

  const onChangeOrdem=(ordem) =>{
    setOrdenar(ordem)
    // setLoading(true)
    setReloadCount(prevCount => prevCount + 1);
  }



    return(
        <>
        <Header/>

        <div className={Style.divBannerRestauracao}>
            <h5 className={Style.tituloBanner}><FaTrashAlt/>Reveja e restaure itens excluídos<FaTrashRestoreAlt/></h5>
            <div className={Style.divBotoesBanner}>
            <Button className={Style.botaoBanner} href='/home'>Home</Button>    
                {opcaoElemento == 1 &&
                    <>
                    <Button className={Style.botaoBanner} href='/usuarios/listaUsuario' >Ver lista de Usuários</Button>
                    </>
                }
                {opcaoElemento == 2 &&
                    <>
                    <Button className={Style.botaoBanner} href='/arvores/listarArvores'>Ver lista de Árvores</Button>
                    </>
                }
                {opcaoElemento == 3 &&
                    <>
                    <Button className={Style.botaoBanner} href='/locaisPlantacao/listaLocais'>Ver lista de Locais</Button>
                    </>
                }
                {opcaoElemento == 4 &&
                    <>
                    <Button className={Style.botaoBanner} href='/configuracao'>Ver lista de Categorias</Button>
                    </>
                }
                {opcaoElemento == 5 &&
                    <>
                    <Button className={Style.botaoBanner} href='/configuracao'>Ver lista de Funções</Button>
                    </>
                }
            </div>
        </div>

        <div className={Style.divFundoRestauracao}>
           



                <Tab.Container id="left-tabs-example" defaultActiveKey="first"  >
            <Row className={Style.containerTab}>
                <Col sm={3} className={Style.Coluna1tab}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <Nav.Link eventKey="first" onClick={()=>opcao(1)} className={Style.OpcaoCad}><FaUserClock/> Restaurar Usuarios</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="two" onClick={()=>opcao(2)} className={Style.OpcaoCad}><FaTree/> Restaurar Árvores</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="tree" onClick={()=>opcao(3)} className={Style.OpcaoCad}><FaMapMarkerAlt/> Restaurar Locais</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="four" onClick={()=>opcao(4)} className={Style.OpcaoCad}><FaShapes/> Restaurar Categorias</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="five" onClick={()=>opcao(5)} className={Style.OpcaoCad}><FaUserShield/> Restaurar Papel de usuário</Nav.Link>
                    </Nav.Item>
                   
                </Nav>
                </Col>
                <Col sm={9} className={Style.containerTab2}>
                <Tab.Content>

                <Tab.Pane eventKey="first" className={Style.paginaRestore}>
 {/* <InputGroup className={Style.Busca}>
         <Form.Control
             placeholder="Buscar por nome"
             aria-label="Buscar por nome"
             aria-describedby="basic-addon2"
             onChange={onChangeBusca}
             onKeyPress={handleCampo1KeyPress}
         />
 
 </InputGroup> */}




        <Navbar className={Style.headerTabela}>
          <Container>
            <InputGroup className={Style.Busca}>
              <Form.Control
                placeholder="Buscar por nome"
                aria-label="Buscar por nome"
                aria-describedby="basic-addon2"
                onChange={onChangeBusca}
                onKeyPress={handleCampo1KeyPress}
              />

            </InputGroup>

            <Dropdown className={Style.DropMENU}>
              <Dropdown.Toggle variant="primary" id="dropdown-basic" className={Style.IconeMENU}>
              <Nav.Link> <FaFilter className={Style.Icon} />Mostrar</Nav.Link>

              </Dropdown.Toggle>

              <Dropdown.Menu  className={Style.OpDropNotifi}>
              <Dropdown.Item onClick={() => onChangeRoles("")}>Todos</Dropdown.Item>
                <Dropdown.Item onClick={() => onChangeRoles("user")}>Usuário</Dropdown.Item>
                <Dropdown.Item onClick={() => onChangeRoles("admin")}>Administrador</Dropdown.Item>

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

 {repos.map((repo,index) => (
    <>
     <div className={Style.divUsuarios}>
    
         <Image src={ImgUser} className={Style.imgArvore} alt="" />
         <div className={Style.divDadosUsuario}>
             <h5><span className={Style.itemSpan}><b>Nome:</b></span> {repo.name}</h5>
             <h5><span className={Style.itemSpan}><b>Data de exclusão:</b></span> {repo.deletedAt}</h5>
         </div>
         <div className={Style.divDadosUsuario}>
             <Button className={Style.BotaoRest} onClick={()=>handleShowEdit(repo._id, repo.name)}>Restaurar</Button>
         </div>
         
     </div>
    

     </>
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
 </Tab.Pane>


                   
                    <Tab.Pane eventKey="two" className={Style.paginaRestore}>
                        
                    {/* <InputGroup className={Style.Busca}>
                            <Form.Control
                                placeholder="Buscar por nome"
                                aria-label="Buscar por nome"
                                aria-describedby="basic-addon2"
                              
                            />
                    
                    </InputGroup> */}
                            <Navbar className={Style.headerTabela}>
          <Container>
            <InputGroup className={Style.Busca}>
              <Form.Control
                placeholder="Buscar por nome"
                aria-label="Buscar por nome"
                aria-describedby="basic-addon2"
                onChange={onChangeBusca}
                onKeyPress={handleCampo1KeyPress}
              />

            </InputGroup>

            <Dropdown className={Style.DropMENU}>
              <Dropdown.Toggle variant="primary" id="dropdown-basic" className={Style.IconeMENU}>
              <Nav.Link> <FaFilter className={Style.Icon} />Mostrar</Nav.Link>

              </Dropdown.Toggle>

              <Dropdown.Menu  className={Style.OpDropNotifi}>
              <Dropdown.Item onClick={() => onChangeRoles("")}>Todos</Dropdown.Item>
                <Dropdown.Item onClick={() => onChangeRoles("user")}>Usuário</Dropdown.Item>
                <Dropdown.Item onClick={() => onChangeRoles("admin")}>Administrador</Dropdown.Item>

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
                        <div className={Style.divUsuarios}>
                       
                            <Image src={ImgUser} className={Style.imgArvore} alt="" />
                            <div className={Style.divDadosUsuario}>
                                <h5>Nome: Anona Shirimoia</h5>
                                <h5>Data de exclusão: 15/10/2023</h5>
                            </div>
                            <div className={Style.divDadosUsuario}>
                                <Button className={Style.BotaoRest}>Restaurar</Button>
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



                    </Tab.Pane>
                    <Tab.Pane eventKey="tree" className={Style.paginaRestore}>
                        

                    <Navbar className={Style.headerTabela}>
          <Container>
            <InputGroup className={Style.Busca}>
              <Form.Control
                placeholder="Buscar por nome"
                aria-label="Buscar por nome"
                aria-describedby="basic-addon2"
                onChange={onChangeBusca}
                onKeyPress={handleCampo1KeyPress}
              />

            </InputGroup>

            <Dropdown className={Style.DropMENU}>
              <Dropdown.Toggle variant="primary" id="dropdown-basic" className={Style.IconeMENU}>
              <Nav.Link> <FaFilter className={Style.Icon} />Mostrar</Nav.Link>

              </Dropdown.Toggle>

              <Dropdown.Menu  className={Style.OpDropNotifi}>
              <Dropdown.Item onClick={() => onChangeRoles("")}>Todos</Dropdown.Item>
                <Dropdown.Item onClick={() => onChangeRoles("user")}>Usuário</Dropdown.Item>
                <Dropdown.Item onClick={() => onChangeRoles("admin")}>Administrador</Dropdown.Item>

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
                        <div className={Style.divUsuarios}>
                       
                            <Image src={ImgUser} className={Style.imgArvore} alt="" />
                            <div className={Style.divDadosUsuario}>
                                <h5>Nome: Lugar nenhum</h5>
                                <h5>Data de exclusão: 15/10/2023</h5>
                            </div>
                            <div className={Style.divDadosUsuario}>
                                <Button className={Style.BotaoRest}>Restaurar</Button>
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


                    </Tab.Pane>

                    <Tab.Pane eventKey="four" className={Style.paginaRestore}>
                        

                    <Navbar className={Style.headerTabela}>
          <Container>
            <InputGroup className={Style.Busca}>
              <Form.Control
                placeholder="Buscar por nome"
                aria-label="Buscar por nome"
                aria-describedby="basic-addon2"
                onChange={onChangeBusca}
                onKeyPress={handleCampo1KeyPress}
              />

            </InputGroup>

            <Dropdown className={Style.DropMENU}>
              <Dropdown.Toggle variant="primary" id="dropdown-basic" className={Style.IconeMENU}>
              <Nav.Link> <FaFilter className={Style.Icon} />Mostrar</Nav.Link>

              </Dropdown.Toggle>

              <Dropdown.Menu  className={Style.OpDropNotifi}>
              <Dropdown.Item onClick={() => onChangeRoles("")}>Todos</Dropdown.Item>
                <Dropdown.Item onClick={() => onChangeRoles("user")}>Usuário</Dropdown.Item>
                <Dropdown.Item onClick={() => onChangeRoles("admin")}>Administrador</Dropdown.Item>

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
                            <div className={Style.divUsuarios}>
                           
                                <Image src={ImgUser} className={Style.imgArvore} alt="" />
                                <div className={Style.divDadosUsuario}>
                                    <h5>Nome: Frutifera</h5>
                                    <h5>Data de exclusão: 15/10/2023</h5>
                                </div>
                                <div className={Style.divDadosUsuario}>
                                    <Button className={Style.BotaoRest}>Restaurar</Button>
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
    
    
                        </Tab.Pane>

                        <Tab.Pane eventKey="five" className={Style.paginaRestore}>
                        

                        <Navbar className={Style.headerTabela}>
          <Container>
            <InputGroup className={Style.Busca}>
              <Form.Control
                placeholder="Buscar por nome"
                aria-label="Buscar por nome"
                aria-describedby="basic-addon2"
                onChange={onChangeBusca}
                onKeyPress={handleCampo1KeyPress}
              />

            </InputGroup>

            <Dropdown className={Style.DropMENU}>
              <Dropdown.Toggle variant="primary" id="dropdown-basic" className={Style.IconeMENU}>
              <Nav.Link> <FaFilter className={Style.Icon} />Mostrar</Nav.Link>

              </Dropdown.Toggle>

              <Dropdown.Menu  className={Style.OpDropNotifi}>
              <Dropdown.Item onClick={() => onChangeRoles("")}>Todos</Dropdown.Item>
                <Dropdown.Item onClick={() => onChangeRoles("user")}>Usuário</Dropdown.Item>
                <Dropdown.Item onClick={() => onChangeRoles("admin")}>Administrador</Dropdown.Item>

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
                            <div className={Style.divUsuarios}>
                           
                                <Image src={ImgUser} className={Style.imgArvore} alt="" />
                                <div className={Style.divDadosUsuario}>
                                    <h5>Nome: Administrador</h5>
                                    <h5>Data de exclusão: 15/10/2023</h5>
                                </div>
                                <div className={Style.divDadosUsuario}>
                                    <Button className={Style.BotaoRest}>Restaurar</Button>
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
    
    
                        </Tab.Pane>

                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>



        </div>
        
        <Footer/>



      {/* Modal de exclusão de usuario */}
      <Modal show={showPermissao} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <h2 className={Style.tituloDeletar}>Restauração!</h2>
            <h5 className={Style.tituloDelet}>{nome}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <h4><FaRedoAlt />Deseja mesmo restaurar este ítem: </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={()=>Restaurar(idUsuario)} >
           Sim, Restaurar
          </Button>
        </Modal.Footer>
      </Modal>





        {success &&
          <Alert key="1232" variant="success" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
            <Spinner animation="grow" variant="success" />Ítem restaurado com sucesso! | <Alert.Link href={caminho}>Ver lista</Alert.Link>
          </Alert>
        }

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