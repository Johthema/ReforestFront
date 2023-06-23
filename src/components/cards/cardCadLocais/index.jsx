import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './cadlocais.module.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

export default function CadastroLocal() {
  return (
    <Card className={Style.cardArvore}>
      <Card.Header>Cadastro do Local</Card.Header>
      <Card.Body>

        <Form>
            <Form.Group className="mb-3" controlId="formGrouNome">
                <Form.Control type="text" placeholder="Nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                   <Form.Control as="textarea" rows={3}  placeholder='Descrição'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupLocalizacao">
                <Form.Control type="text" placeholder="Localização" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEndereco">
                <Form.Control type="text" placeholder="Endereço" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCdgPostal">
                <Form.Control type="text" placeholder="Código postal" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEndereco">
                <Form.Control type="text" placeholder="Endereço" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCidade">
                <Form.Control type="text" placeholder="Cidade" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPais">
                <Form.Control type="text" placeholder="Pais" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupHectare">
                <Form.Control type="text" placeholder="Hectare" />
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
                <Form.Control type="number" placeholder="Árvores a plantar" />
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



    <Carousel>
      <Carousel.Item>
        <h2>Card1</h2>
    
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h2>Card2</h2>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h2>Card3</h2>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>





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