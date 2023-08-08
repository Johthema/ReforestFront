import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './cadarvore.module.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { FaListOl, FaListAlt } from "react-icons/fa";


export default function CadastroArvore() {
//APIs
const URL_API = process.env.NEXT_PUBLIC_API_URL+"tree";
const URL_API_CAT = process.env.NEXT_PUBLIC_API_URL+"category";

//variáveis de feedback
const [loading, setLoading] = useState(false);
const [aviso, setAviso] = useState(false);
const [errorInt, setErroInterno] = useState(false);
const [success, setSuccess] = useState(false);
const [error, setErro] = useState(false)
const [successDell, setSuccessDell] = useState(false);
//Variaveis de cadastro
const [name, setNome] = useState('');
const [cientificName, setCientificName] = useState('');
const [category, setCategory] = useState('');
const [img, setImg] = useState('image.jpg');
const [permanentCarbonTax, setPermanentCarbonTax] = useState('');
const [annualCarbonOffset, setAnnualCarbonOffset] = useState('');
const [carbonOffsetPeriod, setCarbonOffsetPeriod] = useState('');
const [treeHeight, setTreeHeight] = useState('');
const [treeDiameter, setTreeDiameter] = useState('');
const [fruitfulTree, setFruitfulTree] = useState(Boolean);
const [productionPeriod, setProductionPeriod] = useState('');
const [harvestReplace, setHarvestReplace] = useState('');
const [price, setPrice] = useState('');
const [description, setDescription] = useState('');
const [dataCat, setData] = useState([]);
const [reloadCount, setReloadCount] = useState(0);

//Funçãos de cadastro da árvore

const onChangeNome = (evt) => {
    setNome(evt.target.value)
   
  }
  const onChangeCientificName = (evt) => {
    setCientificName(evt.target.value)
   
  }

  const onChangePermanentCarbonTax = (evt) => {
    setPermanentCarbonTax(evt.target.value)
   
  }
  const onChangeCarbonOffsetPeriod = (evt) => {
    setCarbonOffsetPeriod(evt.target.value)
   
  }
  const onChangeAnnualCarbonOffset = (evt) => {
    //console.log("o valor anual é: ", evt)
    setAnnualCarbonOffset(evt.target.value)

   
  }
  const onChangeCategory=(cat) => {
    // console.log("a categoria é: ", evt)
    setCategory(cat)
   
  }
  


  const onChangeTreeHeight = (evt) => {
    setTreeHeight(evt.target.value)
   
  }
  const onChangeTreeDiameter = (evt) => {
    setTreeDiameter(evt.target.value)
   
  }
  const onChangeFruitfulTree = (evt) => {
    setFruitfulTree(evt)
   
  }
  const onChangeProductionPeriod = (evt) => {
    setProductionPeriod(evt.target.value)
   
  }
  const onChangeHarvestReplace = (evt) => {
    setHarvestReplace(evt.target.value)
   
  }
  const onChangePrice = (evt) => {
    setPrice(evt.target.value)
   
  }
  const onChangeImg = (evt) => {
    setImg(evt.target.value)
   
  }
  const onChangeDescription = (evt) => {
    setDescription(evt.target.value)
   
  }


    //Primeiro carregamengto para saber se esta tudo certo
    const fecthAllData = async () => {
    
      try {
  
       
        const response = await fetch(URL_API_CAT) //por padrão o fetch ja utiliza o GET
        const dataCat = await response.json()
  
        if (!dataCat)
          throw 'problema na requisição' //Aqui será tratado o erro de requisição. Porém é melhor tratar pelo status(200, 400, 500)
        setData(dataCat)
        console.log("categorias: ",dataCat)
  
        // setNome(dataCat.name)
        //Iniciando a estrutura da requisição
  
      } catch (error) {
        console.log(error)
      } finally {
        //setLoading(false)
      }
  
    }
   
    //useEffect Lida com o ciclo de vida da aplicação para não ficar em loop infinito
    useEffect(() => {
      fecthAllData();
  
    }, [reloadCount]);




const enviarForm = async (evt) => {

    evt.preventDefault()
    setLoading(true)
    try {
      

      const response = await fetch(URL_API, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        },

        body: JSON.stringify({ 
             name, cientificName, category, img,
             permanentCarbonTax, annualCarbonOffset, carbonOffsetPeriod,
             treeHeight, treeDiameter, fruitfulTree, productionPeriod,
             harvestReplace, price, description }),
      })

      const json = await response.json()
      // console.log("::",error.response)
    
       if (response.status == 400 ){
        console.log("o status é: ", response.status)
        setSuccess(false)
        setLoading(false)
        // setErroInterno(true)
        setErro(true)
        
      }  else if(response.status == 500){
        setSuccess(false)
        setLoading(false)
        setErroInterno(true)
      }
      else if(response.status == 200){
        setLoading(false)
        setSuccess(true)
      }
     
      // setLoading(false)

    } catch (err) {
        setSuccess(false)
        setLoading(false)
        setErroInterno(true)
      console.log(err)
    }
  }    

  const [show, setShow] = useState(true);








 

  return (
    <div className={Style.divCorpoArvore}>
    
    <Card className={Style.cardArvore}>
      <Card.Header>Cadastro de árvore</Card.Header>
      <Card.Body>

        <Form onSubmit={enviarForm} method='post'>
            <Form.Group className="mb-3" controlId="formGrouNome">
            <FloatingLabel controlId="floatingInput" label="Nome popular" className="mb-3">
                <Form.Control type="text" placeholder="Nome popular" onChange={onChangeNome} />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCientifico">
            <FloatingLabel controlId="floatingInput" label="Nome científico" className="mb-3">
                <Form.Control type="text" placeholder="Nome científico" onChange={onChangeCientificName} />
            </FloatingLabel>
            </Form.Group>
           
            <Card.Text>
           Taxa de compensação de CO2
            </Card.Text>

            <Row>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Taxa permanente" className="mb-3">
                    <Form.Control placeholder="Taxa permanente" onChange={onChangePermanentCarbonTax} />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Período" className="mb-3">
                    <Form.Control placeholder="Período" onChange={onChangeCarbonOffsetPeriod} />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Taxa anual" className="mb-3">
                    <Form.Control placeholder="Taxa anual" onChange={onChangeAnnualCarbonOffset} />
                </FloatingLabel>
                </Col>
            </Row>

            <Form.Group as={Col} controlId="formGridState">
            <br/>
            <Form.Select  onClick={(e)=>onChangeCategory(e.target.value) }>
            {dataCat && dataCat.map((item, i = index) => (

              <option key={item._id} value={item._id}>{item.name}</option>
  
            )
            )
            }
                        
                    </Form.Select>
            </Form.Group>
    <br/>
            <Row>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Vida natural média" className="mb-3">
                    <Form.Control placeholder="Vida natural média" onChange={onChangeProductionPeriod} />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Altura" className="mb-3">
                    <Form.Control placeholder="Altura " onChange={onChangeTreeHeight} />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Diâmetro" className="mb-3">
                    <Form.Control placeholder="Diâmetro" onChange={onChangeTreeDiameter}/>
                </FloatingLabel>
                </Col>
            </Row>
<br/>
            <Form.Group as={Row} className={Style.estiloRadio}>
                {/* <Form.Label as="legend" column sm={3}>
                    Árvore frutífera?
                </Form.Label> */}
                <Col>
                    <Form.Check onClick={()=>onChangeFruitfulTree(true) }
                    type="radio"
                    label="Árvore frutífera"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    />
                    </Col>
                    <Col>
                    <Form.Check  onClick={()=>onChangeFruitfulTree(false) }
                    type="radio"
                    label="Árvore não frutífera"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    />
                </Col>
            </Form.Group>
            <br/>
            <Row>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Período de produção" className="mb-3">
                <Form.Control placeholder="Período de produção" onChange={onChangeProductionPeriod} />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Tempo de colheita" className="mb-3">
                <Form.Control placeholder="Tempo de colheita" onChange={onChangeHarvestReplace} />
                </FloatingLabel>
                </Col>
              
            </Row>
<br/>
                <Row>
                <Col>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" className={Style.Preco} onChange={onChangeImg}/>
                </Form.Group>
                <Form.Control placeholder="Preço" className={Style.Preco} onChange={onChangePrice}/>
                </Col>
             
                </Row>
            <br/>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                   
                    <Form.Control as="textarea" rows={3}  placeholder='Descrição' onChange={onChangeDescription}/>
                </Form.Group>
                <br/>

        </Form>
       


        <br/>
        {/* <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        <Button variant="primary" onClick={enviarForm}>Salvar</Button>
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>





{success &&
    <Alert key="1232" variant="success" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
      <Spinner animation="grow" variant="success" /> Salvo com sucesso! | <Alert.Link href="/arvores/listarArvores">  <FaListAlt/> Ver lista de árvores</Alert.Link>
    </Alert>
  }
  
  {error &&
    <Alert key="1233" variant="danger" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
      <Spinner animation="grow" variant="danger" /> Ops! algo deu errado. Preencha todos os campos corretamente..
    </Alert>
  }
  
  {errorInt &&
    <Alert key="1234" variant="danger" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
      <Spinner animation="grow" variant="danger" /> Ops! algo deu errado com o servidor, tente novamente.
    </Alert>
  }
  
  {loading &&
    <Alert key="12345" variant="primary" className={Style.botaoCarregamento}>
      <Spinner animation="border" variant="primary" /> Aguarde, salvando...
    </Alert>
  }

</div>



  );
}  