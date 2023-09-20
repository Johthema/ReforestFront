import Style from './footer.module.css';
import Image from 'next/image';
import Logotipo from '../../assets/images/logo.png';


export default function Footer(){
    return(
        <>
        <div className={Style.fundoRodape}>
            {/* <h1 className={Style.Titulo}>Rodape</h1> */}
            {/* <Logotipo/> */}
            <div className={Style.fundoRodape2}>
                <h5 className={Style.Titulo}>Termos de Uso</h5>
                <h5 className={Style.Titulo}>Política de Privacidade</h5>
                <h5 className={Style.Titulo}>Contato</h5>

            </div>
 
 
            {/* <div className={Style.copyri}>
                
            <p>Copyright &copy; 2023 - 2023 ReForest.</p>
            </div>  */}
            
        </div>
      
        </>
    )
}