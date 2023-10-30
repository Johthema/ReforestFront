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
const URL_API_CAT = process.env.NEXT_PUBLIC_API_URL+"category";

//variáveis de feedback

const [idEditavel, setIdEditavel] = useState(handleShowEdit[0])
const [loading, setLoading] = useState(false);
const [aviso, setAviso] = useState(false);
const [errorInt, setErroInterno] = useState(false);
const [success, setSuccess] = useState(false);
const [error, setErro] = useState(false)
const [successDell, setSuccessDell] = useState(false);
//Variaveis de cadastro
const [data, setData] = useState([])
const [dataCat, setDataCat] = useState([])
const [name, setNome] = useState('');
const [cientificName, setCientificName] = useState('');
const [category, setCategory] = useState(handleShowEdit[1]);
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
  // const onChangeCategory=(cat) => {
  //   // console.log("a categoria é: ", evt)
  //   setCategory(cat)
   
  // }

  const onChangeCategory = (event) => {
    const novoValorSelecionado = event.target.value;
    setCategory(novoValorSelecionado);
  };
  


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
      // setCategory(data.category.name)
      console.log("cats name: ", data.category.name)
      setTreeHeight(data.treeHeight)
      setTreeDiameter(data.treeDiameter)
      setProductionPeriod(data.productionPeriod)
      setHarvestReplace(data.harvestReplace)
      setPrice(data.price)
      setImg(data.img)
      setDescription(data.description)

      const response2 = await fetch(URL_API_CAT) //por padrão o fetch ja utiliza o GET
      const dataCat = await response2.json()

      if (!dataCat)
        throw 'problema na requisição' //Aqui será tratado o erro de requisição. Porém é melhor tratar pelo status(200, 400, 500)
      setDataCat(dataCat)
      console.log("categorias: ",dataCat)



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


  console.log("cat2: ", data.category)
  console.log("cat3: ", category)


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
      // if ( name!='' && cientificName!='' && category!='' && img!='' &&
      //   permanentCarbonTax!='' && annualCarbonOffset!='' && carbonOffsetPeriod!='' &&
      //   treeHeight!='' && treeDiameter!='' && fruitfulTree!='' && productionPeriod!='' &&
      //   harvestReplace!='' && price!='' && description!='') {
      //   //setLoading(false)
      //   setLoading(false)
      //   setSuccess(true)
       

      // } else
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
                <FloatingLabel controlId="floatingInput" label="Taxa padrão" className={Style.Labels}>
                    <Form.Control placeholder="Taxa padrão" Value={data.permanentCarbonTax} onChange={onChangePermanentCarbonTax} />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Período" className={Style.Labels}>
                    <Form.Control placeholder="Período" Value={data.carbonOffsetPeriod} onChange={onChangeCarbonOffsetPeriod} />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Taxa anual" className={Style.Labels}>
                    <Form.Control placeholder="Taxa anual" Value={data.annualCarbonOffset} onChange={onChangeAnnualCarbonOffset} />
                </FloatingLabel>
                </Col>
            </Row>

            <Form.Group as={Col} controlId="formGridState">
            <br/>
            
            <Form.Select value={category} onChange={onChangeCategory}>
            {dataCat.map((opcao, i= index) => (
              <option key={i} value={opcao._id}>
                {opcao.name}
              </option>
            ))}
          </Form.Select>

            
              {/* {!category &&
            <Form.Select onClick={(e)=>onChangeCategory(e.target.value) }>
                        {dataCat && dataCat.map((item, i = index) => (
                        <option key={item._id} value={item._id}>{item.name}</option>
                        ))}
            </Form.Select>
              } */}
            </Form.Group>
    <br/>
            <Row>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Vida média" className={Style.Labels}>
                    <Form.Control placeholder="Vida média" Value={data.productionPeriod} onChange={onChangeProductionPeriod} />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Altura" className={Style.Labels}>
                    <Form.Control placeholder="Altura " Value={data.treeHeight} onChange={onChangeTreeHeight} />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Diâmetro" className={Style.Labels}>
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
                <FloatingLabel controlId="floatingInput" label="Período de produção" className={Style.Labels}>
                <Form.Control placeholder="Período de produção" Value={data.productionPeriod} onChange={onChangeProductionPeriod} />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Tempo de colheita" className={Style.Labels}>
                <Form.Control placeholder="Tempo de colheita" Value={data.harvestReplace} onChange={onChangeHarvestReplace} />
                </FloatingLabel>
                </Col>
              
            </Row>
<br/>
                <Row>
                <Col>
                <Form.Group controlId="formFile" className={Style.Labels}>
                    <Form.Control type="file" className={Style.Preco} Value={data.img} onChange={onChangeImg}/>
                </Form.Group>
                <Form.Control placeholder="Preço" className={Style.Preco} Value={data.price} onChange={onChangePrice}/>
                </Col>
             
                </Row>
            <br/>
                <Form.Group className={Style.Labels} controlId="exampleForm.ControlTextarea1">
                   
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