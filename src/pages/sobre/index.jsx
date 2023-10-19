import Style from './sobre.module.css';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Button from 'react-bootstrap/Button';
export default function Sobre (){
    return(
        <div className={Style.barraCabelho}>
            <Header/>
            <div className={Style.barraCabecalho}>
                <div className={Style.divTitleSubTit}>
                    <h1 className={Style.legendaCabecalho}><b>Sobre a</b> Reflorest</h1>
                    <h5 className={Style.subtituloCabecalho}>Tecnologia Verde: Um Sistema Web para o Futuro da Reflorestação</h5>
                  
                    <Button className={Style.botaoPlantar} href="/plantar">Plantar agora</Button>
                </div>
              
            </div>
            <Footer/>
        </div>
    )
}