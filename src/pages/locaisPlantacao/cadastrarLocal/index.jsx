import Header from '../../../components/header/index';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './cadlocais.module.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Arvores from '../../../components/cards/cardArvore/index';
import {useState, useEffect,  useRef} from 'react'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import axios from 'axios';
import Image from 'next/image';


const URL_API = process.env.NEXT_PUBLIC_API_URL+"plantingPlace";

export default function CadastrarLocal() {
    //Variáveis de feedback
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
    const [irrigation, setIrrigation] = useState(Boolean);
    const [nursery, setNursery] = useState(Boolean);
    const [trees, setTrees] = useState([]);
    const [aviso, setAviso] = useState(false);
    const [errorInt, setErroInterno] = useState(false);
    const [success, setSuccess] = useState(false);
    const [resposta, setResposta] = useState('')
    const [dadosEndereco, setDadosEndereco] = useState('')

    const [cep, setCep] = useState('');
    const [location, setLocation] = useState(null);
    
    const [contador, setContador] = useState(0);

    const [countries, setCountries] = useState([]);
    // const handleCepChange = (event) => {
    //   setCep(event.target.value);
    // };



    useEffect(() => {
      axios.get('https://restcountries.com/v3.1/all')
        .then((response) => {
          setCountries(response.data);
          console.log("todos os paises: ", response.data)
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);


 
    const handleSearch = async (ce) => {
      // onChangeAddress(dadosEndereco.logradouro)
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${ce}/json/`);
        const data = response.data;
        console.log("o end: ",data)
        setDadosEndereco(data)
        setAddress(data.logradouro)
        setCity(data.localidade)
        console.log("dados do cep: ", data )

        if (data && data.cep) {
          setLocation({
            latitude: data.lat,
            longitude: data.lon,
          });
        } else {
          setLocation(null);
        }
      } catch (error) {
        console.error('Error fetching geolocation data:', error);
      }
    };

    const inputCampo2 = useRef(null);
    const handleCampo1KeyPress = (e) => {
      // console.log("o e: ",e)
      // console.log("soma e: ",contador)
      
      // if (contador == 8){
      //   e.preventDefault();
      //   handleSearch()
      //   inputCampo2.current.focus(); // Foca no próximo campo de input
      // } else
      // setContador(contador+1)
      // if (e.key === 'Enter') {
      //   e.preventDefault();
      //   handleSearch()
      //   inputCampo2.current.focus(); // Foca no próximo campo de input
      // }
    };

    // const handleKeyPress = (e) => {
        
    //   if (e.key === 'Enter') {
    //       enviarForm()
    //   }
    // };


    //Funçãos de cadastro da árvore
   
    const onChangeUserId = (evt) => {
        setUserId(localStorage.getItem("tokenId"))
    
    }
    const onChangeNome = (evt) => {
        setNome(evt.target.value)
   
    }
    const onChangeDescription = (evt) =>{
        setDescription(evt.target.value)
    }
    const onChangeAddress = (evt) =>{
      console.log("o endereco é: ", evt)
        setAddress(evt.target.value)
    }
    const onChangePostalCode = (evt) =>{
      console.log("o vet: ", evt)
        setPostalCode(evt.target.value)

        if (contador == 7){
          evt.preventDefault();
          setCep(evt.target.value)
          setAddress(dadosEndereco.logradouro)
          
          handleSearch(evt.target.value)
          
          inputCampo2.current.focus(); // Foca no próximo campo de input
        } else
        setContador(contador+1)

        // setCep(evt.target.value)
        // handleSearch()
    }
    const onChangeCity = (evt) =>{
        setCity(evt.target.value)
    }
    const onChangeCountry = (evt) =>{
        setCountry(evt)
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


    // const onChangeTrees = (evt) =>{
    //     setTrees(evt.target.value)
    // }

    
    
  
    // console.log("tokenId: ",localStorage.getItem("tokenId"))

    useEffect(() => {
        // setTokenI(localStorage.getItem("tokenId"))
        console.log("Id do usuario: ",localStorage.getItem("idUs"))
        setUserId(localStorage.getItem("idUs"))
        // console.log();
        // fecthAllData();
       
    
      }, [reloadCount]);

      const [show, setShow] = useState(true);

    const enviarForm = async (evt) => {
console.log("entrou pra enviar Form")
setAddress(dadosEndereco.logradouro)
        evt.preventDefault()
        setLoading(true)
        try {
          
          console.log("Tentou")
          const response = await fetch(URL_API, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json'
            },
    
            body: JSON.stringify({ 
                userId, name, description, address, postalCode,
                country, city, latitude, longitude, treesToBePlanted, hectare,
                plantedTrees, falledTrees, limitTrees, irrigation, nursery,
                //  trees
            }),
          }).then(response => response.json())
          .then(data => {
            //console.log(data); // Exibe a resposta do servidor no console
            //const resp = data.message
            setResposta(data.message)
           
             


          })

          if (response.status == 400 ){
            console.log("o status é: ", response)
           
            setSuccess(false)
            setLoading(false)
            setErroInterno(true)
            //setErro(true)
            
          }  else if(response.status == 500){
            setSuccess(false)
            setLoading(false)
            setErroInterno(true)
          }
          else if(response.status == 200){
            console.log("entrou no estatus 200")
            setLoading(false)
            setSuccess(true)
          }
    
          const json = await response.json()
          // console.log("::",error.response)
        

          // setLoading(false)
    
        } catch (err) {
            //setSuccess(false)
            //setLoading(false)
            //setErroInterno(true)
          console.log("aqui é o erro: ",err)
        }
      }    
 

  return (
  <>
         <Header></Header>
<div className={Style.divFundocadastro}>
<Breadcrumb className={Style.migalhas}>
  <Breadcrumb.Item href="/home">Home  </Breadcrumb.Item>   
  <Breadcrumb.Item active>Cadastro de Local.</Breadcrumb.Item>
</Breadcrumb>

   
    <Card className={Style.cardArvore}>
      <Card.Header>Cadastro do Local</Card.Header>
      <Card.Body>

        <Form onSubmit={enviarForm} method='post'>
            <Form.Group className="mb-3" controlId="formGrouNome">
            <FloatingLabel controlId="floatingInput" label="Nome" className="mb-3">
                <Form.Control type="text"  placeholder="Nome"  onChange={onChangeNome} />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea"  rows={3}  placeholder='Descrição'  onChange={onChangeDescription}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCdgPostal">
            <FloatingLabel controlId="floatingInput" label="Código postal" className="mb-3">
                <Form.Control type="text"  placeholder="Código postal" onChange={onChangePostalCode} onKeyPress={handleCampo1KeyPress} maxLength={10} />
            </FloatingLabel> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupLocalizacao">
            <FloatingLabel controlId="floatingInput" label="latitude" className="mb-3">
                <Form.Control type="text" placeholder="latitude"  onChange={onChangeLatitude} ref={inputCampo2}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Longitude" className="mb-3">
                <Form.Control type="text" placeholder="Longitude"  onChange={onChangeLongitude}/>
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEndereco">
            
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEndereco">
            <FloatingLabel controlId="floatingInput" label="Endereço" className="mb-3">
                <Form.Control type="text"  placeholder="Endereço" value={dadosEndereco.logradouro}  onChange={onChangeAddress} />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCidade">
            <FloatingLabel controlId="floatingInput" label="Cidade" className="mb-3">
                <Form.Control type="text" placeholder="Cidade" value={dadosEndereco.localidade}  onChange={onChangeCity} />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPais">
            <FloatingLabel controlId="floatingInput" label="País" className="mb-3">
                {/* <Form.Control type="text" placeholder="Pais" value={dadosEndereco.country} onChange={onChangeCountry} /> */}
                {/* <Form.Select aria-label="Default select example">
                {countries.map((country) => (
                    <option key={country.cca2} value={country.cca2}>
                    
                     {country.name.common} - {country.cca2}
                      </option>  */}

<Form.Select  onClick={(e)=>onChangeCountry(e.target.value) }>
{countries.map((country, i = index) => (

  // <option key={item._id} value={item._id}>{item.name}</option>

  <option key={country.cca2} value={country.cca2}>
                    
  {country.name.common} - {country.cca2}
   </option>




        
        ))}

      {/* <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option> */}
    </Form.Select>

             


                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupHectare">
            <FloatingLabel controlId="floatingInput" label="Hectare" className="mb-3">
                <Form.Control type="text" placeholder="Hectare"  onChange={onChangeHectare} />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupLimite">
            <FloatingLabel controlId="floatingInput" label="limite" className="mb-3">
                <Form.Control type="text" placeholder="Hectare" onChange={onChangeLimitTrees} />
            </FloatingLabel>
            </Form.Group>

            <Card.Text>
            Quantidade
            </Card.Text>

            <Row>
                <Col>
                  <Form.Control type="number" placeholder="Árvores derrubadas" onChange={onChangeFalledTrees}/>
                </Col>
                <Col>
                  <Form.Control type="number" placeholder="Árvores ja plantadas " onChange={onChangePlantedTrees}/>
                </Col>
                <Col>
                  <Form.Control type="number"  placeholder="Árvores a plantar" onChange={onChangeTreesToBePlanted}/>
                </Col>
            </Row>
 
            <Card.Text>
            {/* Total: Árvores plantadas + árvores a plantar */}
            </Card.Text>
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
                onChange={onChangeNursery}
            />
                </Col>

            </Row>
           
    <br/>
                <Row>
                <Col>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" className={Style.Preco}/>
                </Form.Group>
                {/* <Form.Control placeholder="Árvores" className={Style.Preco} onChange={onChangeTrees}/> */}
                </Col>
             
                </Row>
    <br/>

    <Arvores/>

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
</div>
    </>
  );
 
}  