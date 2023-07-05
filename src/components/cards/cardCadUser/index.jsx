import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './card.module.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Example from '../../modals/modalpapel/index';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

function LeftTabsExample() {
  
  //-----------------------------------Funções--------------------------------------

  const [name, setNome] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState('');
  const [person, setPerson] = useState('PF');
  const [phone, setPhone] = useState('')
  const [site, setSite] = useState('')
  const [fullname, setFullName] = useState('')


  //variavel de Alerta de sucesso ou erro do cadastro
  const [success, setSuccess] = useState(false)
  const [error, setErro] = useState(false)

  //dinamico
  // const onChange = (evt) => {
  //   console.log(evt.target.name)
  // }
  const URL_API=  "http://192.168.0.249:3001/api/user";

  const onChangeNome = (evt) => {
    setNome(evt.target.value)
   
  }
  const onChangeSurname = (evt) =>{
    setSurname(evt.target.value)
  }
  const onChangeEmail = (evt) =>{
    setEmail(evt.target.value)
  }
  const onChangePhone = (evt) =>{
    setPhone(evt.target.value)
  }
  const onChangePassword = (evt) =>{
    setPassword(evt.target.value)
  }
  // const onChangeRoles = (evt) =>{
  //   setRoles(evt.target.value)
  // }
  const onChangeSite = (evt) =>{
    setSite(evt.target.value)
  }
  const onChangeFullName = (evt) =>{
    setFullName(evt.target.value)
  }

  const [show, setShow] = useState(true);

  const enviarForm = async (evt) => {
    
    evt.preventDefault()
    try{

      if(person == 'PF'){
        const response = await fetch(URL_API,{
          method: 'POST',
          headers:{
            Accept: 'application/json',
            'Content-type': 'application/json'
          },
    
          body: JSON.stringify({ name, surname, email, phone, password, person }),
        })
    
        const json = await response.json()
        if(name!='' && surname!='' && email !='' && phone !='' && password !='' && person !=''){
          setSuccess(true)
        } else {
          setErro(true)
        }

      } else if(person == 'PJ') {

        const response = await fetch(URL_API,{
          method: 'POST',
          headers:{
            Accept: 'application/json',
            'Content-type': 'application/json'
          },
    
          body: JSON.stringify({ name, fullname, email, phone, password, person, site }),
        })
    
        const json = await response.json()
        if(name!='' && email !='' && phone !='' && password !='' && person !=''){
          setSuccess(true)
        } else {
          setErro(true)
        }

      }

   
    setTimeout(()=>{
      setSuccess(false)
    },1000)
    
  } catch(err){
    console.log(err)
    setErro(true)
  }
  return false
  }

  const pessoaFisica= () => {
    setPerson('PF')
  }

  const pessoaJuridica= () => {
    setPerson('PJ')
  }


  //---------------------------------Pagina do card---------------------------------


  return (
    <>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      {/* {success && 
      <p>Cadastro realizado com sucesso!</p>} */}
      <Row className={Style.RowDiv}>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className={Style.OpcaoCad} onClick={pessoaFisica}>Pessoa Física</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className={Style.OpcaoCad} onClick={pessoaJuridica}>Pessoa Jurídica</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9} className={Style.ColunaSm9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <Card >
                <Card.Header>Dados Pessoa Física</Card.Header>
                <Card.Body>
                  
                <Form onSubmit={enviarForm} method='post'>
                    <Row>
                        <Col>
                        
                        <FloatingLabel controlId="floatingInput" label="*Nome" className="mb-3">
                        <Form.Control placeholder='*Nome' type='text' name='nome' value={name} onChange={onChangeNome} />
                        </FloatingLabel>
                        </Col>
                        <Col>
                        <FloatingLabel controlId="floatingInput" label="*Sobrenome" className="mb-3">
                        <Form.Control  placeholder='Sobrenome' type='text' name='*sobrenome' value={surname} onChange={onChangeSurname}/>
                        </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                    <FloatingLabel controlId="floatingInput" label="*Email" className="mb-3">
                        <Form.Control type="email" placeholder='*Email' name='email' value={email} onChange={onChangeEmail} />
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPhone">
                    <FloatingLabel controlId="floatingInput" label="*Telefone" className="mb-3">
                        <Form.Control type="text" placeholder='*Telefone' name='phone' value={phone} onChange={onChangePhone}/>
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                    <FloatingLabel controlId="floatingInput" label="*Password" className="mb-3">
                        <Form.Control type="password" placeholder='*Password' name='password' value={password} onChange={onChangePassword}  />
                    </FloatingLabel>
                    </Form.Group>
                    </Row>
                    <Row >
                    <Form.Group as={Col} controlId="formGridState" className={Style.formPapel}>
                    
                    <Form.Select >
                    <option value="0">Papel</option>
                        <option value="1">Administrador</option>
                        <option value="2">Opção2</option>
                        <option value="3">Opção3</option>
                      
                  
                        
                        
                    </Form.Select>
                    <Example/>
                    </Form.Group>
                    </Row>
                    <br/>
                    <Button className={Style.BotaoCad} onClick={enviarForm}>Salvar</Button>
                    </Form>
                    
                    
                    
                </Card.Body>
            </Card>
            </Tab.Pane>

            <Tab.Pane eventKey="second">
            <Card>
                <Card.Header>Dados Pessoa Jurídica</Card.Header>
                <Card.Body>
                   
                    <Form onSubmit={enviarForm} method='post'>
                        <Row>
                           <Col>
                            
                            <FloatingLabel controlId="floatingInput" label="Razão social(opcional)" className="mb-3">
                              <Form.Control placeholder='Razão social(opcional)' value={fullname} onChange={onChangeFullName} />
                            </FloatingLabel>
                            
                            <FloatingLabel controlId="floatingInput" label="*Nome completo" className="mb-3">
                              <Form.Control placeholder='*Nome completo' value={name} onChange={onChangeNome} />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingInput" label="*Telefone" className="mb-3">
                              <Form.Control placeholder='*Telefone' value={phone} onChange={onChangePhone} />
                            </FloatingLabel>

                            
                            <FloatingLabel controlId="floatingInput" label="Site(opcional)" className="mb-3">
                              <Form.Control placeholder='Site(opcional)' value={site} onChange={onChangeSite}/>
                              </FloatingLabel>
                            </Col>
                         
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                
                                <FloatingLabel controlId="floatingInput" label="*Email" className="mb-3">
                                  <Form.Control type="email" placeholder='*Email' value={email} onChange={onChangeEmail}/>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                
                                <FloatingLabel controlId="floatingInput" label="*Password" className="mb-3">
                                  <Form.Control type="password" placeholder='*Password' value={password} onChange={onChangePassword} />
                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="formGridState" className={Style.formPapel}>
                          
                            <Form.Select >
                                <option value="1">Administrador</option>
                                <option value="2">Opção2</option>
                                <option value="3">Opção3</option>
                            </Form.Select>
                            <Example/>
                            </Form.Group>
                        </Row>
                        <br/>
                    </Form>

                    <Button className={Style.BotaoCad} onClick={enviarForm}>Salvar</Button>
                </Card.Body>
            </Card>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

{success &&
  <Alert key="1232" variant="primary" className={Style.botaoCarregamento}>
    <Spinner animation="border" variant="primary" /> Salvo com sucesso..
  </Alert>
}

{error &&
  <Alert key="1233" variant="danger" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
    <Spinner animation="grow" variant="danger" /> Ops! algo deu errado. Preencha todos os campos corretamente..
  </Alert>
}
</>
  );
}

export default LeftTabsExample;