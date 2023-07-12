import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Style from './cardlogin.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import Logo from '../../../assets/images/reforestImagem.png';
import Logot from '../../../assets/images/logo.png';
import { useRouter } from "next/router"
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CardUsuarioEdit from '../../cards/cardCadUser/index';

export default function LoginCard(){
    //variaveis do modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = () =>{
       
        setShow(true);
        //setDadosEditar([idUser, personName]);
      }

    const router = useRouter();

    function funcaoEntrar(){
        console.log("entrou na funcao");
    
        router.push('/home');
     

    }





    return (
  
       
      <div className={Style.divFundo}>
           
           <div className={Style.divBarra}>
           <Image src={Logot} className={Style.logo} alt="" />
                <Tabs
                    defaultActiveKey="login"
                    transition={false}
                    id="noanim-tab-example"
                    className={Style.BarraCard }
                    >
                      
                        
                    <Tab eventKey="login" title="Login">

                   <div className={Style.DivCorpoCard}>
                   <Image src={Logo} className={Style.imgMundo} alt="" />
                   <div className={Style.DivForm}>
                   <h3 className={Style.TituloCard}>Iniciar sessão na ReForest</h3>
                
                    <Form className={Style.Formulario}>
                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email/Telefone</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu email ou telefone" />
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <p className={Style.EsqueciSen}>Esqueci minha senha</p>
                        <Button variant="primary"  className={Style.BotaoEntrar} onClick={funcaoEntrar}>
                            Entrar
                        </Button>
                    </Form>
                    </div>
                    </div> 
                    </Tab>
                    <Tab eventKey="profile" title="Registre-se"  >
                  
                    <div className={Style.DivCorpoCard}>
                   <Image src={Logo} className={Style.imgMundo} alt="" />
                   <div className={Style.DivForm}>
                   <h3 className={Style.TituloCard}>Cadastre-se no ReForest</h3>
                 
                    <Form className={Style.Formulario}>
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                            <Form.Control  placeholder="Digite seu nome" />
                           
                        </Form.Group>
                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                            <Form.Control type="email" placeholder="Digite seu email" />
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                         
                            <Form.Control placeholder="Digite seu telefone" />
                           
                        </Form.Group>
<br/>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        
                            <Form.Control type="password" placeholder="Digite sua senha" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                         
                            <Form.Control type="password" placeholder="Redigite sua senha" />
                        </Form.Group> */}
                     
                        <Button variant="primary"  className={Style.BotaoCad} onClick={() => handleShow()} >
                            Escolher modo de usuário
                        </Button>
                        <Button variant="primary"  className={Style.BotaoCadGoogle} >
                                Cadastrar com Google
                        </Button>
                    </Form>
                    </div>
                    </div> 
                    </Tab>
                    
                    
                </Tabs>
                </div>




                <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cadastrar usuário</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    {/* Passagem de valores por props. */}
                    <CardUsuarioEdit /> 
                    </Offcanvas.Body>
                </Offcanvas>
              
    
              
           
       </div>
  
    );
}