import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './cardarvore.module.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { FaListOl, FaListAlt } from "react-icons/fa";


export default function EditarArvore({handleShowEdit}) {
//API
const URL_API = process.env.NEXT_PUBLIC_API_URL+"tree/";

//variáveis de feedback

const [idEditavel, setIdEditavel] = useState(handleShowEdit)
const [loading, setLoading] = useState(false);
const [aviso, setAviso] = useState(false);
const [errorInt, setErroInterno] = useState(false);
const [success, setSuccess] = useState(false);
const [error, setErro] = useState(false)
const [successDell, setSuccessDell] = useState(false);
//Variaveis de cadastro
const [data, setData] = useState([])
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
    console.log("o valor anual é: ", evt)
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



  const fecthAllData = async () => {
    try {

    //   setLoading(true)
      const response = await fetch(URL_API+idEditavel) //por padrão o fetch ja utiliza o GET
      const data = await response.json()
      console.log("O conteudo: ",data);

      if (!data)
        throw 'problema na requisição' //Aqui será tratado o erro de requisição. Porém é melhor tratar pelo status(200, 400, 500)
      setData(data)

      //Setando as variáveis com os atributos vindo da api após o data ser setado. para não passar vazio no envio do formulario
      setNome(data.name)
      setCientificName(data.cientificName)
      setPermanentCarbonTax(data.permanentCarbonTax)
      setCarbonOffsetPeriod(data.carbonOffsetPeriod)
      setAnnualCarbonOffset(data.setAnnualCarbonOffset)
      setCategory(data.category)
      setTreeHeight(data.treeHeight)
      setTreeDiameter(data.treeDiameter)
      setProductionPeriod(data.productionPeriod)
      setHarvestReplace(data.harvestReplace)
      setPrice(data.price)
      setImg(data.img)
      setDescription(data.description)



    //   setRoleLocal(data.roles[0].name)
      
    //   console.log("o role que retornou é: ", data.roles[0].name)

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
    fecthAllData();

  }, []);





const enviarForm = async (evt) => {

    evt.preventDefault()
    try {
      setLoading(true)

      const response = await fetch(URL_API+idEditavel, {
        method: 'PUT',
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
      if ( name!='' && cientificName!='' && category!='' && img!='' &&
        permanentCarbonTax!='' && annualCarbonOffset!='' && carbonOffsetPeriod!='' &&
        treeHeight!='' && treeDiameter!='' && fruitfulTree!='' && productionPeriod!='' &&
        harvestReplace!='' && price!='' && description!='') {
        //setLoading(false)
        setLoading(false)
        setSuccess(true)
       

      } else if (response.status == 400 || response.status == 500){
        console.log("o status é: ", response.status)
        setSuccess(false)
        setLoading(false)
        setErroInterno(true)
        //setErro(true)
        
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
      <Card.Header>Dados da árvore</Card.Header>
      <Card.Body>

        <Form onSubmit={enviarForm} method='post'>
            <Form.Group className="mb-3" controlId="formGrouNome">
            <FloatingLabel controlId="floatingInput" label="Nome popular" className="mb-3">
                <Form.Control type="text" placeholder="Nome popular" Value={data.name} onChange={onChangeNome} />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCientifico">
            <FloatingLabel controlId="floatingInput" label="Nome científico" className="mb-3">
                <Form.Control type="text" placeholder="Nome científico" Value={data.cientificName}  onChange={onChangeCientificName} />
            </FloatingLabel>
            </Form.Group>
           
            <Card.Text>
           Taxa de compensação de CO2
            </Card.Text>

            <Row>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Taxa padrão" className="mb-3">
                    <Form.Control placeholder="Taxa padrão" Value={data.permanentCarbonTax} onChange={onChangePermanentCarbonTax} />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Período" className="mb-3">
                    <Form.Control placeholder="Período" Value={data.carbonOffsetPeriod} onChange={onChangeCarbonOffsetPeriod} />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Taxa anual" className="mb-3">
                    <Form.Control placeholder="Taxa anual" Value={data.annualCarbonOffset} onChange={onChangeAnnualCarbonOffset} />
                </FloatingLabel>
                </Col>
            </Row>

            <Form.Group as={Col} controlId="formGridState">
            <br/>
            <Form.Select  onClick={(e)=>onChangeCategory(e.target.value) }>
                        <option value="64b6b5bba57d6752a6aa04b3">Categoria escolhida</option>
                        <option value="64b6">Categoria escolhida 2</option>
                        {/* <option value="admin">Administrador</option> */}
                        
                        {/* <option value="3">Opção3</option> */}
                        
                    </Form.Select>
            </Form.Group>
    <br/>
            <Row>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Vida média" className="mb-3">
                    <Form.Control placeholder="Vida média" Value={data.cientificName} onChange={onChangeProductionPeriod} />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Altura" className="mb-3">
                    <Form.Control placeholder="Altura " Value={data.treeHeight} onChange={onChangeTreeHeight} />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Diâmetro" className="mb-3">
                    <Form.Control placeholder="Diâmetro" Value={data.treeDiameter} onChange={onChangeTreeDiameter}/>
                </FloatingLabel>
                </Col>
            </Row>
<br/>
            <Form.Group as={Row} className={Style.estiloRadio}>
                {/* <Form.Label as="legend" column sm={3}>
                    Árvore frutífera?
                </Form.Label> */}
                
{data.fruitfulTree==true &&           
 <Col>

 <Form.Check checked onClick={()=>onChangeFruitfulTree(true) }
 type="radio"
 label="Árvore frutífera"
 name="formHorizontalRadios"
 id="formHorizontalRadios1"
 />

 </Col>
 
}{data.fruitfulTree==true &&  
<Col>
 <Form.Check onClick={()=>onChangeFruitfulTree(false) }
 type="radio"
 label="Árvore não frutífera"
 name="formHorizontalRadios"
 id="formHorizontalRadios2"
 />
</Col>
 
  }

{data.fruitfulTree==false &&    
 <Col>
 <Form.Check onClick={()=>onChangeFruitfulTree(true) }
 type="radio"
 label="Árvore frutífera"
 name="formHorizontalRadios"
 id="formHorizontalRadios2"
 />
</Col>
}{data.fruitfulTree==false &&
<Col>
<Form.Check checked onClick={()=>onChangeFruitfulTree(false) }
type="radio"
label="Árvore não frutífera"
name="formHorizontalRadios"
id="formHorizontalRadios2"
/>
</Col>

}
{/* {!data.fruitfulTree &&    
 <Col>
 <Form.Check onClick={()=>onChangeFruitfulTree(true) }
 type="radio"
 label="Árvore frutífera"
 name="formHorizontalRadios"
 id="formHorizontalRadios2"
 />
</Col>
}{!data.fruitfulTree &&
<Col>
<Form.Check onClick={()=>onChangeFruitfulTree(false) }
type="radio"
label="Árvore não frutífera"
name="formHorizontalRadios"
id="formHorizontalRadios2"
/>
</Col>

}   */}
              
               
            </Form.Group>
            <br/>
            <Row>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Período de produção" className="mb-3">
                <Form.Control placeholder="Período de produção" Value={data.productionPeriod} onChange={onChangeProductionPeriod} />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Tempo de colheita" className="mb-3">
                <Form.Control placeholder="Tempo de colheita" Value={data.harvestReplace} onChange={onChangeHarvestReplace} />
                </FloatingLabel>
                </Col>
              
            </Row>
<br/>
                <Row>
                <Col>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" className={Style.Preco} Value={data.img} onChange={onChangeImg}/>
                </Form.Group>
                <Form.Control placeholder="Preço" className={Style.Preco} Value={data.price} onChange={onChangePrice}/>
                </Col>
             
                </Row>
            <br/>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                   
                    <Form.Control as="textarea" rows={3}  placeholder='Descrição' Value={data.description} onChange={onChangeDescription}/>
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