import Header from '../../../components/header/index';
import Arvores from '../../../components/cards/cardArvore/index';
import Style from './listalocais.module.css';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Logotipo from '../../../assets/images/fundofloresta4.jpg';
import Footer from '../../../components/footer/index'

export default function ListarLocal(){
    const URL_API = process.env.NEXT_PUBLIC_API_URL+"plantingPlace";

    const [reloadCount, setReloadCount] = useState(0);
    const [dataCat, setData] = useState([]);
    const [name, setNome] = useState('');
  //Primeiro carregamengto para saber se esta tudo certo
  const fecthAllData = async () => {
    try {

      //setLoading(true)
      const response = await fetch(URL_API) //por padrão o fetch ja utiliza o GET
      const dataCat = await response.json()

      if (!dataCat)
        throw 'problema na requisição' //Aqui será tratado o erro de requisição. Porém é melhor tratar pelo status(200, 400, 500)
      setData(dataCat)

      setNome(dataCat.name)
      console.log("Lista de locais: ",dataCat)
      //Iniciando a estrutura da requisição

    } catch (error) {
      console.log(error)
    } finally {
    //   setLoading(false)
    }

  }

  useEffect(() => {
    fecthAllData();

  }, [reloadCount]);


    return(
        <div>
            <Header></Header>
            <div className={Style.divtitulo}>
            <h1>
                Lista de locais de plantação em atividade
            </h1>
            </div>
            
           <div className={Style.divLocais}>
           {dataCat && dataCat.map((item, i = index) => (
            <div className={Style.cardLocais} key={i}>

              <div className={Style.divNome}>
              <h2 key={item._id}>{item.name}</h2>
              </div>
              

              <Image src={Logotipo} className={Style.imagemLocal} alt="" />
              <div className={Style.divDescricao}>
                <p>{item.description}</p>
              </div>
              <div>
                icones 
              </div>
              
            </div>

            ))}

           </div>
           <Footer/>
        </div>
    )
}