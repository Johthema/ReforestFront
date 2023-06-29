import Header from '../../../components/header/index'
import { useState, useEffect  } from 'react'
import Style from './listauser.module.css'
import Table from 'react-bootstrap/Table';
import { FaEdit, FaTrashAlt, FaSearch } from 'react-icons/fa';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const URL_API=  "http://192.168.0.249:3001/api/users";


export default function ListarUsuario(){
   
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null)

    //variáveis de filtros
    const [initialRepos, setInitialRepo] = useState([])
    const [repos, setRepo] = useState([])


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

    const handleChange = ({target}) =>{
      if(!target.value){
        setRepo(initialRepos)
        return;
      }

      const filterRepos = repos.filter(({name}) => name.includes(target.value));
      setRepo(filterRepos)
    }

    return(
        <div>
            <Header></Header>
            <input type="text" onChange={handleChange}/>
            <ul>
              {repos.map((repo)=>(
                <li key={repo._id}>{repo.name}</li>
              ))}
            </ul>

         
                    {/* Primeiro carregamento será o loadingo para saber se existe algo em data */}
                {/* {loading && !data &&
                <h3>Carregando informações...</h3>
                } */}

                   
                   <div className={Style.divFundo}>
                      <InputGroup className={Style.Busca}>
                          <Form.Control
                            placeholder="Buscar"
                            aria-label="Buscar por nome"
                            aria-describedby="basic-addon2"
                          />
                          <Button variant="outline-secondary" id="button-addon2">
                            <FaSearch/>
                          </Button>
                      </InputGroup>

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
                           {data && data.map((item) => (
                                <tr>

                                    <td><h2 key={item._id} className={Style.FontUsuario}> {item.name}</h2></td>
                                    <td><h2 key={item._id} className={Style.FontUsuario}> {item.fullname}</h2></td>
                                    <td><h2 key={item._id} className={Style.FontUsuario}> {item.email}</h2></td>
                                    <td><h2 key={item._id} className={Style.FontUsuario}> {item.phone}</h2></td>
                                    <td><h2 key={item._id} className={Style.FontUsuario}> {item.createAt}</h2></td>
                                    <td className={Style.Editar}><FaEdit className={Style.icoEditar}/></td>
                                    <td className={Style.Deletar}><FaTrashAlt className={Style.icoDeletar}/></td>
                                </tr>
                            ))}
                         
                           
                        </tbody>
                    </Table>
                    
                    </div>
             
          
        </div>
    )
}