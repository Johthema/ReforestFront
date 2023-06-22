import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './cadarvore.module.css'

export default function CadastroArvore() {
  return (
    <Card className={Style.cardArvore}>
      <Card.Header>Cadastro de árvore</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Salvar</Button>
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
  );
}  