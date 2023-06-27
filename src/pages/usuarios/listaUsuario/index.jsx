import Header from '../../../components/header/index'
import { useEffect, useState } from 'react'
import Style from './listauser.module.css'
const URL_API=  "http://192.168.0.249:3001/api/users";


export default function ListarUsuario(){
   
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null)
  
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
  
    },[])


    return(
        <div>
            <Header></Header>
            <h1>
                Tela de lista de usuários em construção!
            </h1>

            <ul>
                    {/* Primeiro carregamento será o loadingo para saber se existe algo em data */}
                {loading && !data &&
                <h3>Carregando informações...</h3>
                }
            
                    {/* Segundo carregamento será para listar cada item existente no array data pelo metodo map */}
                {data && data.map((item) => (
                    <ul className={Style.listaItemUsuario}>
                        <li className={Style.itemUsuario}>
                        <h2 key={item._id} className={Style.FontUsuario}> {item.name}</h2>
                        </li>
                    </ul>
 
                    
                ))}
             
            </ul>
        </div>
    )
}