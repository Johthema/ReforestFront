import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Style from './restauracao.module.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import ImgUser from '../../assets/images/fotoperfil/fotoper.jpg';
import {FaMapMarkerAlt, FaTree, FaUserClock, FaRulerCombined, FaHistorys} from "react-icons/fa";

export default function Hist_restauracao(){
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
                   
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first" className={Style.paginaRestore}>
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="two">
                        Pagina com histórico de restauração de arvores
                    </Tab.Pane>
                    <Tab.Pane eventKey="tree">
                        Pagina com histórico de restauração de locais
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