import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './cardArvore.module.css';
import {FaUserCircle, FaBell, FaDoorOpen, FaCog, FaChartLine, FaHistory,
    FaPlus, FaEnvira, FaMapMarkerAlt, FaUserFriends, FaEdit, FaRegWindowClose } from "react-icons/fa";
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import ImgArvore from '../../../assets/images/arvore_1.jpg';

export default function CardArvore() {
  return (
    <Card className={Style.Card}>
      <Card.Header className={Style.HeaderCard0}>
        <div className={Style.HeaderCard}>
            <h3 className={Style.StatusCard}>Aprovado</h3>
            <div className={Style.opcoesCard}>
            <FaEdit className={Style.iconeCard}/>
            <CloseButton/>
            {/* <FaRegWindowClose className={Style.iconeCard}/> */}
            </div>
           
            
        </div>
        
      </Card.Header>
      
      <Card.Body>
        <Card.Title>Tectona grandis</Card.Title>
        <Image src={ImgArvore} className={Style.imgArvore} />
        {/* <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <Card.Footer className="text-muted">
      <Form.Control type="number" placeholder="Quantidade" />
      </Card.Footer>
    </Card>
  );
}
