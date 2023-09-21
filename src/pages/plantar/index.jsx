import Header from '../../components/header/index'
import Foot from '../../components/footer/index'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Style from './plantar.module.css';
import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import { FaEdit } from "react-icons/fa";
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

const URL_API = process.env.NEXT_PUBLIC_API_URL+"tree";

export default function Plantar(){
    const [reloadCount, setReloadCount] = useState(0);
    const [dados, setData] = useState([]);
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    useEffect(() => {
    
        const fetchRepos = async () => {
          try {
            // setLoading(true)
            //console.log("o tipo de arvore é: ",tipo)
          
              const response = await fetch(URL_API)
              // const dados = await response.json();
              const dados = await response.json()
              setData(dados)
            
             
          console.log("Lista pronta: ", dados)
    
          } catch (error) {
            console.log(error)
            // setErroInterno(true)
          }
        }
        fetchRepos()
      }, [reloadCount]);


 
    return (
        <>
        <Header></Header>
        <div className={Style.divFundoPlantar}>
          
        <div className={Style.Coluna1}>
                        

        <Carousel data-bs-theme="dark" indicators= {""} >

            {dados && dados.map((item, i = index) => (

            <Carousel.Item key={i} >

            <Card className={Style.Card} key={item._id}>
            <Card.Header className={Style.HeaderCard0}>
            <div className={Style.HeaderCard}>

            {item.approved == true &&
            <h3 className={Style.StatusCard} >
            Aprovado
            </h3>
            }
            {item.approved == false &&
            <h3 className={Style.StatusCard2} >
            Reprovado
            </h3>
            }
            
            <div className={Style.opcoesCard}>
            {/* <FaEdit className={Style.iconeCard}/> */}
            <CloseButton/>
            {/* <FaRegWindowClose className={Style.iconeCard}/> */}
            </div>
            </div>

            </Card.Header>

            <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            {/* <Image src={ImgArvore} className={Style.imgArvore} alt=""/> */}
            </Card.Body>
            <Card.Footer className="text-muted">
            <Form.Control type="number" placeholder="Quantidade" />
            </Card.Footer>
            </Card>
            </Carousel.Item>

            )
            )
            }

        </Carousel>





                    </div>
                    <div className={Style.Coluna2}>
                    <h4 className={Style.nomeH4}>Revise seu investimento</h4>
                        <div className={Style.divDetailCompra}>
                            <div className={Style.divDetailhesLados}>
                            {/* <div className={Style.legendaladoA}>
                                <h5 className={Style.legendah5}><b>Local de plantação</b></h5>
                                <h5 className={Style.legendah5}><b>Espécie</b></h5>
                                <h5 className={Style.legendah5}><b>Árvores para plantar</b></h5>
                                <h5 className={Style.legendah5}><b>Compensação total de CO2</b></h5>
                                <h5 className={Style.legendah5}><b>Valor total</b></h5>
                                
                            </div>
                            <div className={Style.legendaladoB}>
                                <h5 className={Style.legendah5}>Alberton - Gold Coast, Austrália </h5>
                                <h5 className={Style.legendah5}>Tectona grandis</h5>
                                <h5 className={Style.legendah5}>10</h5>
                                <h5 className={Style.legendah5}>1,500 Kg</h5>
                                <h5 className={Style.legendah5}>40€</h5>
                            </div> */}  
                            </div>

                                <h5 className={Style.legendaH5}><b>Local de plantação</b> <span className={Style.legendaH5}>Alberton -Austrália</span></h5>
                                <h5 className={Style.legendaH5}><b>Espécie</b><span className={Style.legendaH5}>Tectona grandis</span></h5>
                                <h5 className={Style.legendaH5}><b>Árvores para plantar</b><span className={Style.legendaH5}>10</span></h5>
                                <h5 className={Style.legendaH5}><b>Compensação total de CO2</b><span className={Style.legendaH5}>1,500 Kg</span></h5>
                                <h5 className={Style.legendaH5}><b>Valor total</b><span className={Style.legendaH5}>40€</span></h5>
                        

                         <div className={Style.botaoContinuar}>
                            Continuar compra
                        </div>
                        </div>
                        
                    </div>
                
        </div>
        <Foot/>
        
        </>
    )
}