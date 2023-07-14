import Style from './tela.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Tela(){
    return(
        <>
 <Card className={Style.DivModelos}>
      <Card.Header>Escolha o modo de cor desejado </Card.Header>
      <Card.Body>
        <Card.Title>Modelos dispostos</Card.Title>
        <div className={Style.modelos}>

        <Card style={{ width: '18rem' }} className={Style.Card1}>
       
        <Card.Body className={Style.Corpo}>
       
            <Card.Title className={Style.Titulo1}>Clara</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item className={Style.Item1}>Alerta</ListGroup.Item>
            <ListGroup.Item className={Style.Item2}>Sucesso!</ListGroup.Item>
            <ListGroup.Item className={Style.Item3}>Carregando..</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Card.Link className={Style.Link1}>Links </Card.Link>
            <Button variant="primary">Botão</Button>
        </Card.Body>
        </Card>



    <Card style={{ width: '18rem' }} className={Style.Card2}>
      
      <Card.Body>
        <Card.Title>Escura</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item className={Style.Item3}>Alerta</ListGroup.Item>
        <ListGroup.Item className={Style.Item4}>Sucesso!</ListGroup.Item>
        <ListGroup.Item className={Style.Item5}>Carregando..</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Links</Card.Link>
        <Button variant="primary">Botão</Button>
      </Card.Body>
    </Card>






        </div>


        
      </Card.Body>
      <Card.Footer className="text-muted"><Button variant="primary">Restaurar padrão</Button></Card.Footer>
    </Card>

        </>
    )
}