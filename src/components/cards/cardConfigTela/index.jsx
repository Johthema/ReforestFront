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
       
        <Card.Body className={Style.Corpo1}>
       
            <Card.Title className={Style.Titulo1}>Clara</Card.Title>
            <Card.Text>
           O modelo claro, tem cores suaves e muito bem padronizadas para que
            não possa prejudicar a visão e experiência do usuário.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item className={Style.Item1}>Alerta</ListGroup.Item>
            <ListGroup.Item className={Style.Item2}>Sucesso!</ListGroup.Item>
            <ListGroup.Item className={Style.Item3}>Carregando..</ListGroup.Item>
        </ListGroup>
        <Card.Body className={Style.Corpo1}>
            <Card.Link className={Style.Link1}>Links </Card.Link>
            <Button variant="primary">Botão</Button>
        </Card.Body>
        </Card>


        <Card style={{ width: '18rem' }} className={Style.Card2}>
       
        <Card.Body className={Style.Corpo2}>
       
            <Card.Title className={Style.Titulo2}>Escura</Card.Title>
            <Card.Text className={Style.subTitulo2}>
            O modelo escuro, tem cores pouco neutras e vibrantes, porém usadas com moderação para 
            não prejudicar a visão e experiência do usuário.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item className={Style.Item4}>Alerta</ListGroup.Item>
            <ListGroup.Item className={Style.Item5}>Sucesso!</ListGroup.Item>
            <ListGroup.Item className={Style.Item6}>Carregando..</ListGroup.Item>
        </ListGroup>
        <Card.Body className={Style.Corpo2_1}>
            <Card.Link className={Style.Link2}>Links </Card.Link>
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