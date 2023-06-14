import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../app/globals.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import StyleBar from './heade.module.css';
import Image from 'next/image';
import Logotipo from '../../assets/images/logo.png';




export default function Header(){
    return(
     
      <>

<Navbar collapseOnSelect expand="lg" bg="white" variant="corfont" className={StyleBar.headerBack}>
      <Container className={StyleBar.navContain}>
        <Navbar.Brand href="#home" className={StyleBar.Navlogo}><Image src={Logotipo} className={StyleBar.logo} /></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav  className={StyleBar.NavMenuOp}>
            
            <Nav.Link  className={StyleBar.custom_dropdown} href="/plantar">Plantar</Nav.Link>
            <NavDropdown title="Árvores" id="collasible-nav-dropdown " className={StyleBar.custom_dropdown} >
              <NavDropdown.Item ><Link href="/arvores/cadastrarArvore" className={StyleBar.h2Tit}>Cadastrar árvore</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href="/arvores/listarArvores" className={StyleBar.h2Tit}>Lista de árvores</Link></NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown title="Locais de plantação" id="collasible-nav-dropdown" className={StyleBar.custom_dropdown}>
              <NavDropdown.Item ><Link href="/locaisPlantacao/cadastrarLocal" className={StyleBar.h2Tit}>Cadastrar local</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href="/locaisPlantacao/listaLocais" className={StyleBar.h2Tit}>Lista de locais</Link></NavDropdown.Item>
             
           
            </NavDropdown>
            
            <NavDropdown title="Usuários" id="collasible-nav-dropdown" className={StyleBar.custom_dropdown}>
              <NavDropdown.Item ><Link href="/usuarios/cadastrarUsuario" className={StyleBar.h2Tit}>Cadastrar usuário</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href="/usuarios/listaUsuario" className={StyleBar.h2Tit}>Lista de usuários</Link></NavDropdown.Item>
          
            </NavDropdown>

            <Nav.Link className={StyleBar.custom_dropdown} href="/sobre">Sobre</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Perfil</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Notificacoes</Nav.Link>
            <Nav.Link href="#deets">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




      {/* <div className={styleBar.headerBack}>
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
        </div> */}
        </>
      
        
    )
}