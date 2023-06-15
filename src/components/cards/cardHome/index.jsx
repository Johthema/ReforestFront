import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './cards.module.css'
import { FaSeedling } from 'react-icons/fa';
export default function Cards(){



    return(
        <> 
        <div className={Style.CardDiv}>      
            <Card className={Style.card} >
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title className={Style.TituloCard}>Plantar árvore</Card.Title>
                    <FaSeedling className={Style.IconeCard}/>
                    <Card.Text className={Style.InfoCard}>+Informações</Card.Text>
                    <Button className={Style.botaoCard}>Plantar</Button>
                </Card.Body>
            </Card>

            <Card className={Style.card} >
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Oferecer árvore</Card.Title>
                    <Card.Text>+Informações</Card.Text>
                    <Button >Oferecer</Button>
                </Card.Body>
            </Card>

            <Card className={Style.card}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Minha floresta</Card.Title>
                    <Card.Text>+Informações</Card.Text>
                    <Button >Entar</Button>
                </Card.Body>
            </Card>
        </div> 
        </>
       

        
    )
}