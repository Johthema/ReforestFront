import Header from '../../../components/header/index';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './cadlocais.module.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Arvores from '../../../components/cards/cardArvore/index';
import { useState, useEffect, useRef } from 'react'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import axios from 'axios';
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaEdit, FaTrashAlt, FaSearch, FaFilter, FaRedoAlt, FaListOl } from 'react-icons/fa';
// import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import ImgArvore from '../../../assets/images/arvore_1.jpg';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem'



const URL_API = process.env.NEXT_PUBLIC_API_URL + "plantingPlace";
const URL_API_TREE = process.env.NEXT_PUBLIC_API_URL+"tree";
const URL_API_CATEGORY = process.env.NEXT_PUBLIC_API_URL+"category";

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

  const [repos, setRepo] = useState([]);
  const [pageQtd, setPageQtd] = useState(1);
  const [pageLimit, setPageLimit] = useState('9');

    //variáveis de filtros
    const [initialRepos, setInitialRepo] = useState([]);
    const [tipo, setTipo] = useState('todos');
    const [ordenar, setOrdenar] = useState('recente');
    const [contadorPage, setContadorPage] = useState('1');
    const [busca, setBusca] = useState('')
    const [categori, setCategori] = useState('');
    const [dadosCategoria, setDadosCat] = useState([])
  // const handleCepChange = (event) => {
  //   setCep(event.target.value);
  // };

  const [modalShow, setModalShow] = useState(false);
  // return (
  //   <Modal
   
  //     size="lg"
  //     aria-labelledby="contained-modal-title-vcenter"
  //     centered
  //   >
  //     <Modal.Header closeButton>
  //       <Modal.Title id="contained-modal-title-vcenter">
  //         Modal heading
  //       </Modal.Title>
  //     </Modal.Header>
  //     <Modal.Body>
  //       <h4>Centered Modal</h4>
  //       <p>
  //         Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
  //         dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
  //         consectetur ac, vestibulum at eros.
  //       </p>
  //     </Modal.Body>
  //     <Modal.Footer>
  //       {/* <Button onClick={props.onHide}>Close</Button> */}
  //     </Modal.Footer>
  //   </Modal>
  // );

  useEffect(() => {
    setUserId(localStorage.getItem("idUs"))

    axios.get('https://restcountries.com/v3.1/all')
    .then((response) => {
      setCountries(response.data);
      console.log("todos os paises: ", response.data)
    })
    .catch((error) => {
      console.error(error);
    });

    const fetchRepos = async () => {
      try {
        setLoading(true)
        console.log("o tipo de arvore é: ",tipo)
        // if(tipo!='todos'){
        //   // const response = await fetch(URL_API_TREE+"?order="+ordenar+"&role="+tipo)
        //   const response = await fetch(URL_API_TREE+"?search="+busca+"&page="+pageQtd+"&limit="+pageLimit) 
        //   const dados = await response.json();
        //   // const responseCat = await fetch(URL_API_CATEGORY)
        //   // const dadosCat = await responseCat.json(); 
        //   console.log("veja dados: ",dados)
        //   //console.log("veja dados categoria: ",dadosCat)

        // setInitialRepo(dados);
        // setRepo(dados);
        // setLoading(false)
        // } else
         if (tipo=='todos'){
          const response = await fetch(URL_API_TREE+"?search="+busca+"&category="+categori+"&page="+pageQtd+"&limit="+pageLimit)
          const dados = await response.json();
          const responseCat = await fetch(URL_API_CATEGORY)
          const dadosCat = await responseCat.json(); 
          
          console.log("veja dados categoria: ",dadosCat)
        setInitialRepo(dados);
        setRepo(dados);
        setDadosCat(dadosCat);
        setLoading(false)
        } 

      } catch (error) {
        console.log(error)
        setErroInterno(true)
      }
    }
    fetchRepos()
  },[reloadCount]);


//-------------------------Paginação
const paginacao = (qtd) => {
  // setPageLimit(qtd)
  setPageQtd(qtd)
  setLoading(true)
  setReloadCount(prevCount => prevCount + 1);

}

const paginaContador = (prop) => {
  
  if(prop == 'sum'){
    setPageQtd(pageQtd+1)
    setReloadCount(prevCount => prevCount + 1);
  } else if(prop == 'sub'){
    setPageQtd(pageQtd-1)
    setReloadCount(prevCount => prevCount + 1);
  }
}





