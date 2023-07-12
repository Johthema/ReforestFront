import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Style from './modalpapel.module.css'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

export default function Example() {
  const URL_API=  "http://192.168.0.133:3001/api/role";

  const [nomePapel, setNomePapel] = useState('');
  const [name, setNome] = useState('');
  const [loading, setLoading] = useState(false)

  //Função para setar o nome do papel
  const onChangeNome = (evt) => {
    setNome(evt.target.value)
   
  }

  const enviarForm = async (evt) => {
    
    evt.preventDefault()
    try{
      setLoading(true)
     
        const response = await fetch(URL_API,{
          method: 'POST',
          headers:{
            Accept: 'application/json',
            'Content-type': 'application/json'
          },
    
          body: JSON.stringify({ name }),
        })

        const json = await response.json()
        if(name!=''){
          setLoading(false)
          setSuccess(true)
        } else {
          setLoading(false)
          setErro(true)
        }
        //setLoading(false)
       
      } catch(err){
        console.log(err)
      }
    }
  



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className={Style.botao}>
        Novo
      </Button>


     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar novo papel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={enviarForm} method='post'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome</Form.Label>
              <Form.Control placeholder='Administrador' type='text' name='nome'  onChange={onChangeNome}
                autoFocus
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Criado em</th>
          <th>Editar</th>
          <th>Deletar</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>31/01/1995</td>
          <td><FaEdit/></td>
          <td><FaTrashAlt/></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>18/01/1995</td>
          <td><FaEdit/></td>
          <td><FaTrashAlt/></td>
        </tr>
        {/* <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
 
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={enviarForm} >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
      

      {loading &&
  <Alert key="12345" variant="primary" className={Style.botaoCarregamento}>
    <Spinner animation="border" variant="primary" /> Aguarde, salvando...
  </Alert>
}
    </>
  );
}