import Header from '../../components/header/index';
import Style from './sobre.module.css';
import Image from 'next/image';
import Perfil from '../../assets/images/fotoperfil/fotoper.jpg';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Sobre(){
    return(
        <>
        <Header></Header>
        <div className={Style.DivHeader}>

        <Image src={Perfil} roundedCircle className={Style.FotoPerfil} />
           
        

        </div>
       
        </>
    )
}