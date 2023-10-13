import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import Style from './sobre.module.css'
export default function Sobre(){
    return(
        <>
        <Header/>
        <div className={Style.divSobre}>
        Pagina de sobre em construção, Aguarde!
        </div>
        
        <Footer/>
        </>
    )
}