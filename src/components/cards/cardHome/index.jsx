import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './cards.module.css'
import { FaSeedling } from 'react-icons/fa';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { FaTree } from 'react-icons/fa';



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
                    <Card.Title className={Style.TituloCard}>Oferecer árvore</Card.Title>
                    <FaHandHoldingHeart className={Style.IconeCard}/>
                    <Card.Text className={Style.InfoCard}>+Informações</Card.Text>
                    <Button className={Style.botaoCard}>Oferecer</Button>
                </Card.Body>
            </Card>

            <Card className={Style.card}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title className={Style.TituloCard}>Minha floresta</Card.Title>
                    <FaTree className={Style.IconeCard}/>
                    <Card.Text className={Style.InfoCard}>+Informações</Card.Text>
                    <Button className={Style.botaoCard}>Entar</Button>
                </Card.Body>
            </Card>
        </div> 
        </>
       

        
    )
}