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
                <Card.Header>Dados Pessoa Física</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text> */}

                <Form>
                    <Row>
                        <Col>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control  />
                        </Col>
                        <Col>
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control  />
                        </Col>
                    </Row>
                    <Row>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  />
                    </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Papel</Form.Label>
                    <Form.Select >
                        <option value="1">Administrador</option>
                        <option value="2">Opção2</option>
                        <option value="3">Opção3</option>
                      
                        <option value="4">--Novo papel--</option>
                       
                        
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
                <Card.Header>Dados Pessoa Jurídica</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text> */}

                    <Form>
                        <Row>
                           <Col>
                            <Form.Label>Razão social</Form.Label>
                            <Form.Control />
                         
                            <Form.Label>Nome completo</Form.Label>
                            <Form.Control  />

                            <Form.Label>Site</Form.Label>
                            <Form.Control />
                            </Col>
                            {/* <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                https://example.com/users/
                                </InputGroup.Text>
                                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                            </InputGroup> */}
                         
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label >Email</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" />
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
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;