//  Filtro de busca
  



  function MyVerticallyCenteredModal(props) {




    const handleCampo1KeyPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        setBusca(e.target.value)
        setLoading(true)
        setReloadCount(prevCount => prevCount + 1);
        console.log("os dados salvos na variavel: ",e.target.value )
      }
    };

    function onChangeTodos (){
      setBusca('')
      setLoading(true)
      setReloadCount(prevCount => prevCount + 1);
    }
    const onChangeFilterCategoria=(cate)=> {
      setCategori(cate);
      setLoading(true)
      setReloadCount(prevCount => prevCount + 1);
    }


    
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      > 
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Árvores disponíveis
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={Style.divSubtituloModal}>
            <h4>Selecione quais tipos de árvores deseja plantar nesta região</h4>
          </div>
          
 


          <div className={Style.divFundo}>

            <Navbar className={Style.headerTabela}>
              <Container>
             
                <Form.Group className={Style.Busca}>
                  <Form.Control
                  type="text"
                    placeholder="Buscar por nome"
                    id="meuInput"
                    onKeyPress={handleCampo1KeyPress}
                  />

                </Form.Group> 
              

                <Dropdown className={Style.DropMENU}>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic" className={Style.IconeMENU}>
                  <Nav.Link> <FaFilter className={Style.Icon} />Mostrar</Nav.Link>

                  </Dropdown.Toggle>

                  <Dropdown.Menu  className={Style.OpDropNotifi}>
                  <Dropdown.Item onClick={() => onChangeTodos("todos")}>Todos</Dropdown.Item>
                  <hr/>
                  {dadosCategoria.map((item, index)=>(
                    <Dropdown.Item key={index} onClick={() => onChangeFilterCategoria(item.name)}>{item.name}</Dropdown.Item>
                  ))}
                    {/* <Dropdown.Item onClick={() => onChangeRoles("user")}>Usuário</Dropdown.Item>
                    <Dropdown.Item onClick={() => onChangeRoles("admin")}>Administrador</Dropdown.Item> */}

                  </Dropdown.Menu>
                </Dropdown>
                {/* <Dropdown >
                      <Dropdown.Toggle variant="primary" id="dropdown-basic" className={Style.IconeMENU}>
                      <Nav.Link><FaListOl className={Style.Icon} />Ordenar</Nav.Link>
                      
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => onChangeOrdem("recente")}>Mais recente</Dropdown.Item>
                        <Dropdown.Item onClick={() => onChangeOrdem("antigo")}>Mais antigo</Dropdown.Item>
                      </Dropdown.Menu>
                </Dropdown> */}

              </Container>
            </Navbar>

           

              <tbody>
              <div className={Style.divFundoModal}>

 
                {repos.map((item,index) => (

                  // <tr className={Style.trUsuario} key={index}>
                  //   <td className={Style.tdUsuario}><h2 key={repo._id} className={Style.FontUsuario}> {repo.name}</h2></td>
                  //   <td className={Style.tdUsuario}><h2 key={repo._id} className={Style.FontUsuario}> {repo.cientificName}</h2></td>
                  //   <td className={Style.tdUsuario}><h2 key={repo._id} className={Style.FontUsuario}> {repo.price}</h2></td>
                  //   <td className={Style.tdUsuario}><h2 key={repo._id} className={Style.FontUsuario}> {repo.createdAt}</h2></td>

                  //   <td className={Style.Editar} value={repo._id} onClick={() => handleShowEdit(repo._id, repo.category.name)}><FaEdit className={Style.icoEditar} /></td>
                  //   <td className={Style.Deletar} value={repo._id} onClick={() => idArvore(repo._id, repo.name)} ><FaTrashAlt className={Style.icoDeletar} /></td>
                  // </tr>
 
                  <Card className={Style.Card} key={index}>
                      <Card.Header className={Style.HeaderCard0}>
                        <div className={Style.HeaderCard}>
                            
                              {item.approved == true &&
                              <h3 className={Style.StatusCard} >
                              Aprovado
                              </h3>
                              }
                              {item.approved == false &&
                              <h3 className={Style.StatusCard2} >
                              Reprovado
                              </h3>
                              }
                              
                            <div className={Style.opcoesCard}>
                            {/* <FaEdit className={Style.iconeCard}/> */}
                            {/* <CloseButton/> */}
                            <Form.Check // prettier-ignore
           
           
                  />
                            {/* <FaRegWindowClose className={Style.iconeCard}/> */}
                            </div>
                        </div>
                        
                      </Card.Header>
                      
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        {/* <Image src={ImgArvore} className={Style.imgArvore} alt=""/> */}
                        <Image src={ImgArvore} className={Style.imgArvore} alt=""/>
                      </Card.Body>
                      <Card.Footer className="text-muted">
                      {/* <Form.Control type="number" placeholder="Quantidade" /> */}
                      <h5>Categoria: {item.category.name}</h5>
                      </Card.Footer>
                    </Card>

                ))}
                 
                <div className={Style.divPaginacao}>
                  <Pagination>
                    <Pagination.First onClick={()=>paginacao(1)} />
                    <Pagination.Prev onClick={()=>paginaContador('sub')} />
                    <Pagination.Item onClick={()=>paginacao(pageQtd)}  active>{pageQtd}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item onClick={()=>paginacao(pageQtd+2)} disabled={pageQtd >= 125}>{pageQtd+2}</Pagination.Item>
                    <Pagination.Item onClick={()=>paginacao(pageQtd+3)} disabled={pageQtd >= 125}>{pageQtd+3}</Pagination.Item>
                    <Pagination.Item onClick={()=>paginacao(pageQtd+4)} disabled={pageQtd >= 125}>{pageQtd+4}</Pagination.Item>
                    {/* <Pagination.Item onClick={()=>paginacao(pageQtd+5)} disabled={pageQtd >= 130}>{pageQtd+5}</Pagination.Item> */}
                   

                    <Pagination.Ellipsis />
                    <Pagination.Item onClick={()=>paginacao(pageQtd+20)} disabled={pageQtd >= 125}>{pageQtd+20}</Pagination.Item>
                    <Pagination.Next onClick={()=>paginaContador('sum')} disabled={pageQtd >= 125} />
                    <Pagination.Last onClick={()=>paginacao(130)} disabled={pageQtd >= 125}/>
                  </Pagination>
                </div>
