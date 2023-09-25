'use client'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './cardCadLocalEdit.module.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
//import Arvores from '../../../components/cards/cardArvore/index';
import {useState, useEffect} from 'react'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

const URL_API = process.env.NEXT_PUBLIC_API_URL+"plantingPlace";

export default function EditarLocal({handleShowEdit}) {
    //Variáveis de feedback
    const [idEditavel, setIdEditavel] = useState(handleShowEdit[0])
    const [loading, setLoading] = useState(false);
    //Variáveis de cadastro
    const [reloadCount, setReloadCount] = useState(0);
    const [userId, setUserId] = useState('');
    const [name, setNome] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [hectare, setHectare] = useState('');
    const [treesToBePlanted, setTreesToBePlanted] = useState(0);
    const [plantedTrees, setPlantedTrees] = useState(0);
    const [falledTrees, setFalledTrees] = useState('');
    const [limitTrees, setLimitTrees] = useState('');
    const [irrigation, setIrrigation] = useState(handleShowEdit[1]);
    const [nursery, setNursery] = useState(handleShowEdit[2]);
    const [trees, setTrees] = useState([]);
    const [aviso, setAviso] = useState(false);
    const [errorInt, setErroInterno] = useState(false);
    const [success, setSuccess] = useState(false);
    const [resposta, setResposta] = useState('')
    const [data, setData] = useState([])

    //Funçãos de cadastro da árvore

    const onChangeUserId = (evt) => {
        //setUserId('64ac0c12560efc2fb7c20ffc')
    
    }
    const onChangeNome = (evt) => {
        setNome(evt.target.value)
   
    }
    const onChangeDescription = (evt) =>{
        setDescription(evt.target.value)
    }
    const onChangeAddress = (evt) =>{
        setAddress(evt.target.value)
    }
    const onChangePostalCode = (evt) =>{
        setPostalCode(evt.target.value)
    }
    const onChangeCity = (evt) =>{
        setCity(evt.target.value)
    }
    const onChangeCountry = (evt) =>{
        setCountry(evt.target.value)
    }
    const onChangeLatitude = (evt) =>{
        setLatitude(evt.target.value)
    }
    const onChangeLongitude = (evt) =>{
        setLongitude(evt.target.value)
    }
    const onChangeTreesToBePlanted = (evt) =>{
        if (evt.target.value === '' || (evt.target.value >= 0 && !isNaN(evt.target.value))) {
          
            setTreesToBePlanted(evt.target.value)
          }
       
    }
    const onChangeHectare = (evt) =>{
        setHectare(evt.target.value)
    }  
    const onChangePlantedTrees = (evt) =>{
        if (evt.target.value === '' || (evt.target.value >= 0 && !isNaN(evt.target.value))) {
          
            setPlantedTrees(evt.target.value)
          }
       
        
    }
    const onChangeFalledTrees = (evt) =>{
        if (evt.target.value === '' || (evt.target.value >= 0 && !isNaN(evt.target.value))) {
            setFalledTrees(evt.target.value)
          }
        
    }
    const onChangeLimitTrees = (evt) =>{
        setLimitTrees(evt.target.value)
    }
    const onChangeIrrigation = (evt) =>{
        console.log("irrigacao: ", evt.target.checked)
        if(evt.target.checked == true){
            setIrrigation(true)
        } else if (evt.target.checked == false) {
            setIrrigation(false)
        }
        
    }
    const onChangeNursery = (evt) =>{
        console.log("viveiro: ", evt.target.checked)
        if (evt.target.checked == true){
            setNursery(true)
        } else if(evt.target.checked == false){
            setNursery(false)
        }
        
    }

    const fecthAllData = async () => {
        try {
    
        //   setLoading(true)
          const response = await fetch(URL_API+"/"+idEditavel) //por padrão o fetch ja utiliza o GET
          const data = await response.json()
          console.log("O conteudo: ",data);
    
          if (!data)
            throw 'problema na requisição' //Aqui será tratado o erro de requisição. Porém é melhor tratar pelo status(200, 400, 500)
          setData(data)

          //Setando as variáveis com os atributos vindo da api após o data ser setado. para não passar vazio no envio do formulario
          setNome(data.name)
          setUserId(localStorage.getItem("idUs")),
          // setUserId('64ac0c12560efc2fb7c20ffc'), ok esse funciona
          setDescription(data.description), 
          setAddress(data.address), 
          setPostalCode(data.postalCode),
          setCountry(data.country), 
          setCity(data.city), 
          setLatitude(data.latitude), 
          setLongitude(data.longitude), 
          setTreesToBePlanted(data.treesToBePlanted), 
          setHectare(data.hectare),
          setPlantedTrees(data.plantedTrees), 
          setFalledTrees(data.falledTrees), 
          setLimitTrees(data.limitTrees), 
          setIrrigation(data.irrigation), 
          setNursery(data.nursery)
          
    
          const response2 = await fetch(URL_API) //por padrão o fetch ja utiliza o GET
          const dataCat = await response2.json()
    
          if (!dataCat)
            throw 'problema na requisição' //Aqui será tratado o erro de requisição. Porém é melhor tratar pelo status(200, 400, 500)
        //   setDataCat(dataCat)
          setData(dataCat)
          console.log("categorias: ",dataCat)
    
    
          //Iniciando a estrutura da requisição
    
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
     
      }
        //console.log("o role que retornou é: ", roles)
      //useEffect Lida com o ciclo de vida da aplicação para não ficar em loop infinito
      useEffect(() => {
        setUserId(localStorage.getItem("idUs"))
        console.log("usuario ID Logado: ", localStorage.getItem("idUs") )
        fecthAllData();
    
      }, [reloadCount]);

      const [show, setShow] = useState(true);


      const enviarForm = async (evt) => {

        evt.preventDefault()
        try {
          setLoading(true)
    
          const response = await fetch(URL_API+"/"+idEditavel, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json'
            },
    
            body: JSON.stringify({ 
                userId, name, description, address, postalCode,
                country, city, latitude, longitude, treesToBePlanted, hectare,
                plantedTrees, falledTrees, limitTrees, irrigation, nursery }),
          })
    
          const json = await response.json()
       
           if (response.status == 400){
            console.log("o status é: ", response.status)
            setSuccess(false)
            setLoading(false)
            //setErroInterno(true)
            setErro(true)
             
          } 
          else if(response.status == 500){
            setLoading(false)
            setErroInterno(true)
          }
          else if(response.status == 200){
            setLoading(false)
            setSuccess(true)
           
          }
         
          // setLoading(false)

          setTimeout(() => { //Uso do setTimeout para fechar o alert dos dados
            setSuccess(false);
            window.location.reload()
            // setReloadCount(prevCount => prevCount + 1);
          }, 2000);
          
     
        } catch (err) {
            setSuccess(false)
            setLoading(false)
            setErroInterno(true)
          console.log(err)
        }
      }   


  return (
  <>

   
    <Card className={Style.cardArvore}>
      <Card.Header>Dados do Local</Card.Header>
      <Card.Body>

        <Form onSubmit={enviarForm} method='put'>
            <Form.Group className="mb-3" controlId="formGrouNome">
            <FloatingLabel controlId="floatingInput" label="Nome" className="mb-3">
                <Form.Control type="text"  placeholder="Nome"  value={data.name}  onChange={onChangeNome} />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea"  rows={3}  placeholder='Descrição' value={data.description}  onChange={onChangeDescription}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupLocalizacao">
            <FloatingLabel controlId="floatingInput" label="latitude" className="mb-3">
                <Form.Control type="text" placeholder="latitude" value={data.latitude} onChange={onChangeLatitude} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Longitude" className="mb-3">
                <Form.Control type="text" placeholder="Longitude" value={data.longitude} onChange={onChangeLongitude} />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEndereco">
            
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCdgPostal">
            <FloatingLabel controlId="floatingInput" label="Código postal" className="mb-3">
                <Form.Control type="text"  placeholder="Código postal"  onChange={onChangePostalCode} value={data.postalCode} />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEndereco">
            <FloatingLabel controlId="floatingInput" label="Endereço" className="mb-3">
                <Form.Control type="text"  placeholder="Endereço"  onChange={onChangeAddress} value={data.address} />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCidade">
            <FloatingLabel controlId="floatingInput" label="Cidade" className="mb-3">
                <Form.Control type="text" placeholder="Cidade"  onChange={onChangeCity} value={data.city}/>
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPais">
            <FloatingLabel controlId="floatingInput" label="País" className="mb-3">
                <Form.Control type="text" placeholder="Pais" onChange={onChangeCountry} value={data.country}/>
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupHectare">
            <FloatingLabel controlId="floatingInput" label="Hectare" className="mb-3">
                <Form.Control type="text" placeholder="Hectare" onChange={onChangeHectare} value={data.hectare}/>
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupLimite">
            <FloatingLabel controlId="floatingInput" label="limite" className="mb-3">
                <Form.Control type="text" placeholder="limite" onChange={onChangeLimitTrees} value={data.limitTrees} />
            </FloatingLabel>
            </Form.Group>

            <Card.Text>
            Quantidade
            </Card.Text>

            <Row>
                <Col>
                  <Form.Control type="number" placeholder="Árvores derrubadas" onChange={onChangeFalledTrees} value={data.falledTrees}/>
                </Col>
                <Col>
                  <Form.Control type="number" placeholder="Árvores ja plantadas " onChange={onChangePlantedTrees} value={data.plantedTrees}/>
                </Col>
                <Col>
                  <Form.Control type="number"  placeholder="Árvores a plantar" onChange={onChangeTreesToBePlanted} value={data.treesToBePlanted}/>
                </Col>
            </Row>
  
            <Card.Text>
            {/* Total: Árvores plantadas + árvores a plantar */}
            </Card.Text>
            { irrigation ==true && nursery == false &&
            <Row className={Style.estiloRadio}>
            <Col>
            <Form.Check 
            type="switch"
            id="custom-switch"
            label="Possui irrigação"
            checked
            onChange={onChangeIrrigation}
        />
            </Col>
            <Col>
            <Form.Check 
            type="switch"
            id="custom-switch"
            label="Possui viveiro"
            onChange={onChangeNursery}
        />
            </Col>

        </Row>
            }
            {irrigation == false && nursery==true && 
            <Row className={Style.estiloRadio}>
            <Col>
            <Form.Check 
            type="switch"
            id="custom-switch"
            label="Possui irrigação"
                      
            onChange={onChangeIrrigation}
        />  
            </Col>
            <Col>
            <Form.Check 
            type="switch"
            id="custom-switch"
            label="Possui viveiro"
            checked
            onChange={onChangeNursery}
        />
            </Col>

        </Row>
            }
            {irrigation == true && nursery==true && 
            <Row className={Style.estiloRadio}>
            <Col>
            <Form.Check 
            type="switch"
            id="custom-switch"
            label="Possui irrigação"
            checked            
            onChange={onChangeIrrigation}
        />
            </Col>
            <Col>
            <Form.Check 
            type="switch"
            id="custom-switch"
            label="Possui viveiro"
            checked
            onChange={onChangeNursery}
        />
            </Col>

        </Row>
            }

            {/* <Row className={Style.estiloRadio}>
                <Col>
                <Form.Check 
                type="switch"
                id="custom-switch"
                label="Possui irrigação"
                value={irrigation? true : false}
                 
                onChange={onChangeIrrigation}
            />
                </Col>
                <Col>
                <Form.Check 
                type="switch"
                id="custom-switch"
                label="Possui viveiro"
                value={nursery}
                onChange={onChangeNursery}
            />
                </Col>
 
            </Row> */}
           
    <br/>
                <Row>
                <Col>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" className={Style.Preco} />
                </Form.Group>
                {/* <Form.Control placeholder="Árvores" className={Style.Preco} onChange={onChangeTrees}/> */}
                </Col>
             
                </Row>
    <br/>

    {/* <Arvores/> */}

        </Form>
       
        <br/>
   
        <Button variant="primary" onClick={enviarForm} className={Style.botaoSalvar}>Salvar</Button>
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>




    {success &&
          <Alert key="1232" variant="success" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
            <Spinner animation="grow" variant="success" /> Salvo com sucesso!
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
            <Spinner animation="grow" variant="danger" /> Ops! algo deu errado com o servidor, Obs:  {resposta}
          </Alert>
        }

    </>
  );
 
}  