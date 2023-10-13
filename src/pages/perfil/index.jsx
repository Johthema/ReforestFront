import Header from '../../components/header/index';
import Style from './sobre.module.css';
import {useEffect, useState} from 'react'
import Image from 'next/image';
import Perfil from '../../assets/images/fotoperfil/fotoper.jpg';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaPen, FaCamera, FaImage } from "react-icons/fa";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import { useRouter } from "next/router"

export default function PerfilUsuario(){

  const URL_API = process.env.NEXT_PUBLIC_API_URL+"user";
    //Primeiro carregamengto para saber se esta tudo certo

    const [dataUser, setDataUser] = useState('');
    const [loading, setLoading] = useState(false);

    const fecthAllData = async () => {
      try {
  
        setLoading(true)
        const response = await fetch(URL_API+"/"+localStorage.getItem("idUs")) //por padrão o fetch ja utiliza o GET
        const dadosUsuario = await response.json()
  
        if (!dadosUsuario)
          throw 'problema na requisição' //Aqui será tratado o erro de requisição. Porém é melhor tratar pelo status(200, 400, 500)
        setDataUser(dadosUsuario)
        console.log("Dados trazidos: ", dadosUsuario )
  
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
  
    }
   
    //useEffect Lida com o ciclo de vida da aplicação para não ficar em loop infinito
    useEffect(() => {
      fecthAllData();
  
    }, []);

    const router = useRouter();

   const EditarUser=()=>{
    router.push('/configuracao');
   }
    

    return(
        <>
        <Header></Header>
        <div className={Style.DivHeader}>

        <Image src={Perfil} roundedCircle className={Style.FotoPerfil} />
        <div  className={Style.EditFotoPerfil}><FaImage/></div>

        </div>
        <div>
        <Tabs
      defaultActiveKey="perfil"
      transition={true}
      id="noanim-tab-example"
      className={Style.BarHeader}

    >
      <Tab eventKey="perfil" title="Informações Pessoais">




        <div className={Style.DivInfoEdit}>


        <OverlayTrigger overlay={
  <Tooltip id="tooltip-disabled"  >
  Editar
  </Tooltip>} placement="left">
  <div >
  <FaPen className={Style.IconInfoEdit} onClick={EditarUser}/>
  </div>
</OverlayTrigger>
            
           
            
            
            </div>
       <div className={Style.DivInfoPess}>
        <div className={Style.DivInfo}>
            <h2>Nome:  </h2>
            <h2>Sobrenome/ Razão Social: </h2>
            <h2>Email: </h2>
            <h2>Telefone: </h2>
            <h2>Papel: </h2>
            <h2>Tipo depessoa: </h2>
        </div>
        <div>
            <h2>{dataUser.name} </h2>
            <h2>{dataUser.surname || dataUser.fullname} </h2>
            <h2>{dataUser.email} </h2>
            <h2>{dataUser.phone} </h2>
            <h2>Admin e User </h2>
            <h2>{dataUser.person} </h2>
        </div>

       </div>
      </Tab>
      <Tab eventKey="profile" title="Informações de Faturamento">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Floresta">
        Tab content for Contact
      </Tab>
    </Tabs>
        </div>
        {/* <h4 className={Style.LegendaFoto}>Trocar foto</h4> */}

        
          {loading &&
          <Alert key="12345" variant="primary" className={Style.botaoCarregamento}>
            <Spinner animation="border" variant="primary" /> Aguarde, carregando...
          </Alert>
        }
        </>
    )
}