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
import {RotateLoader } from 'react-spinners';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { FaListOl, FaListAlt } from "react-icons/fa";

export default function LoginCard(){

    const URL_API=  "http://192.168.0.153:3001/api/signin";
    // constructor(props){
    //     super(props);
    //     this.state = {
    //       loading: true
    //     }
    //   }

    //variaveis do modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [loadding,  setLoadding] = useState(false)


    //Variaveis login
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const [error, setErro] = useState(false)
    const [errorInt, setErroInterno] = useState(false)
    const [aviso, setAviso] = useState(false)

    const onChangeEmail = (evt) => {
        setIdentifier(evt.target.value)

      }
      const onChangeSenha = (evt) => {
        setPassword(evt.target.value) 
      }


    const handleShow = () =>{

        setShow(true);
        //setDadosEditar([idUser, personName]);
      }

    const router = useRouter();

    function funcaoEntrar(){
        console.log("entrou na funcao");
        setLoadding(true)

        router.push('/home');

    }

//Fomulario de envio dos requisitos de login

    const onChangeLogin = (evt) => {
        setNome(evt.target.value)
       
      }

    const enviarForm = async (evt) =>{
        evt.preventDefault()
        try {

            const response = await fetch (URL_API,{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ identifier, password }),
            })

            const json = await response.json()
            console.log(response)
            if(!identifier || !password){
                setAviso(true)
            } else

            if(response.status == 200){
                setAviso(false)
                setLoadding(true)
    
                router.push('/home');
            } else if(response.status == 401 || 400) {
                setAviso(false)
                setErro(true)
            } else if(response.status == 500) {
                setAviso(false)
                setErroInterno(true)
            }
            
        } catch (error) {
            console.log("retornou erro: ",error)
        }
    }





    return (
  
       <>
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
                
                    <Form onSubmit={enviarForm} method='post' className={Style.Formulario}>
                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email/Telefone</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu email ou telefone" onChange={onChangeEmail} />
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" onChange={onChangeSenha} />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <p className={Style.EsqueciSen}>Esqueci minha senha</p>
                        <Button variant="primary"  className={Style.BotaoEntrar} onClick={enviarForm}>
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
      

{loadding &&
    <div className={Style.DivSpinnerLoadding}>
        <RotateLoader color="#36d7b7" size="14" margin="15" className={Style.SpinnerLoadding} />
    </div>
}

{error &&
  <Alert key="1233" variant="danger" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
    <Spinner animation="grow" variant="danger" /> Email ou senha incorretos!
  </Alert>
}

{aviso &&
  <Alert key="1233" variant="warning" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
    <Spinner animation="grow" variant="warning" /> Todos os campos precisam ser preenchidos!
  </Alert>
}

{errorInt &&
  <Alert key="1234" variant="danger" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
    <Spinner animation="grow" variant="danger" /> Ops! algo deu errado com o servidor, tente novamente.
  </Alert>
}
       
       </>
  
    );
}