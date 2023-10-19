import Style from './sobre.module.css';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
export default function Sobre (){
    return(
        <div className={Style.barraCabelho}>
            <Header/>
            <div className={Style.barraCabecalho}>
                <h1 className={Style.legendaCabecalho}><b>Juntos pela Natureza:</b> Plante a Semente da Esperança e Ajude a Reflorestar o Nosso Futuro!</h1>
            </div>
            <Footer/>
        </div>
    )
}