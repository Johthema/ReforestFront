import Link from 'next/link';
import Image from 'next/image';
import Logotip from '../../src/assets/images/folha_caindo_manutencao.png';
import Style from './error404.module.css'

export default function NotFound (){
    return(
        <>
        <div className={Style.DivFundo}> 
        <h1 className={Style.titulo}>Erro 404! </h1>
        <h1 className={Style.subtitulo}>Desculpe! não conseguimos econtrar a página. </h1>
        <Image src={Logotip}  className={Style.imagemFolha}/>
        <Link href="/" className={Style.botaoVoltar}>Voltar para home</Link>

        </div>
       
        </>
    )
}