import Header from '../../components/header/index'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Footer from '../../components/footer/index'
import CardUsuario from '../../components/cards/cardCadUser/index';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Style from './configure.module.css'

export default function Configuracao(){
    return(
        <>
        <Header></Header>
        <Breadcrumb className={Style.migalhas}>
                <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                
                <Breadcrumb.Item active>Configuração.</Breadcrumb.Item>
            </Breadcrumb>

        <Tabs
        defaultActiveKey="info"
        id="justify-tab-example"
        className="mb-3"
        justify
        >
        <Tab eventKey="info" title="Informações pessoais">
         
            <CardUsuario /> 
        </Tab>
        <Tab eventKey="perm" title="Permissões">
          
        </Tab>
        <Tab eventKey="tela" title="Tela">
           
        </Tab>
        <Tab eventKey="password" title="Senha" >
        
        </Tab>
        </Tabs>

        <Footer/>
        </>
    )
}