import Header from '../../../components/header/index';
import CardUsuario from '../../../components/cards/cardCadUser/index';
import Style from './cadUsuario.module.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Footer from '../../../components/footer/index'

export default function CadastrarUsuario(){
    return(
        <>
        
        <div className={Style.divFundoCad}>
            <Header></Header>
            <Breadcrumb className={Style.migalhas}>
                <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                
                <Breadcrumb.Item active>Cadastro de usuário.</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className={Style.Titulo}>
                Cadastro de usuário
            </h1>
            <CardUsuario/>
            <Footer/>
        </div>
        </>
    )
}