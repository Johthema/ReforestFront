
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Style from './categoria.module.css'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { FaEdit, FaTrashAlt, FaCheckSquare, FaRedoAlt } from 'react-icons/fa';



export default function Categoria() {

  const URL_API = "http://192.168.0.253:3001/api/category";
  const URL_APIRoles = "http://192.168.0.253:3001/api/category";

  const [name, setNome] = useState('');
  const [loading, setLoading] = useState(false);
  const [aviso, setAviso] = useState(false);
  const [errorInt, setErroInterno] = useState(false);

  const [dataCat, setData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [successDell, setSuccessDell] = useState(false);
  const [reloadCount, setReloadCount] = useState(0);
  const [id, setId] = useState('');
  const [idPapel, setIdPapel] = useState('');

  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);

  const handleClose = () =>{
    setShow(false)
    setShowEdit(false)
  } ;
  const handleShow = () => setShow(true);

  const [nome, setPapelNome] = useState('');



  //Função para setar o nome do papel
  const onChangeNome = (evt) => {
    setNome(evt.target.value)
    setPapelNome(evt.target.value)

  }

  const enviarForm = async (evt) => {

    evt.preventDefault()
    try {
      setLoading(true)

      const response = await fetch(URL_API, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        },

        body: JSON.stringify({ name }),
      })

      const json = await response.json()
      // console.log("::",error.response)
      if (name) {
        //setLoading(false)
        setLoading(false)
        setSuccess(true)
        setShow(false);
        setReloadCount(prevCount => prevCount + 1);

      } else if (!name) {
        setAviso(true)
        setLoading(false)
        //setErro(true)
      } if (response.status == 400){
        setSuccess(false)
        setErroInterno(true)
        
      }
     
      // setLoading(false)

    } catch (err) {
     
      console.log(err)
    }
  }

