import Header from '../../../components/header/index';
import Arvores from '../../../components/cards/cardArvore/index';
import Style from './listalocais.module.css';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Logotipo from '../../../assets/images/fundofloresta4.jpg';
import Footer from '../../../components/footer/index';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaGlobeAmericas, FaCity, FaTree, FaSeedling, FaRulerCombined, FaEdit, FaTrashAlt, FaRedoAlt } from "react-icons/fa";
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';

export default function ListarLocal(){
    const URL_API = process.env.NEXT_PUBLIC_API_URL+"plantingPlace";

    const [reloadCount, setReloadCount] = useState(0);
    const [dataCat, setData] = useState([]);
    const [name, setNome] = useState('');
    const [id, setId] = useState('');
    const [idPapel, setIdPapel] = useState('');

    const [loading, setLoading] = useState(false);
    const [aviso, setAviso] = useState(false);
    const [errorInt, setErroInterno] = useState(false);
    const [success, setSuccess] = useState(false);
    const [successDell, setSuccessDell] = useState(false);
  
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);

    const handleClose = () =>{
      setShow(false)
      setShowEdit(false)
    } ;

    const [nome, setPapelNome] = useState('');


  //Primeiro carregamengto para saber se esta tudo certo
  const fecthAllData = async () => {
    try {

      //setLoading(true)
      const response = await fetch(URL_API) //por padrão o fetch ja utiliza o GET
      const dataCat = await response.json()

      if (!dataCat)
        throw 'problema na requisição' //Aqui será tratado o erro de requisição. Porém é melhor tratar pelo status(200, 400, 500)
      setData(dataCat)

      setNome(dataCat.name)
      console.log("Lista de locais: ",dataCat)
      //Iniciando a estrutura da requisição

    } catch (error) {
      console.log(error)
    } finally {
    //   setLoading(false)
    }

  }

  useEffect(() => {
    fecthAllData();

  }, [reloadCount]);

//------------------------------DELETAR LOCAL
const idUsuario = (event, nome) =>{
   
  console.log("O id do usuario é: ", event)
  setId(event)
  setPapelNome(nome)
  setShow2(true)
}

const DeleteLocal = async (evt) => {
    
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
  }, 3500);
  setReloadCount(prevCount => prevCount + 1);
  //window.location.reload();

} catch(err){
  console.log(err)
}

return false
}


    return(
        <div>
            <Header></Header>
            <div className={Style.divtitulo}>
            <h1>
                Lista de locais de plantação em atividade
            </h1>
            </div>


           
            
           <div className={Style.divLocais}>

           

           {dataCat && dataCat.map((item, i = index) => (

          <Card key={i} className={Style.cardLocais}>
                        <Card.Header className={Style.HeaderLocais}><h4>{item.name} </h4>
                         <div className={Style.iconesAdmin}>
                          <FaEdit className={Style.iconesAdminIcon1}/>
                          <FaTrashAlt className={Style.iconesAdminIcon2}  onClick={() => idUsuario(item._id, item.name)}/>
                          </div>
                          
                          
                         
                         </Card.Header>
                        <Card.Body>
                          {/* <Card.Title>Special title treatment</Card.Title> */}
                          <Image src={Logotipo} className={Style.imagemLocal} alt="" />
                          <Card.Text className={Style.DescricaoLocais}>
                          <h5>{item.description}</h5>
                          </Card.Text>
                          {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        <Card.Footer className="text-muted">
                          {/* <div className={Style.footerCard}>
                           
                          </div> */}
                          <div className={Style.divIcones}><FaGlobeAmericas className={Style.Icon1}/> País: <h5 className={Style.nomeItem}>{item.country}</h5></div>
                          <div className={Style.divIcones}><FaCity className={Style.Icon2}/> Cidade: <h5 className={Style.nomeItem}>{item.city}</h5></div>
                          <div className={Style.divIcones}><FaTree className={Style.Icon3}/> Árvores plantadas: <h5 className={Style.nomeItem}>{item.plantedTrees}</h5></div>
                          <div className={Style.divIcones}><FaSeedling className={Style.Icon4}/> Árvores a plantar: <h5 className={Style.nomeItem}>{item.treesToBePlanted}</h5></div>
                          <div className={Style.divIcones}><FaRulerCombined className={Style.Icon5}/> Hectares: <h5 className={Style.nomeItem}>{item.hectare}</h5></div>
                          <div className={Style.divBotaoPlant}>
                          <Button className={Style.botaoPlantar}>Plantar aqui</Button>
                          
                          </div>
                          
                          </Card.Footer>
          </Card>

            ))}

           </div>
           <Footer/>
{/* ==============Modal de deletar local============== */}
<Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <h2 className={Style.tituloDeletar}>Deletar Local!</h2>
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
          <Button variant="primary" onClick={DeleteLocal} >
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

        {/* {aviso &&
          <Alert key="123456" variant="primary" className={Style.botaoCarregamento}  dismissible>
            <Spinner animation="border" variant="warning" /> O nome não pode ser vazio!
          </Alert>
        } */}

        {errorInt &&
          <Alert key="1234" variant="danger" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
            <Spinner animation="grow" variant="danger" /> Ops! algo deu errado com o servidor, tente novamente.
          </Alert>
        }



        </div>
    )
}