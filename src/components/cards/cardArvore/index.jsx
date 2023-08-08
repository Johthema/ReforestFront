import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './cardArvore.module.css';
import { FaEdit } from "react-icons/fa";
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import ImgArvore from '../../../assets/images/arvore_1.jpg';
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';

const URL_API = process.env.NEXT_PUBLIC_API_URL+"tree";

export default function CardArvore() {

  const [reloadCount, setReloadCount] = useState(0);
  const [dados, setData] = useState([]);


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
    <Image src={ImgArvore} className={Style.imgArvore} alt=""/>
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

    </>
  );
}
