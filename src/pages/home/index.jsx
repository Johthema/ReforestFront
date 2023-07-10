
//import Home from '../pages/home/index'
//import './globals.css'
import Header from '../../components/header/index';
import Footer from '../../components/footer/index'
import React from 'react'
import Cards from '../../components/cards/cardHome/index'
import Style from './home.module.css'

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