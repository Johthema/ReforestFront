import Link from 'next/link'
//import estyleBar from '../../css/header.module.css'
import estyleBar from '../header/heade.module.css'


export default function Header(){
    return(
     
      <>
      <div className={estyleBar.headerBack}>
        <div className={estyleBar.opcoesMenu}>
     
    
      <Link href="/plantar"><h2>Plantar</h2></Link>
      <Link href="/home"><h2>Árvores</h2></Link>
      <Link href="/cadastroUsuario"><h2>Locais de plantação</h2></Link>
      <Link href="/usuarios/cadastrarUsuario"><h2>Usuários</h2></Link>
      <Link href="/sobre"><h2>Sobre</h2></Link>
      <Link href="/home"><h2>Perfil</h2></Link>
      <Link href="/home"><h2>Notificação</h2></Link>
      <Link href="/home"><h2>Logout</h2></Link>
     
    </div>
        </div>
        </>
      
        
    )
}