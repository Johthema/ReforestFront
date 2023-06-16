import Header from '../../../components/header/index'
import CardUsuario from '../../../components/cards/cardCadUser/index'
import Style from './cadUsuario.module.css'
export default function CadastrarUsuario(){
    return(
        <div>
            <Header></Header>
            <h1 className={Style.Titulo}>
                Cadastro de usuário
            </h1>
            <CardUsuario/>
        </div>
    )
}