import { useEffect, useState } from 'react'

const URL_API=  "http://192.168.0.252:3001/api/users";

export default function ListaUs() {

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
  
    
    return (
   
    <>
  {/* Primeiro carregamento será o loadingo para saber se existe algo em date */}
    <h2>Requisicao com api</h2>
      {loading && !data &&
      <h3>Carregando informações...</h3>
      }
  
  {/* Segundo carregamento será para listar cada item existente no array data pelo metodo map */}
      {data && data.map((item) => (
        <p key={item._id}> {item.name}</p>
        
      ))}
  
    </>
    )
    
  }
  
  