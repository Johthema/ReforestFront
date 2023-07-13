import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Style from './modalpapel.module.css'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { FaEdit, FaTrashAlt,FaListAlt, FaSearch, FaFilter, FaRedoAlt, FaRecycle } from 'react-icons/fa';




export default function Example() {
  const URL_API=  "http://192.168.0.153:3001/api/role";
  const URL_APIRoles=  "http://192.168.0.153:3001/api/role";

  const [name, setNome] = useState('');
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [success, setSuccess] = useState(false)
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
          //setLoading(false)
          setLoading(false)
          setSuccess(true)

         
        } else {
          setLoading(false)
          setErro(true)
        }
        // setLoading(false)
       
      } catch(err){
        console.log(err)
      }
    }
  



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);




  //Primeiro carregamengto para saber se esta tudo certo
  const fecthAllData = async () => {
    try {

      setLoading(true)
      const response = await fetch(URL_APIRoles) //por padrão o fetch ja utiliza o GET
      const data = await response.json()

      if (!data)
        throw 'problema na requisição' //Aqui será tratado o erro de requisição. Porém é melhor tratar pelo status(200, 400, 500)
      setData(data.roles)
      

      //Iniciando a estrutura da requisição

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

  }
  console.log("o data é: ", data)
  //useEffect Lida com o ciclo de vida da aplicação para não ficar em loop infinito
  useEffect(() => {
    fecthAllData();

  }, []);



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

<Table striped bordered hover className={Style.Tabela}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Criado em</th>
              <th>Editar</th>
              <th>Deletar</th>
             
    
            </tr>

          </thead>

          <tbody>

            
            {data && data.map((item, i=index) =>  (

              <tr className={Style.trUsuario} key={i} >
                <td className={Style.tdUsuario}><h2 key={item._id} className={Style.FontUsuario}> {item.name}</h2></td>
                <td className={Style.tdUsuario}><h2 key={item._id} className={Style.FontUsuario}> {item.createdAt}</h2></td>
             
                <td className={Style.Editar} value={item._id} ><FaEdit className={Style.icoEditar} /></td>
                <td className={Style.Deletar} value={item._id}  ><FaTrashAlt className={Style.icoDeletar} /></td>
              </tr>

            )
            )
            }

          </tbody>

          {success &&
            <Alert key="1232" variant="success" className={Style.botaoCarregamento} onClose={() => setShow2(false)} dismissible>
              <Spinner animation="grow" variant="success" /> Salvo com sucesso!
            </Alert>
          }

          {loading &&
            <Alert key="12345" variant="primary" className={Style.botaoCarregamento}>
              <Spinner animation="border" variant="primary" /> Aguarde, salvando...
            </Alert>
          }
        </Table>


            {/* <Table striped bordered hover>
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
      </tbody>
    </Table> */}
 
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
      

      {/* {success &&
  <Alert key="12345" variant="primary" className={Style.botaoCarregamento}>
    <Spinner animation="border" variant="primary" /> Aguarde, salvando...
  </Alert>
} */}



    </>
  );
}