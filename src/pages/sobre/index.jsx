import Header from '../../components/header/index';
import Style from './sobre.module.css';
import Image from 'next/image';
import Perfil from '../../assets/images/fotoperfil/fotoper.jpg';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaPen } from "react-icons/fa";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Sobre(){
    return(
        <>
        <Header></Header>
        <div className={Style.DivHeader}>

        <Image src={Perfil} roundedCircle className={Style.FotoPerfil} />
           
        
       
        </div>
        <div>
        <Tabs
      defaultActiveKey="perfil"
      transition={true}
      id="noanim-tab-example"
      className={Style.BarHeader}

    >
      <Tab eventKey="perfil" title="Informações Pessoais">




        <div className={Style.DivInfoEdit}>


        <OverlayTrigger overlay={
  <Tooltip id="tooltip-disabled"   >
  Editar
  </Tooltip>} placement="left">
  <div >
  <FaPen className={Style.IconInfoEdit}/>
  </div>
</OverlayTrigger>
            
           
            
            
            </div>
       <div className={Style.DivInfoPess}>
        <div className={Style.DivInfo}>
            <h2>Nome/ Nome completo: </h2>
            <h2>Sobrenome/ Razão Social: </h2>
            <h2>Email: </h2>
            <h2>Telefone: </h2>
            <h2>Papel: </h2>
            <h2>Tipo depessoa: </h2>
        </div>
        <div>
            <h2>Fulano </h2>
            <h2>Fulano de tal </h2>
            <h2>Fulano@mail.com </h2>
            <h2>92992525252 </h2>
            <h2>Usuario, Administrador </h2>
            <h2>Pessoa Física </h2>
        </div>

       </div>
      </Tab>
      <Tab eventKey="profile" title="Informações de Faturamento">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Floresta">
        Tab content for Contact
      </Tab>
    </Tabs>
        </div>
        {/* <h4 className={Style.LegendaFoto}>Trocar foto</h4> */}

        
        
        </>
    )
}