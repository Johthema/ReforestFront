import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './cadarvore.module.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function CadastroArvore() {
  return (
    <Card className={Style.cardArvore}>
      <Card.Header>Cadastro de árvore</Card.Header>
      <Card.Body>

        <Form>
            <Form.Group className="mb-3" controlId="formGrouNome">
            <FloatingLabel controlId="floatingInput" label="Nome popular" className="mb-3">
                <Form.Control type="text" placeholder="Nome popular" />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCientifico">
            <FloatingLabel controlId="floatingInput" label="Nome científico" className="mb-3">
                <Form.Control type="text" placeholder="Nome científico" />
            </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEspecie">
            <FloatingLabel controlId="floatingInput" label="Espécie" className="mb-3">
                <Form.Control type="text" placeholder="Espécie" />
            </FloatingLabel>
            </Form.Group>

            <Card.Text>
           Taxa de compensação de CO2
            </Card.Text>

            <Row>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Taxa permanente" className="mb-3">
                    <Form.Control placeholder="Taxa permanente" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Período" className="mb-3">
                    <Form.Control placeholder="Período" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Taxa anual" className="mb-3">
                    <Form.Control placeholder="Taxa anual" />
                </FloatingLabel>
                </Col>
            </Row>

            <Form.Group as={Col} controlId="formGridState">
            <br/>
                <Form.Select defaultValue="Choose...">
                    <option>Categoria</option>
                    <option>Opcao2</option>
                    <option>Opcao3</option>
                </Form.Select>
            </Form.Group>
    <br/>
            <Row>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Vida natural média" className="mb-3">
                    <Form.Control placeholder="Vida natural média" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Altura" className="mb-3">
                    <Form.Control placeholder="Altura " />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Diâmetro" className="mb-3">
                    <Form.Control placeholder="Diâmetro" />
                </FloatingLabel>
                </Col>
            </Row>
<br/>
            <Form.Group as={Row} className={Style.estiloRadio}>
                {/* <Form.Label as="legend" column sm={3}>
                    Árvore frutífera?
                </Form.Label> */}
                <Col>
                    <Form.Check
                    type="radio"
                    label="Árvore frutífera"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    />
                    </Col>
                    <Col>
                    <Form.Check
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
                <Form.Control placeholder="Período de produção" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Tempo de colheita/ substituição" className="mb-3">
                <Form.Control placeholder="Tempo de colheita/ substituição" />
                </FloatingLabel>
                </Col>
              
            </Row>
<br/>
                <Row>
                <Col>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" className={Style.Preco}/>
                </Form.Group>
                <Form.Control placeholder="Preço" className={Style.Preco}/>
                </Col>
             
                </Row>
            <br/>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                   
                    <Form.Control as="textarea" rows={3}  placeholder='Descrição'/>
                </Form.Group>
                <br/>
                <Form.Control placeholder="Formas de uso" />

        </Form>
       


        <br/>
        {/* <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        <Button variant="primary">Salvar</Button>
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
  );
}  