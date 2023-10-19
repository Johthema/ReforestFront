import Style from './sobre.module.css';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import ImgArvore from '../../assets/images/arvore_1.jpg';
import { FaDice } from "react-icons/fa";

export default function Sobre (){
    return(
        <div className={Style.barraCabelho}>
            <Header/>
            <div className={Style.barraCabecalho}>
                <div className={Style.divTitleSubTit}>
                    <h1 className={Style.legendaCabecalho}><b>Sobre a</b> Reforest</h1>
                    <h5 className={Style.subtituloCabecalho}>Tecnologia Verde: Um Sistema Web para o Futuro da Reflorestação</h5>
                  
                    <Button className={Style.botaoPlantar} href="/plantar">Plantar agora</Button>
                </div>
              
            </div>
            <div className={Style.divPropMetd}>
                <div className={Style.divProposta}>
                    <h2>Nossa proposta</h2>
                    <p> Estabelecer um programa de reflorestamento para combater a degradação ambiental,
                         promover a conservação da biodiversidade e reduzir as emissões de carbono em uma determinada área.</p>
                </div>
                <div className={Style.divMetodo}>
                    <h2>Nosso método</h2>
                    <p> Nosso metodo é Estabelecer um programa de reflorestamento para combater a degradação ambiental,
                         promover a conservação da biodiversidade e reduzir as emissões de carbono em uma determinada área.</p>
                </div>
            </div>
            <div className={Style.divProvaSocial}>
                <div className={Style.divTituloLugaresPlant}>
                    <h3>Alguns lugares de plantação</h3>
                </div>
                <div className={Style.divProva1}>
                    <div className={Style.divIcone}>
                    <FaDice className={Style.Icone}/>
                    </div>
                    <div className={Style.Prova1}>
                        
                    </div>    
                    {/* <div className={Style.divImagem}></div> */}
                    <Image src={ImgArvore} className={Style.divImagem} alt="" />
                       
                </div>
                
                

            </div>
            <Footer/>
        </div>
    )
}