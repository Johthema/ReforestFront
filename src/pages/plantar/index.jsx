import Header from '../../components/header/index'
import Foot from '../../components/footer/index'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Style from './plantar.module.css';

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';







export default function Plantar(){

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };


 
    return (
        <>
        <Header></Header>
        <div className={Style.divFundoPlantar}>
          
        <div className={Style.Coluna1}>
                        
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        conteudo 1
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        conteudo 2
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        conteudo 3
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
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