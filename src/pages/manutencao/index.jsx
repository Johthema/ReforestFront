import Header from '../../components/header/index';
import Image from 'next/image';
import Logotip from '../../assets/images/maintenance.gif';
import Style from '../../pages/manutencao/manutencao.module.css'
export default function Manutencao(){
    return(
        <>
        <Header></Header>
        <h2 className={Style.tituloManutencao}>Estamos em "Manutenção"</h2>
        <Image src={Logotip}  className={Style.imagemManutencao}/>
        <h2 className={Style.subtituloManutencao}><b>Desculpe,</b> O serviço acessado está temporariamente indisponível.</h2>
        </>
    )
}