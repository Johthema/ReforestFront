import Header from '../../../components/header/index';
import Arvores from '../../../components/cards/cardArvore/index';
import Style from './listalocais.module.css';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Logotipo from '../../../assets/images/fundofloresta4.jpg';
import Footer from '../../../components/footer/index';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaGlobeAmericas, FaCity, FaTree, FaSeedling, FaRulerCombined } from "react-icons/fa";


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

          <Card key={i} className={Style.cardLocais}>
                        <Card.Header className={Style.HeaderLocais}><h4>{item.name}</h4></Card.Header>
                        <Card.Body>
                          {/* <Card.Title>Special title treatment</Card.Title> */}
                          <Image src={Logotipo} className={Style.imagemLocal} alt="" />
                          <Card.Text className={Style.DescricaoLocais}>
                          <h5>{item.description}</h5>
                          </Card.Text>
                          {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        <Card.Footer className="text-muted">
                          {/* <div className={Style.footerCard}>
                          
                          </div> */}
                          <div className={Style.divIcones}><FaGlobeAmericas className={Style.Icon1}/> País: </div>
                          <div className={Style.divIcones}><FaCity className={Style.Icon2}/> Cidade: </div>
                          <div className={Style.divIcones}><FaTree className={Style.Icon3}/> Árvores plantadas: </div>
                          <div className={Style.divIcones}><FaSeedling className={Style.Icon4}/> Árvores a plantar: </div>
                          <div className={Style.divIcones}><FaRulerCombined className={Style.Icon5}/> Hectares: </div>
                         
                          </Card.Footer>
          </Card>


            // <div className={Style.cardLocais} key={i}>

            //   <div className={Style.divNome}>
            //   <h2 key={item._id}>{item.name}</h2>
            //   </div>
               

            //   <Image src={Logotipo} className={Style.imagemLocal} alt="" />
            //   <div className={Style.divDescricao}>
            //     <p>{item.description}</p>
            //   </div>
            //   <div>
            //     <h4></h4>
            //   </div>
              
            // </div>

            ))}

           </div>
           <Footer/>
        </div>
    )
}