import Style from './landing.module.css';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Foto1 from '../../assets/images/fotopage1.png';
// import Foto2 from '../../assets/images/fotopage2.jpg';
// import Foto3 from '../../assets/images/fotopage3.jpg';
// import Foto4 from '../../assets/images/fotopage4.jpg';

export default function LandingPage(){
    return(
        <>
        <div className={Style.DivFundoladingpage}>
            <div className={Style.DivHeaderPage}>
                <div className={Style.DivTextoPage}>
                    <div>
                        <h4>
                         O Aumento de CO2 provoca diminuição e <span className={Style.texto1}>Perdas Alarmantes</span> de vidas terrestres,
                         mas plantar árvores surge como <span className={Style.texto1}>Solução Vital</span> para o planeta.
                        </h4>
                    </div>
                    <div>
                        <h4>
                        Junte-se a plantadores de árvores e defensores da natureza. 
                        Plante esperança, cultive parcerias. Visite agora e faça parte dessa rede de transformação.
                        </h4>
                    </div>
                    <div className={Style.botaoPlantar}>
                    Plantar suas árvores
                    </div>
                
                </div>
            <Image src={Foto1} className={Style.Estilofoto1} alt="" />
            </div>
       
        </div>
        </>
    )
} 