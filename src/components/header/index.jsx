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
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {RotateLoader } from 'react-spinners';
import {FaUserCircle, FaBell, FaDoorOpen, FaCog, FaChartLine, FaHistory,
        FaPlus, FaEnvira, FaMapMarkerAlt, FaUserFriends, FaSignOutAlt, FaUser } from "react-icons/fa";


        const URL_API = process.env.NEXT_PUBLIC_API_URL+"signout";

export default function Header() {
  const [show, setShow] = useState(false);
  const [loaddingEncerrar,  setLoaddingEncerrar] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = useRouter();

function logout() {
  const response = fetch (URL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  console.log(response)
  localStorage.clear();
  setLoaddingEncerrar(true)

  //const tempoEmMilissegundos = 1000;


    setTimeout(()=>{
      router.push('/')
     
      
      
  },1000)

  //router.push('/');

}

  return (

<>

      <Navbar collapseOnSelect expand="lg"  variant="corfont" className={StyleBar.headerBack}>
        <Container className={StyleBar.navContain}>
          <Navbar.Brand href="/home" className={StyleBar.Navlogo}><Image src={Logotipo} className={StyleBar.logo} alt="" /></Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav"   className={StyleBar.responsivo}/>

          <Navbar.Collapse id="responsive-navbar-nav" className={StyleBar.NavColaps} >
            <Nav className={StyleBar.NavMenuOp} variant="underline" >

              <Nav.Link className={StyleBar.custom_dropdown} href="/plantar" >Plantar</Nav.Link>
              <NavDropdown title="Árvores" id="collasible-nav-dropdown " className={StyleBar.custom_dropdown} >
                <NavDropdown.Item ><Link href="/arvores/cadastrarArvore" className={StyleBar.h2Tit}><FaPlus className={StyleBar.IconeDrop}/>Cadastrar árvore</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link href="/arvores/listarArvores" className={StyleBar.h2Tit}><FaEnvira className={StyleBar.IconeDrop}/>Lista de árvores</Link></NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Locais de plantação" id="collasible-nav-dropdown" className={StyleBar.custom_dropdown}>
                <NavDropdown.Item ><Link href="/locaisPlantacao/cadastrarLocal" className={StyleBar.h2Tit}><FaPlus className={StyleBar.IconeDrop}/>Cadastrar local</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link href="/locaisPlantacao/listaLocais" className={StyleBar.h2Tit}><FaMapMarkerAlt className={StyleBar.IconeDrop}/>Lista de locais</Link></NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Usuários" id="collasible-nav-dropdown" className={StyleBar.custom_dropdown}>
                <NavDropdown.Item ><Link href="/usuarios/cadastrarUsuario" className={StyleBar.h2Tit}><FaPlus className={StyleBar.IconeDrop}/>Cadastrar usuário</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link href="/usuarios/listaUsuario" className={StyleBar.h2Tit}><FaUserFriends className={StyleBar.IconeDrop}/>Lista de usuários</Link></NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className={StyleBar.custom_dropdown} href="/sobre" >Sobre</Nav.Link>
            </Nav>

            <Nav>
            <Dropdown>
                  <Dropdown.Toggle className={StyleBar.IconeMENU}>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" >Perfil</Tooltip>} placement="left"><Nav.Link><FaUserCircle className={StyleBar.Icon} /><h5 className={StyleBar.NomePerfil}>Perfil</h5></Nav.Link></OverlayTrigger>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* <Dropdown.Item className={StyleBar.OpDrop}><Link href="/faturamento" className={StyleBar.h2Tit}><FaChartLine className={StyleBar.IconeDrop}/>Faturamento</Link></Dropdown.Item> */}
                    <Dropdown.Item className={StyleBar.OpDrop}><Link href="/perfil" className={StyleBar.h2Tit}><FaUser className={StyleBar.IconeDrop}/>Meu Perfil</Link></Dropdown.Item>
                    <Dropdown.Item className={StyleBar.OpDrop}><Link href="/hist_restauracao" className={StyleBar.h2Tit}><FaHistory className={StyleBar.IconeDrop}/>Hist. Restauração</Link></Dropdown.Item>
                    <Dropdown.Item className={StyleBar.OpDrop}><Link href="/configuracao" className={StyleBar.h2Tit}><FaCog className={StyleBar.IconeDrop}/>Configurações</Link></Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                  <Dropdown.Toggle className={StyleBar.IconeMENU}>
                  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" >Notificação</Tooltip>} placement="left"><Nav.Link><FaBell className={StyleBar.Icon} /><h5 className={StyleBar.NomeNotifi}>Notificação</h5></Nav.Link></OverlayTrigger>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={StyleBar.OpDropNotifi}>
                    <Dropdown.Item href="#/action-1" >Esta tudo certo!</Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"   >Logout</Tooltip>} placement="left"><Nav.Link onClick={handleShow} ><FaSignOutAlt className={StyleBar.IconLogout} /><h5 className={StyleBar.NomeLogout}>Logout</h5></Nav.Link></OverlayTrigger>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


   {/* //--------------------------------Modal Logout */}

   <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    
   </Modal.Header>
   <Modal.Body>
    <h5>Deseja fazer logout?</h5>
   <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={logout} >
            Sim
          </Button>
        </Modal.Footer>
    </Modal.Body>
    </Modal>


    {loaddingEncerrar &&
    <div className={StyleBar.DivSpinnerLoadding}>
        <RotateLoader color="#36d7b7" size="14" margin="15" className={StyleBar.SpinnerLoadding} />
    </div>
}


    </>
  )
}

