import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Style from './cardlogin.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Image from 'next/image';
// import Logotipo from '../../assets/images/logo.png';

export default function LoginCard(){
    return (
  
       
      <div className={Style.divFundo}>
           
                <Tabs
                    defaultActiveKey="login"
                    transition={true}
                    id="noanim-tab-example"
                    className={Style.BarraCard }
                    >
                    <Tab eventKey="login" title="Login">

                   <div className={Style.DivCorpoCard}>
                   {/* <Image src={Logotipo} className={StyleBar.logo} /> */}
                   <div className={Style.DivForm}>
                   <h3 className={Style.TituloCard}>Iniciar sessão na ReForest</h3>
                    <Form className={Style.Formulario}>
                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email/Telefone</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu email ou telefone" />
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <p>Esqueci minha senha</p>
                        <Button variant="primary" type="submit">
                            Entrar
                        </Button>
                    </Form>
                    </div>
                    </div> 
                    </Tab>
                    <Tab eventKey="profile" title="Registre-se">
                  
                    <div className={Style.DivForm}> <h3 className={Style.TituloCard}>cad</h3></div>   
                    </Tab>
                    
                    
                </Tabs>
              
           
       </div>
  
    );
}