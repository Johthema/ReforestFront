import Style from './landing.module.css';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Foto1 from '../../assets/images/fotopage1.png';
import Logo from '../../assets/images/logo.png';
import Usina from '../../assets/images/usinas.jpg';
import Plantando from '../../assets/images/plantando.jpg';
import Mulher from '../../assets/images/mulher.jpg';
// import Foto2 from '../../assets/images/fotopage2.jpg';
// import Foto3 from '../../assets/images/fotopage3.jpg';
// import Foto4 from '../../assets/images/fotopage4.jpg';
import Cards from '../../components/cards/cardHome/index';
import Foot from '../../components/footer/index'
import {FaChartBar, FaTree, FaChartArea, FaUsers, FaChartLine, FaUserFriends, FaHeart } from "react-icons/fa";
import Map from "../../components/mapa/index";

export default function LandingPage(){
    const latitude = -23.550520;
    const longitude = -46.633308;



    return(
        <>
        <div className={Style.DivFundoladingpage}>
           
            <div >
                <div className={Style.menuLogin}>
                    <div className={Style.btnItem1}>Cadastre-se</div>
                    <div className={Style.btnItem2}>Login</div>
                </div>
                <div className={Style.DivHeaderPage}>
                <div className={Style.DivTextoPage}>
                    <div>
                        <h4>
                         O Aumento de CO2 provoca diminuição e <span className={Style.texto1}>Perdas Alarmantes</span> de vidas terrestres,
                         mas plantar árvores surge como <span className={Style.texto1}>Solução Vital</span> para o planeta.
                        </h4>
                    </div>
                    <div>
                        <h4>
                        Junte-se a plantadores de árvores e defensores da natureza. 
                        Plante esperança, cultive parcerias. Visite agora e faça parte dessa rede de transformação.
                        </h4>
                    </div>
                    <div className={Style.botaoPlantar}>
                    Plante sua árvore
                    </div>
                
                </div>
            <Image src={Foto1} className={Style.Estilofoto1} alt="" />
            </div>


            <div>
            <Image src={Logo} className={Style.EstiloLogo} alt="" />
            </div>

            <div className={Style.divJustificativa}>
                <div>
                <Image src={Usina} className={Style.EstiloUsina} alt="" />
                </div>
                <div>
                    <h4>
                    Segundo dados da (Global Carbon Project)
                    foram <span className={Style.texto2}>emitidos</span> cerca de <span className={Style.texto2}>34,6 bilhões</span> de toneladas de <span className={Style.texto2}>gás carbônico</span>
                     somente no ano de 2019.
                    </h4>
                    <br/>
                    <h4> 
                    Um dos fatores que levou ao
                    número crescente de CO2 é a <span className={Style.texto2}>queimada</span> e o <span className={Style.texto2}>desmatamento</span>
                    </h4>
                    <br/>
                    <h4>
                    Somente na Amazonia foram devastadas cerca de 
                    <span className={Style.texto2}> 10.573km2</span>
                    </h4>

                    <div className={Style.botaoSaiba}>
                    Saiba mais
                    </div>

                </div>
            </div>
            <div className={Style.divlegendaPlantando}>
                <div className={Style.divdivLegenda}>
                    <h4>
                        <span className={Style.EstilopLegPlantArv}>Plantar Árvores:</span> O Passaporte Verde para um Mundo Mais Saudável e Equilibrado!
                    </h4>

                    <div className={Style.botaoPlantar2}>
                    Plantar suas árvores
                    </div>
                </div>
           </div>
          

            <div>
            <Image src={Plantando} className={Style.EstiloPlantando} alt="" />
            </div>

          
            <div className={Style.divConectse}>
                <h4>Conect-se para um futuro mais verde!</h4>
            </div>
           
                <Cards/>
            <div className={Style.divConectse}>
                <h4>Seja um Reforest</h4>
            </div>



            <div className={Style.divlegendaPlantando}>
                <div className={Style.div1}>
                    <h4><FaChartBar className={Style.Icone1}/> Métrica do percentual de CO2 compensado</h4>
                    <h4><FaTree className={Style.Icone1}/> Controle de árvores plantadas</h4>
                    <h4><FaChartArea className={Style.Icone1}/> Controle de áreas de plantação</h4>
                    <h4><FaUsers className={Style.Icone1}/> Conexão com outros ReForests</h4>
                </div>
                <div className={Style.div2}>

                </div>
                <div className={Style.div3}>
                    <h4><FaChartLine className={Style.Icone1}/> Faturamento</h4>
                    <h4><FaUserFriends className={Style.Icone1}/> Controle de usuários</h4>
                    <h4><FaHeart className={Style.Icone1}/> Doação de árvores</h4>

                    <div className={Style.botaoPlantar2}>
                    Plantar suas árvores
                    </div>
                </div>
           </div>
            <div>
            <Image src={Mulher} className={Style.EstiloMulher} alt="" />
            </div>
            <div className={Style.divConectse}>
                <h4>Regiões impactadas</h4>
            </div>
           

            <div className={Style.divHeaderDetail}>
        {/* <Map lat={dataLocal.latitude} lng={dataLocal.longitude} /> */}
        <Map lat={latitude} lng={longitude} />
        </div>
        <div className={Style.divImpactos}>
                <h4>Este é o impacto da nossa jornada para reflorestar o mundo.</h4>
        </div>
        <div className={Style.divImpactosDetail}>
            <div className={Style.divcoluna1}>
                <div><h4> <span className={Style.subtitulo}> 33,027,503</span> <br/> Árvores plantadas </h4></div>
                <div><h4> <span className={Style.subtitulo}> 2,153</span> <br/> Membros em Equipes Net Zero </h4></div>
                <div><h4> <span className={Style.subtitulo}> 350,748</span> <br/> Árvores plantadas via API </h4></div>
            </div>
            <div className={Style.divcoluna2}>
                <div><h4> <span className={Style.subtitulo}> 5,241,197</span> <br/> Toneladas de CO2 compensadas</h4></div>
                <div><h4> <span className={Style.subtitulo}> 1,762,178</span> <br/> Produto Net Zero </h4></div>
                <div><h4> <span className={Style.subtitulo}> 1,138,584</span> <br/> E-mails de Árvores-Presente enviados </h4></div>
            </div>
        </div>
        
         
            </div>
            <Foot/>  
        </div>
       
        </>
    )
} 