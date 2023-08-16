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
import { useState, useRef } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CardUsuarioEdit from '../../cards/cardCadUser/index';
import {RotateLoader } from 'react-spinners';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { FaListOl, FaListAlt } from "react-icons/fa";

const URL_API=  process.env.NEXT_PUBLIC_API_URL+"signin";
const URL_API_Curr = process.env.NEXT_PUBLIC_API_URL+"currentUser";
export default function LoginCard(){

    
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
    const [resposta, setResposta] = useState('')

    //Variaveis login
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const [error, setErro] = useState(false)
    const [errorInt, setErroInterno] = useState(false)
    const [aviso, setAviso] = useState(false);

    const [token, setToken]  = useState("");

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

    // function funcaoEntrar(){
    //     console.log("entrou na funcao");
    //     setLoadding(true)

    //     router.push('/home');

    // }

//Fomulario de envio dos requisitos de login

    // const onChangeLogin = (evt) => {
    //     setNome(evt.target.value)
       
    //   }

    const enviarForm = async (evt) =>{
        console.log("entrou na função 1")
        //evt.preventDefault()
        try {
            console.log("tentativa 1")
            const response = await fetch (URL_API,{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                   
                },
                body: JSON.stringify({ identifier, password }),
               
            }).then(response => response.json())
            .then(data => {
              //console.log(data); // Exibe a resposta do servidor no console
              //const resp = data.message
              setResposta(data.message)
             
               
  
  
            })


            // .then(response => {
               
            //     if (!response.ok) {
            //         console.log("entrou no si")
            //       throw new Error('Erro na requisição: ' + response.status);
            //     }
            //     return response.json();
            //   })
            //   .then(data => console.log(data))
            //   .catch(error => console.error(error));


            // .then(response => response.json())
            // .then(data => console.log("os dados: ",data))
            // .catch(error => console.error('Ocorreu um erro na requisição:', error));
            const json = await response.json().then(data =>{
                console.log("o token: ",data.token),
                setToken(data.token)
                const meuDadoString = data.token;
                localStorage.setItem("tokenId", meuDadoString);
                fecthAllData(data.token)
                
                
            })

           
           
            // console.log(json2);
           
            
            if(!identifier || !password){
                setAviso(true)
            }else

            if(response.status == 200){
                setAviso(false)
                setLoadding(true)
                console.log("chegou no status 200")
                inserindoToken()
                // fecthAllData(token)
    
                // router.push('/home');
            } else if(response.status == 401 || 400) {
                setAviso(false)
                setErro(true)
            }
             else if(response.status == 500) {
                setAviso(false)
                setErroInterno(true)
            }
            
        } catch (error) {
            console.log("retornou erro: ",error)
        }
        
    }
     


    console.log("agora o token é: ", token)
    
    const fecthAllData = async (tok) => {
        console.log("o token validado é: ", tok)
        console.log("entrou no fetchalldata")
       
          
            // const response = await fetch(URL_API_Curr)
            fetch (URL_API_Curr,{
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + tok
                 // Adiciona o token JWT no cabeçalho de Authorization
                }
                // body: JSON.stringify(data),
               
            })
            router.push('/home');

            // .then(response => response.json())
            // .then(token => {
              
            //   console.log("token do fetch:",token);
            // })
            // .catch(error => {
            //   console.error('Ocorreu um erro na requisição:', error);
            // });



    }
   
//---------Função de enviar o formulario ao apertar Enter
    const inputCampo2 = useRef(null);

    const handleCampo1KeyPress = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          inputCampo2.current.focus(); // Foca no próximo campo de input
        }
      };


    const handleKeyPress = (e) => {
        
        if (e.key === 'Enter') {
            enviarForm()
        }
      };



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
                            <Form.Control type="email" placeholder="Digite seu email ou telefone" onChange={onChangeEmail} onKeyPress={handleCampo1KeyPress}/>
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" onChange={onChangeSenha}  onKeyPress={handleKeyPress} ref={inputCampo2} />
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
        <RotateLoader color="#36d7b7" size="14" margin="15" className={Style.SpinnerLoadding} /> Seja bem-vindo!
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
    <Spinner animation="grow" variant="danger" /> Ops! algo deu errado com o servidor, Obs: {resposta}.
  </Alert>
}
       
       </>
  
    );
}