//Editar-------------------------------------------------------
const enviarFormEdit = async (evt) => {
    
  evt.preventDefault()
  try{
    setLoading(true)

      const response = await fetch(URL_API+"/"+idPapel,{
        method: 'PUT',
        headers:{
          Accept: 'application/json',
          'Content-type': 'application/json'
        },
  
        body: JSON.stringify({ name }),
      })
  
      const json = await response.json()
      console.log("o response 2: ",response)
      if(name!=''){
        setShowEdit(false)
        setLoading(false)
        setSuccess(true)
        setReloadCount(prevCount => prevCount + 1);
      } else if(name=='') {
        setLoading(false)
        setAviso(true)
      } if (response.status == 400){
        setSuccess(false)
        setErroInterno(true)
        
      }

 
} catch(err){
  console.log("O erro retornado: ",err)
  setLoading(false)
  setErroInterno(true)
}
return false
}
//Editar fim---------------------------------------------------








  //Primeiro carregamengto para saber se esta tudo certo
  const fecthAllData = async () => {
    try {

      setLoading(true)
      const response = await fetch(URL_APIRoles) //por padrão o fetch ja utiliza o GET
      const dataCat = await response.json()

      if (!dataCat)
        throw 'problema na requisição' //Aqui será tratado o erro de requisição. Porém é melhor tratar pelo status(200, 400, 500)
      setData(dataCat)

      setNome(dataCat.name)
      //Iniciando a estrutura da requisição

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

  }
 
  //useEffect Lida com o ciclo de vida da aplicação para não ficar em loop infinito
  useEffect(() => {
    fecthAllData();

  }, [reloadCount]);


  //-----------------------------Deletar papel------------------------------------
  const idUsuario = (event, nome) =>{
   
    console.log("O id do usuario é: ", event)
    setId(event)
    setPapelNome(nome)
    setShow2(true)
  }
  const idPapelEdit = (event, nome) =>{
   
    console.log("O id do papel é: ", event)
    console.log("O nome do papel é: ", nome)
    setIdPapel(event)
    setPapelNome(nome)
    setShowEdit(true)
  }

  const DeleteUser = async (evt) => {
    
    evt.preventDefault()
    //console.log("deletando o papel de id: ",id)
    try{
    const response = await fetch(URL_API+"/"+id,{
      method: 'DELETE',
      headers:{
        Accept: 'application/json',
        'Content-type': 'application/json'
      },

      body: JSON.stringify({ id }),
      
    })
    
    const json = await response.json()


    handleClose2()//Fechar a janela modal
    setSuccessDell(true) // Aparecer o alert de sucesso 

    setTimeout(() => { //Uso do setTimeout para fechar o alert dos dados
      setSuccessDell(false);
    }, 2000);
    setReloadCount(prevCount => prevCount + 1);
    //window.location.reload();

  } catch(err){
    console.log(err)
  }
  
  return false
  }



  return (
    <>
    <div className={Style.DivBotao}>
    <Button variant="primary" onClick={handleShow} className={Style.botaoEnviar} >
        +Add Categoria
      </Button>
    </div>
     
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


          {dataCat && dataCat.map((item, i = index) => (

            <tr className={Style.trUsuario} key={i} >
              <td className={Style.tdUsuario}><h2 key={item._id} className={Style.FontUsuario}> {item.name}</h2></td>
              <td className={Style.tdUsuario}><h2 key={item._id} className={Style.FontUsuario}> {item.createdAt}</h2></td>
              <td className={Style.Editar} value={item._id} onClick={()=> idPapelEdit(item._id, item.name)}><FaEdit className={Style.icoEditar} /></td>
              <td className={Style.Deletar} value={item._id} onClick={() => idUsuario(item._id, item.name)} ><FaTrashAlt className={Style.icoDeletar} /></td>
            </tr>

          )
          )
          }

        </tbody>

{/* ==============Modal de cadastro da categoria============== */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Insira o nome da categoria </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form onSubmit={enviarForm} method='post'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nome</Form.Label>
                <Form.Control placeholder='Exótico' type='text' name='nome' onChange={onChangeNome}
                  autoFocus
                />
              </Form.Group>
            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={enviarForm}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>

{/* ==============Modal de editar da categoria============== */}
<Modal show={showEdit} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar nome da categoria </Modal.Title>
          </Modal.Header>
          <Modal.Body>


            <Form onSubmit={enviarFormEdit} method='post'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nome</Form.Label>
                <Form.Control placeholder='Exotico' type='text' required  value={nome} name='nome' onChange={onChangeNome}
                  autoFocus
                />
              
              </Form.Group>
            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={enviarFormEdit}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>


{/* ==============Modal de deletar categoria============== */}
        <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <h2 className={Style.tituloDeletar}>Deletar categoria!</h2>
            <h5 className={Style.tituloDelet}>{nome}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <h4><FaRedoAlt /> Por conveniência, poderá restaurá-lo mais tarde. </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={DeleteUser} >
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>



        {success &&
          <Alert key="1232" variant="success" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
            <Spinner animation="grow" variant="success" /> Salvo com sucesso!
          </Alert>
        }
        {successDell &&
          <Alert key="1232" variant="success" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
            <Spinner animation="grow" variant="success" /> Deletado com sucesso!
          </Alert>
        }

        {loading &&
          <Alert key="12345" variant="primary" className={Style.botaoCarregamento}>
            <Spinner animation="border" variant="primary" /> Aguarde, carregando...
          </Alert>
        }

        {aviso &&
          <Alert key="123456" variant="primary" className={Style.botaoCarregamento}  dismissible>
            <Spinner animation="border" variant="warning" /> O nome não pode ser vazio!
          </Alert>
        }

        {errorInt &&
          <Alert key="1234" variant="danger" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
            <Spinner animation="grow" variant="danger" /> Ops! algo deu errado com o servidor, tente novamente.
          </Alert>
        }
      </Table>
    </>
  )
}