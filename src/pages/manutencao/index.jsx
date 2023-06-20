import Header from '../../components/header/index';
import Image from 'next/image';
import Logotip from '../../assets/images/manutencao.gif';
import Style from '../../pages/manutencao/manutencao.module.css'
export default function Manutencao(){
    return(
        <>
        <Header></Header>
        <h2>Pagina "Manutenção" em construção</h2>
        <Image src={Logotip}  className={Style.imagemFolha}/>
        </>
    )
}