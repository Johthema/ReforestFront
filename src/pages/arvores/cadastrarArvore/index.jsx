import Header from '../../../components/header/index';
import CardArvore from '../../../components/cards/cardCadArvore/index';
import Style from './cadarvore.module.css'

export default function CadastrarArvore(){
    return(
        <>
        <Header></Header>
        <div className={Style.divFundoCad}>
        <CardArvore/>
        </div>
            
           
                
           
            
        </>
    )
}