import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './cadarvore.module.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function CadastroArvore() {
  return (
    <Card className={Style.cardArvore}>
      <Card.Header>Cadastro de árvore</Card.Header>
      <Card.Body>

        <Form>
            <Form.Group className="mb-3" controlId="formGrouNome">
                <Form.Control type="text" placeholder="Nome popular" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCientifico">
                <Form.Control type="text" placeholder="Nome científico" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEspecie">
                <Form.Control type="text" placeholder="Espécie" />
            </Form.Group>

            <Card.Text>
           Taxa de compensação de CO2
            </Card.Text>

            <Row>
                <Col>
                <Form.Control placeholder="Taxa permanente" />
                </Col>
                <Col>
                <Form.Control placeholder="Período" />
                </Col>
                <Col>
                <Form.Control placeholder="Taxa anual" />
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
                <Form.Control placeholder="Vida natural média" />
                </Col>
                <Col>
                <Form.Control placeholder="Altura " />
                </Col>
                <Col>
                <Form.Control placeholder="Diâmetro" />
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


        </Form>
       



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