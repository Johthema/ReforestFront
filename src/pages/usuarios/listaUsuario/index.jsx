import Header from '../../../components/header/index'
import { useState, useEffect  } from 'react'
import Style from './listauser.module.css'
import Table from 'react-bootstrap/Table';
import { FaEdit, FaTrashAlt, FaSearch } from 'react-icons/fa';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Dropdown from 'react-bootstrap/Dropdown';
import {FaUserCircle, FaBell, FaDoorOpen, FaCog, FaChartLine, FaHistory,
        FaPlus, FaEnvira, FaMapMarkerAlt, FaUserFriends, FaSignOutAlt } from "react-icons/fa";





const URL_API=  "http://192.168.0.249:3001/api/users";


export default function ListarUsuario(){
   
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null)

    //variáveis de filtros
    const [initialRepos, setInitialRepo] = useState([])
    const [repos, setRepo] = useState([])

    //-----------------------------------------------------------------------Inicio Função de filtros
    useEffect(()=>{
      const fetchRepos = async () => {
        try {
          const response = await fetch(URL_API)
          const dados = await response.json();
          setInitialRepo(dados);
          setRepo(dados);

        } catch (error) {
          console.log(error)
        }
      }
      fetchRepos()
    }, []);

    const handleChange = ({target}) =>{
      if(!target.value){
        setRepo(initialRepos)
        return;
      }

      const filterRepos = repos.filter(({name}) => name.includes(target.value));
      setRepo(filterRepos)
    }
    //----------------------------------------------------------------------------Fim Função de filtros
  
  //Primeiro carregamengto para saber se esta tudo certo
    const fecthAllData = async ()=> {
      try {
       
        setLoading (true)
        const response = await fetch(URL_API) //por padrão o fetch ja utiliza o GET
        const data = await response.json()

        if (!data) 
          throw 'problema na requisição' //Aqui será tratado o erro de requisição. Porém é melhor tratar pelo status(200, 400, 500)
        setData(data)
  
    //Iniciando a estrutura da requisição
  
      } catch (error) {
        console.log(error)
      } finally{
        setLoading (false)
      }
  
    }
  
    //useEffect Lida com o ciclo de vida da aplicação para não ficar em loop infinito
    useEffect(()=>{
      fecthAllData();
  
    },[]);



    return(
        <div>
            <Header></Header>
           
                    {/* Primeiro carregamento será o loadingo para saber se existe algo em data */}
                  
                      
                    

                   <div className={Style.divFundo}>

                

                      <InputGroup className={Style.Busca}>
                          <Form.Control
                            placeholder="Buscar"
                            aria-label="Buscar por nome"
                            aria-describedby="basic-addon2"
                            onChange={handleChange}
                          />
                          {/* <Button variant="outline-secondary" id="button-addon2">
                            <FaSearch/>
                          </Button> */}
                      </InputGroup>
                      <Navbar className={Style.headerTabela}>
                      <Container>
                        {/* <Navbar.Brand href="#home">Filtros</Navbar.Brand>  */}
                        <Dropdown>
                              <Dropdown.Toggle className={Style.IconeMENU}>
                              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" >Notificação</Tooltip>} placement="left"><Nav.Link href="#deets"  ><FaBell className={Style.Icon} /></Nav.Link></OverlayTrigger>
                              </Dropdown.Toggle>

                              <Dropdown.Menu className={Style.OpDropNotifi}>
                                <Dropdown.Item href="#/action-1" >Esta tudo certo!</Dropdown.Item>
                              </Dropdown.Menu>
                        </Dropdown>
                        </Container>
                    </Navbar>
                    <Table striped bordered hover className={Style.Tabela}>
                        <thead>
                            <tr>

                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>papel</th>
                            <th></th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                       
                        {loading && !data &&
                          <Button variant="primary" disabled >
                          <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            
                          />
                          Carregando informações..
                        </Button>
                           
                          // <Spinner animation="border" role="status">
                           
                          //   <span className="visually-hidden">Loading...</span>
                          // </Spinner>
                        }

                          {repos.map((repo)=>(

                            <tr>
                                    <td><h2 key={repo._id} className={Style.FontUsuario}> {repo.name}</h2></td>
                                    <td><h2 key={repo._id} className={Style.FontUsuario}> {repo.fullname}</h2></td>
                                    <td><h2 key={repo._id} className={Style.FontUsuario}> {repo.email}</h2></td>
                                    <td><h2 key={repo._id} className={Style.FontUsuario}> {repo.phone}</h2></td>
                                    <td><h2 key={repo._id} className={Style.FontUsuario}> {repo.createAt}</h2></td>
                                    <td className={Style.Editar}><FaEdit className={Style.icoEditar}/></td>
                                    <td className={Style.Deletar}><FaTrashAlt className={Style.icoDeletar}/></td>
                            </tr>
        
                          ))}

                           {/* {data && data.map((item) => (
                                <tr>

                                  

                                    <td><h2 key={item._id} className={Style.FontUsuario}> {item.name}</h2></td>
                                    <td><h2 key={item._id} className={Style.FontUsuario}> {item.fullname}</h2></td>
                                    <td><h2 key={item._id} className={Style.FontUsuario}> {item.email}</h2></td>
                                    <td><h2 key={item._id} className={Style.FontUsuario}> {item.phone}</h2></td>
                                    <td><h2 key={item._id} className={Style.FontUsuario}> {item.createAt}</h2></td>
                                    <td className={Style.Editar}><FaEdit className={Style.icoEditar}/></td>
                                    <td className={Style.Deletar}><FaTrashAlt className={Style.icoDeletar}/></td>
                                </tr>
                            ))} */}
                         
                           
                        </tbody>
                    </Table>
                   
                    </div>
                   
             
          
        </div>
    )
}