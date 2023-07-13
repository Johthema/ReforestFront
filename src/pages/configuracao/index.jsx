import Header from '../../components/header/index'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Footer from '../../components/footer/index'
import CardUsuario from '../../components/cards/cardCadUser/index';

export default function Configuracao(){
    return(
        <>
        <Header></Header>

        <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
        >
        <Tab eventKey="home" title="Informações pessoais">
            Informações pessoais
            <CardUsuario /> 
        </Tab>
        <Tab eventKey="profile" title="Permissões">
            Permissões
        </Tab>
        <Tab eventKey="longer-tab" title="Tela">
            Tela
        </Tab>
        <Tab eventKey="contact" title="Senha" >
            Senha
        </Tab>
        </Tabs>

        <Footer/>
        </>
    )
}