</div>

              </tbody>
          

          </div>



        

          {/* <Arvores /> */}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Cancelar</Button>
        </Modal.Footer> */}
      </Modal>
      
    );
  }


 





  // useEffect(() => {
  //   axios.get('https://restcountries.com/v3.1/all')
  //     .then((response) => {
  //       setCountries(response.data);
  //       console.log("todos os paises: ", response.data)
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);


//------------Buscar automaticamente o endereço através do cep inserido
  const handleSearch = async (ce) => {
    // onChangeAddress(dadosEndereco.logradouro)
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${ce}/json/`);
      const data = response.data;
      console.log("o end: ", data)
      setDadosEndereco(data)
      setAddress(data.logradouro)
      setCity(data.localidade)
      console.log("dados do cep: ", data)

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
  const onChangeDescription = (evt) => {
    setDescription(evt.target.value)
  }
  const onChangeAddress = (evt) => {
    console.log("o endereco é: ", evt)
    setAddress(evt.target.value)
  }
  const onChangePostalCode = (evt) => {
    console.log("o vet: ", evt)
    setPostalCode(evt.target.value)

    if (contador == 7) {
      evt.preventDefault();
      setCep(evt.target.value)
      // setAddress(dadosEndereco.logradouro)

      handleSearch(evt.target.value)

      inputCampo2.current.focus(); // Foca no próximo campo de input
    } else
      setContador(contador + 1)

    // setCep(evt.target.value)
    // handleSearch()
  }
  const onChangeCity = (evt) => {
    setCity(evt.target.value)
  }
  const onChangeCountry = (evt) => {
    setCountry(evt)
  }
  const onChangeLatitude = (evt) => {
    setLatitude(evt.target.value)
  }
  const onChangeLongitude = (evt) => {
    setLongitude(evt.target.value)
  }
  const onChangeTreesToBePlanted = (evt) => {
    if (evt.target.value === '' || (evt.target.value >= 0 && !isNaN(evt.target.value))) {

      setTreesToBePlanted(evt.target.value)
    }



  }
  const onChangeHectare = (evt) => {
    setHectare(evt.target.value)
  }
  const onChangePlantedTrees = (evt) => {
    if (evt.target.value === '' || (evt.target.value >= 0 && !isNaN(evt.target.value))) {

      setPlantedTrees(evt.target.value)
    }


  }
  const onChangeFalledTrees = (evt) => {
    if (evt.target.value === '' || (evt.target.value >= 0 && !isNaN(evt.target.value))) {
      setFalledTrees(evt.target.value)
    }

  }
  const onChangeLimitTrees = (evt) => {
    setLimitTrees(evt.target.value)
  }
  const onChangeIrrigation = (evt) => {
    console.log("irrigacao: ", evt.target.checked)
    if (evt.target.checked == true) {
      setIrrigation(true)
    } else if (evt.target.checked == false) {
      setIrrigation(false)
    }

  }
  const onChangeNursery = (evt) => {
    console.log("viveiro: ", evt.target.checked)
    if (evt.target.checked == true) {
      setNursery(true)
    } else if (evt.target.checked == false) {
      setNursery(false)
    }

  }


  // const onChangeTrees = (evt) =>{
  //     setTrees(evt.target.value)
  // }




  // console.log("tokenId: ",localStorage.getItem("tokenId"))

  // useEffect(() => {
  //   // setTokenI(localStorage.getItem("tokenId"))
  //   console.log("Id do usuario: ", localStorage.getItem("idUs"))
  //   setUserId(localStorage.getItem("idUs"))
  //   // console.log();
  //   // fecthAllData();


  // }, [reloadCount]);

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
      })
      // .then(response => response.json())
      // .then(data => {
      //   console.log(data); // Exibe a resposta do servidor no console
      //   //const resp = data.message
      //   setResposta(data.message)




      // })

      if (response.status == 400) {
        console.log("o status é: ", response)

        setSuccess(false)
        setLoading(false)
        setErroInterno(true)
        //setErro(true)

      } else if (response.status == 500) {
        setSuccess(false)
        setLoading(false)
        setErroInterno(true)
      }
      else if (response.status == 200) {
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
      console.log("aqui é o erro: ", err)
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
                  <Form.Control type="text" placeholder="Nome" onChange={onChangeNome} />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder='Descrição' onChange={onChangeDescription} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupCdgPostal">
                <FloatingLabel controlId="floatingInput" label="Código postal" className="mb-3">
                  <Form.Control type="text" placeholder="Código postal" onChange={onChangePostalCode} onKeyPress={handleCampo1KeyPress} maxLength={10} />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupLocalizacao">
                <FloatingLabel controlId="floatingInput" label="latitude" className="mb-3">
                  <Form.Control type="text" placeholder="latitude" onChange={onChangeLatitude} ref={inputCampo2} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Longitude" className="mb-3">
                  <Form.Control type="text" placeholder="Longitude" onChange={onChangeLongitude} />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEndereco">

              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupEndereco">
                <FloatingLabel controlId="floatingInput" label="Endereço" className="mb-3">
                  <Form.Control type="text" placeholder="Endereço" value={dadosEndereco.logradouro} onChange={onChangeAddress} />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupCidade">
                <FloatingLabel controlId="floatingInput" label="Cidade" className="mb-3">
                  <Form.Control type="text" placeholder="Cidade" value={dadosEndereco.localidade} onChange={onChangeCity} />
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

                  <Form.Select onClick={(e) => onChangeCountry(e.target.value)}>
                    {countries.map((country, i = index) => (
                      // <option key={item._id} value={item._id}>{item.name}</option>
                      <option key={country.cca2} value={country.cca2}>
                        {country.name.common} - {country.cca2}
                      </option>
                    ))}


                  </Form.Select>


                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupHectare">
                <FloatingLabel controlId="floatingInput" label="Hectare" className="mb-3">
                  <Form.Control type="text" placeholder="Hectare" onChange={onChangeHectare} />
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
                  <Form.Control type="number" placeholder="Árvores derrubadas" onChange={onChangeFalledTrees} />
                </Col>
                <Col>
                  <Form.Control type="number" placeholder="Árvores ja plantadas " onChange={onChangePlantedTrees} />
                </Col>
                <Col>
                  <Form.Control type="number" placeholder="Árvores a plantar" onChange={onChangeTreesToBePlanted} />
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

              <br />
              <Row>
                <Col>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" className={Style.Preco} />
                  </Form.Group>
                  {/* <Form.Control placeholder="Árvores" className={Style.Preco} onChange={onChangeTrees}/> */}
                </Col>

              </Row>
              <br />
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Selecione árvores
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              {/* <Arvores /> */}

            </Form>

            <br />

            <Button variant="primary" onClick={enviarForm} className={Style.botaoSalvar}>Salvar</Button>
          </Card.Body>
          {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Card>

        {/* ------------------------------------Escolha de arvores------------------------------------- */}





        {success &&
          <Alert key="1232" variant="success" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
            <Spinner animation="grow" variant="success" /> Salvo com sucesso! | <Alert.Link href="/locaisPlantacao/listaLocais">Ver lista de locais</Alert.Link>
          </Alert>
        }

        {loading &&
          <Alert key="12345" variant="primary" className={Style.botaoCarregamento}>
            <Spinner animation="border" variant="primary" /> Aguarde, carregando...
          </Alert>
        }

        {aviso &&
          <Alert key="123456" variant="primary" className={Style.botaoCarregamento} dismissible>
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