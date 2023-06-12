import Link from 'next/link'
import '../../app/globals.css'
//import estyleBar from '../../css/header.module.css'
import styleBar from '../header/heade.module.css'


export default function Header(){
    return(
     
      <>
      <div className={styleBar.headerBack}>
        <div className={styleBar.divlogotipo}>
          <h3>Logotipo</h3>
        </div>
        <div className={styleBar.opcoesMenu}>
     
      
              <Link href="/plantar" className={styleBar.h2Tit}><h2 >Plantar</h2></Link>
              <Link href="/home" className={styleBar.h2Tit}><h2 >Árvores</h2></Link>
              <Link href="/cadastroUsuario" className={styleBar.h2Tit}><h2 >Locais de plantação</h2></Link>
              <Link href="/usuarios/cadastrarUsuario" className={styleBar.h2Tit}><h2 >Usuários</h2></Link>
              <Link href="/sobre" className={styleBar.h2Tit}><h2 >Sobre</h2></Link>
              
     
        </div>
        <div className={styleBar.opcoesMenu2}>
              <Link href="/home" className={styleBar.h2Tit}><h2>Perfil</h2></Link>
              <Link href="/home" className={styleBar.h2Tit}><h2>Notificação</h2></Link>
              <Link href="/home" className={styleBar.h2Tit}><h2>Logout</h2></Link>
        </div>
        </div>
        </>
      
        
    )
}