import Header from '../../../components/header/index';
import CardArvore from '../../../components/cards/cardCadArvore/index';
import Style from './cadarvore.module.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Footer from '../../../components/footer';

export default function CadastrarArvore(){
    return(
        <>
        <Header></Header>
        <div className={Style.divFundoCad}> 
        <Breadcrumb className={Style.migalhas}>
        <Breadcrumb.Item href="/home">Home  </Breadcrumb.Item>   
        <Breadcrumb.Item active>Cadastro de Árvore.</Breadcrumb.Item>
        </Breadcrumb>
        <CardArvore/>
        </div>
            
           <Footer/>                
           
            
        </>
    )
}