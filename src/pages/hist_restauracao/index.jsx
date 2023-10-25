import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import {useState} from 'react'
import Style from './restauracao.module.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import ImgUser from '../../assets/images/fotoperfil/fotoper.jpg';
import {FaMapMarkerAlt, FaTree, FaUserClock, FaRulerCombined, FaHistorys, FaTh, FaFolderMinus, FaBoxes, FaUserShield} from "react-icons/fa";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';

export default function Hist_restauracao(){

    const [loading, setLoading] = useState(false);

        //Variaveis de filtro
        const [pageQtd, setPageQtd] = useState(1);
        const [pageLimit, setPageLimit] = useState('9');

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


    return(
        <>
        <Header/>
        <div className={Style.divFundoRestauracao}>
            

                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
            <Row className={Style.containerTab}>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <Nav.Link eventKey="first"><FaUserClock/> Restaurar Usuarios</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="two"><FaTree/> Restaurar Árvores</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="tree"><FaMapMarkerAlt/> Restaurar Locais</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="four"><FaBoxes/> Restaurar Categorias</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="five"><FaUserShield/> Restaurar Funções de usuário</Nav.Link>
                    </Nav.Item>
                   
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first" className={Style.paginaRestore}>
                    <InputGroup className={Style.Busca}>
                            <Form.Control
                                placeholder="Buscar por nome"
                                aria-label="Buscar por nome"
                                aria-describedby="basic-addon2"
                              
                            />
                    
                    </InputGroup>
                        <div className={Style.divUsuarios}>
                       
                            <Image src={ImgUser} className={Style.imgArvore} alt="" />
                            <div className={Style.divDadosUsuario}>
                                <h5>Nome: Fulano de tal</h5>
                                <h5>Data de exclusão: 15/10/2023</h5>
                            </div>
                            <div className={Style.divDadosUsuario}>
                                <Button className={Style.BotaoRest}>Restaurar</Button>
                            </div>
                            
                        </div>
                        <div className={Style.divUsuarios}>
                            <Image src={ImgUser} className={Style.imgArvore} alt="" />
                            <div className={Style.divDadosUsuario}>
                                <h5>Nome: Fulano de tal</h5>
                                <h5>Data de exclusão: 15/10/2023</h5>
                            </div>
                            <div className={Style.divDadosUsuario}>
                                <Button className={Style.BotaoRest}>Restaurar</Button>
                            </div>
                             
                        </div>
                        <div className={Style.divUsuarios}>
                            <Image src={ImgUser} className={Style.imgArvore} alt="" />
                            <div className={Style.divDadosUsuario}>
                                <h5>Nome: Fulano de tal</h5>
                                <h5>Data de exclusão: 15/10/2023</h5>
                            </div>
                            <div className={Style.divDadosUsuario}>
                                <Button className={Style.BotaoRest}>Restaurar</Button>
                            </div>
                            
                        </div>
                        <div className={Style.divUsuarios}>
                            <Image src={ImgUser} className={Style.imgArvore} alt="" />
                            <div className={Style.divDadosUsuario}>
                                <h5>Nome: Fulano de tal</h5>
                                <h5>Data de exclusão: 15/10/2023</h5>
                            </div>
                            <div className={Style.divDadosUsuario}>
                                <Button className={Style.BotaoRest}>Restaurar</Button>
                            </div>
                            
                        </div>
                        <div className={Style.divUsuarios}>
                            <Image src={ImgUser} className={Style.imgArvore} alt="" />
                            <div className={Style.divDadosUsuario}>
                                <h5>Nome: Fulano de tal</h5>
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
                    <Tab.Pane eventKey="two" className={Style.paginaRestore}>
                        
                    <InputGroup className={Style.Busca}>
                            <Form.Control
                                placeholder="Buscar por nome"
                                aria-label="Buscar por nome"
                                aria-describedby="basic-addon2"
                              
                            />
                    
                    </InputGroup>
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
                        

                    <InputGroup className={Style.Busca}>
                            <Form.Control
                                placeholder="Buscar por nome"
                                aria-label="Buscar por nome"
                                aria-describedby="basic-addon2"
                              
                            />
                    
                    </InputGroup>
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

                    <Tab.Pane eventKey="four" className={Style.paginaRestore}>
                        

                        <InputGroup className={Style.Busca}>
                                <Form.Control
                                    placeholder="Buscar por nome"
                                    aria-label="Buscar por nome"
                                    aria-describedby="basic-addon2"
                                  
                                />
                        
                        </InputGroup>
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

                        <Tab.Pane eventKey="five" className={Style.paginaRestore}>
                        

                        <InputGroup className={Style.Busca}>
                                <Form.Control
                                    placeholder="Buscar por nome"
                                    aria-label="Buscar por nome"
                                    aria-describedby="basic-addon2"
                                  
                                />
                        
                        </InputGroup>
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

                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>



        </div>
        
        <Footer/>
        </>
    )
}