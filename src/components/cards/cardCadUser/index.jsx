import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './card.module.css';
import Form from 'react-bootstrap/Form';


function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className={Style.RowDiv}>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className={Style.OpcaoCad}>Pessoa Física</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className={Style.OpcaoCad}>Pessoa Jurídica</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9} className={Style.ColunaSm9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <Card >
                <Card.Header>Dados Pessoa física</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text> */}

                <Form>
                    <Row>
                        <Col>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control placeholder="Nome" />
                        </Col>
                        <Col>
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control placeholder="Sobrenome" />
                        </Col>
                    </Row>
                    <Row>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Papel</Form.Label>
                    <Form.Select >
                        <option value="1">Administrador</option>
                        <option value="2">Opção2</option>
                        <option value="3">Opção3</option>
                    </Form.Select>
                    </Form.Group>
                    </Row>
                    <br/>
                    </Form>




                    <Button className={Style.BotaoCad}>Salvar</Button>
                </Card.Body>
            </Card>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <Card>
                <Card.Header>Dados Pessoa jurídica</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button className={Style.BotaoCad}>Salvar</Button>
                </Card.Body>
            </Card>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;