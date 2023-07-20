import Header from '../../components/header/index'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Footer from '../../components/footer/index'
import CardUsuario from '../../components/cards/cardCadUser/index';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Style from './configure.module.css';
// import Modo from '../../components/cards/cardConfigTela/index';
import Aparencia from './aparencia/index'
import Permissao from './permissao/index'
import Senha from './senha/index';
import Informacao from './informacao/index'
export default function Configuracao(){
    return(
        <>
        <Header></Header>
        <Breadcrumb className={Style.migalhas}>
                <Breadcrumb.Item href="/info">Home</Breadcrumb.Item>
                
                <Breadcrumb.Item active>Configurações.</Breadcrumb.Item>
        </Breadcrumb>
        <h4>Configuração do usuário</h4>
        <Tabs
        defaultActiveKey="info"
        id="justify-tab-example"
        className="mb-3"
        justify
        >
        <Tab eventKey="info" title="Informações pessoais">
            <Informacao/> 
        </Tab>
       
        <Tab eventKey="password" title="Senha" >
            <Senha/>
        
        </Tab>
        </Tabs>
        <h4>Configuração do sistema</h4>
        <hr/>
        <Tabs
        defaultActiveKey="perm"
        id="justify-tab-example"
        className="mb-3"
        justify
        >
      
        <Tab eventKey="perm" title="Papel e Permissões">
          <Permissao/>
        </Tab>
        <Tab eventKey="cat" title="Categoria">
           <h4>Em construção</h4>
           
        </Tab>
        <Tab eventKey="tela" title="Aparência">
            <Aparencia/>
           
        </Tab>
       
        {/* <Tab eventKey="password" title="Senha" >
            <Senha/>
        
        </Tab> */}
        </Tabs>

        <Footer/>
        </>
    )
}