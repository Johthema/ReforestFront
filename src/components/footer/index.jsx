import Style from './footer.module.css'
export default function Footer(){
    return(
        <div className={Style.fundoRodape}>
            {/* <h1 className={Style.Titulo}>Rodape</h1> */}
            <h5 className={Style.Titulo}>Termos de Uso</h5>
            <h5 className={Style.Titulo}>Política de Privacidade</h5>
            <h5 className={Style.Titulo}>Contato</h5>
        </div>
    )
}