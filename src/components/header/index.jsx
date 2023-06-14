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
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Dropdown from 'react-bootstrap/Dropdown';



export default function Header() {
  return (

    <>

      <Navbar collapseOnSelect expand="lg" bg="white" variant="corfont" className={StyleBar.headerBack}>
        <Container className={StyleBar.navContain}>
          <Navbar.Brand href="/home" className={StyleBar.Navlogo}><Image src={Logotipo} className={StyleBar.logo} /></Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className={StyleBar.NavMenuOp}>

              <Nav.Link className={StyleBar.custom_dropdown} href="/plantar">Plantar</Nav.Link>
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
              {/* <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" >Perfil</Tooltip>} placement="left"><NavDropdown  ><NavDropdown.Item><Link href="#deets"  ><FaUserCircle className={StyleBar.Icon} />Configuração</Link></NavDropdown.Item></NavDropdown></OverlayTrigger>
              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" >Notificação</Tooltip>} placement="left"><Nav.Link href="#deets"  ><FaBell className={StyleBar.Icon} /></Nav.Link></OverlayTrigger>
              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" >Logout</Tooltip>} placement="left"><Nav.Link href="#deets"  ><FaDoorOpen className={StyleBar.Icon} /></Nav.Link></OverlayTrigger> */}

              <Dropdown>
                  <Dropdown.Toggle className={StyleBar.IconeMENU}>
                  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" >Perfil</Tooltip>} placement="left"><Nav.Link href="#deets"  ><FaUserCircle className={StyleBar.Icon} /></Nav.Link></OverlayTrigger>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Faturamento</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Hist. Restauração</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Configurações</Dropdown.Item>
                  
                  </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                  <Dropdown.Toggle className={StyleBar.IconeMENU}>
                  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" >Notificação</Tooltip>} placement="left"><Nav.Link href="#deets"  ><FaBell className={StyleBar.Icon} /></Nav.Link></OverlayTrigger>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Esta tudo certo!</Dropdown.Item>
                    
                  
                  </Dropdown.Menu>
            </Dropdown>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" >Logout</Tooltip>} placement="left"><Nav.Link href="#deets"  ><FaDoorOpen className={StyleBar.IconLogout} /></Nav.Link></OverlayTrigger>




            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>


  )
}