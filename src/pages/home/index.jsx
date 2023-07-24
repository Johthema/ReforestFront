
//import Home from '../pages/home/index'
//import './globals.css'
import Header from '../../components/header/index';
import Footer from '../../components/footer/index'
import React from 'react'
import Cards from '../../components/cards/cardHome/index'
import Style from './home.module.css'
import Image from 'next/image';
import Logotipo from '../../assets/images/Plantacao.png';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
 
<div >

<Header/>
<div className={Style.DivTitulos}>

  <div className={Style.DivInternoTitutlos}>
  <h2 className={Style.tituloH2}>Árvores plantadas hoje</h2>
  <h2 className={Style.subtituloH2}>8.453</h2>
  </div>
  <div className={Style.DivInternoTitutlos}>
  <h2 className={Style.tituloH2}>Árvores plantadas este mês</h2>
  <h2 className={Style.subtituloH2}>40.453</h2>
  </div>
  <div className={Style.DivInternoTitutlos}>
  <h2 className={Style.tituloH2}>Árvores plantadas este ano</h2>
  <h2 className={Style.subtituloH2}>1.245,552</h2>
  </div>
  
</div>
<section className={Style.Sessao1}>
  <div className={Style.DivPlantarArvoreEsquerdo}>
    <div className={Style.TextoArvoreEsquerdo}>
    <h1 className={Style.TituloArvore}>Plante uma árvore</h1>
    <h4 className={Style.subTituloArvore}>Faça a diferença hoje! Plante uma árvore e deixe sua marca no mundo. Contribua para um futuro mais verde e sustentável.</h4>
    <p className={Style.TextoArvore}>
    Juntos, podemos cultivar um ambiente mais saudável para as próximas gerações. 
    Plante uma árvore e seja parte da mudança positiva que nosso planeta precisa!"
    </p>
    <Button variant="success">Plantar</Button>
    </div>
  </div>
  <div className={Style.DivPlantarArvoreDireiro}>
    <div >
    <Image src={Logotipo} className={Style.logo} alt="" />
    </div>
  
  </div>
</section >
<section className={Style.Sessao2}>
  <h2>Segunda sessão</h2>
</section >
<section className={Style.Sessao3}>
  <h2>Terceira sessão</h2>
</section>
<Cards></Cards>

<Footer/>

</div>
)
  
}



// export default function Home (){
//     return(
//         <div>
//         <Header></Header>
//         <h1>Página Início aqui </h1>
//         <Cards></Cards>
//         </div>
//     )
       
    
// }