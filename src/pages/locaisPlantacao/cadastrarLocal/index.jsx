import Header from '../../../components/header/index';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './cadlocais.module.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Arvores from '../../../components/cards/cardArvore/index';

export default function CadastrarLocal() {
  return (
  <>
         <Header></Header>

   
    <Card className={Style.cardArvore}>
      <Card.Header>Cadastro do Local</Card.Header>
      <Card.Body>

        <Form>
            <Form.Group className="mb-3" controlId="formGrouNome">
            <FloatingLabel controlId="floatingInput" label="Nome" className="mb-3">
                <Form.Control type="text"  placeholder="Nome" />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea"  rows={3}  placeholder='Descrição'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupLocalizacao">
            <FloatingLabel controlId="floatingInput" label="Localização" className="mb-3">
                <Form.Control type="text" placeholder="Localização" />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEndereco">
            
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCdgPostal">
            <FloatingLabel controlId="floatingInput" label="Código postal" className="mb-3">
                <Form.Control type="text"  placeholder="Código postal" />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEndereco">
            <FloatingLabel controlId="floatingInput" label="Endereço" className="mb-3">
                <Form.Control type="text"  placeholder="Endereço" />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCidade">
            <FloatingLabel controlId="floatingInput" label="Cidade" className="mb-3">
                <Form.Control type="text" placeholder="Cidade" />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPais">
            <FloatingLabel controlId="floatingInput" label="País" className="mb-3">
                <Form.Control type="text" placeholder="Pais" />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupHectare">
            <FloatingLabel controlId="floatingInput" label="Hectare" className="mb-3">
                <Form.Control type="text" placeholder="Hectare" />
                </FloatingLabel>
            </Form.Group>

            <Card.Text>
            Quantidade
            </Card.Text>

            <Row>
                <Col>
                  <Form.Control type="number" placeholder="Árvores derrubadas" />
                </Col>
                <Col>
                  <Form.Control type="number" placeholder="Árvores ja plantadas " />
                </Col>
                <Col>
                  <Form.Control type="number"  placeholder="Árvores a plantar" />
                </Col>
            </Row>

            <Card.Text>
            Total: Árvores plantadas + árvores a plantar
            </Card.Text>
            <Row className={Style.estiloRadio}>
                <Col>
                <Form.Check 
                type="switch"
                id="custom-switch"
                label="Possui irrigação"
            />
                </Col>
                <Col>
                <Form.Check 
                type="switch"
                id="custom-switch"
                label="Possui viveiro"
            />
                </Col>

            </Row>
           
    <br/>
                <Row>
                <Col>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" className={Style.Preco}/>
                </Form.Group>
                <Form.Control placeholder="Árvores" className={Style.Preco}/>
                </Col>
             
                </Row>
    <br/>

    <Arvores/>

        </Form>
       
        <br/>
   
        <Button variant="primary" className={Style.botaoSalvar}>Salvar</Button>
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
    </>
  );
 
}  