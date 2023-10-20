import Style from './sobre.module.css';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import ImgArvore from '../../assets/images/arvore_1.jpg';
import { FaDice, FaGlobeAmericas, FaCity, FaTree, FaBinoculars, FaAnchor, FaRulerCombined, FaCrosshairs} from "react-icons/fa";

export default function Sobre (){
    return(
        <div className={Style.barraCabelho}>
            <Header/>
            <div className={Style.barraCabecalho}>
                <div className={Style.divTitleSubTit}>
                    <h1 className={Style.legendaCabecalho}><b>Sobre a</b> Reforest</h1>
                    <h5 className={Style.subtituloCabecalho}>Tecnologia Verde: Um Sistema Web para o Futuro da Reflorestação</h5>
                  
                    <Button className={Style.botaoPlantar} href="/plantar">Plantar agora</Button>
                </div>
              
            </div>
            <div className={Style.divPropMetd}>
                <div className={Style.divProposta}>
                    <h2 className={Style.legendaProposta}>Nossa proposta</h2>
                    <p> Estabelecer um programa de reflorestamento para combater a degradação ambiental,
                         promover a conservação da biodiversidade e reduzir as emissões de carbono em uma determinada área.</p>
                </div>
                <div className={Style.divMetodo}>
                    <h2 className={Style.legendaMetodo}>Nosso método</h2>
                    <p> Nosso metodo é Estabelecer um programa de reflorestamento para combater a degradação ambiental,
                         promover a conservação da biodiversidade e reduzir as emissões de carbono em uma determinada área.</p>
                </div>
            </div>
            <div className={Style.divProvaSocial}>
                <div className={Style.divTituloLugaresPlant}>
                    <h3 className={Style.legendaMetodo}>Alguns lugares de plantação</h3>
                </div>
                <div className={Style.divProva1}>
                    <div className={Style.divIcone}>
                    <FaDice className={Style.Icone}/>
                    </div>
                    <div className={Style.Prova1}>
                       
                        <div className={Style.divIcones}><FaCity className={Style.Icon2} /> Cidade: <h5 className={Style.nomeItem}>Manaus</h5></div>
                        <div className={Style.divIcones}><FaTree className={Style.Icon3} /> Árvores plantadas: <h5 className={Style.nomeItem}>20</h5></div>
                        <div className={Style.divIcones}><FaRulerCombined className={Style.Icon5} /> Hectares: <h5 className={Style.nomeItem}>400</h5></div>


                    </div>    
                    <Image src={ImgArvore} className={Style.divImagem} alt="" />
                </div>
                <br/>
                <div className={Style.divProva1}>
                    <div className={Style.divIcone}>
                    <FaDice className={Style.Icone}/>
                    </div>
                    <div className={Style.Prova1}>
                       
                        <div className={Style.divIcones}><FaCity className={Style.Icon2} /> Cidade: <h5 className={Style.nomeItem}>Manaus</h5></div>
                        <div className={Style.divIcones}><FaTree className={Style.Icon3} /> Árvores plantadas: <h5 className={Style.nomeItem}>20</h5></div>
                        <div className={Style.divIcones}><FaRulerCombined className={Style.Icon5} /> Hectares: <h5 className={Style.nomeItem}>400</h5></div>


                    </div>    
                    <Image src={ImgArvore} className={Style.divImagem} alt="" />
                </div>
                <br/>
                <div className={Style.divProva1}>
                    <div className={Style.divIcone}>
                    <FaDice className={Style.Icone}/>
                    </div>
                    <div className={Style.Prova1}>
                       
                        <div className={Style.divIcones}><FaCity className={Style.Icon2} /> Cidade: <h5 className={Style.nomeItem}>Manaus</h5></div>
                        <div className={Style.divIcones}><FaTree className={Style.Icon3} /> Árvores plantadas: <h5 className={Style.nomeItem}>20</h5></div>
                        <div className={Style.divIcones}><FaRulerCombined className={Style.Icon5} /> Hectares: <h5 className={Style.nomeItem}>400</h5></div>


                    </div>    
                    <Image src={ImgArvore} className={Style.divImagem} alt="" />
                </div>
                
            </div>
            <br/>

            <div className={Style.divVAlores}>
                <div className={Style.divMissao}>
                    <div className={Style.divIntMissao}>
                        <FaCrosshairs className={Style.Icones}/>
                        <h2>Missão</h2>
                        <p>
                        Nosso compromisso é contribuir para a saúde do planeta, 
                        protegendo a biodiversidade e fornecendo soluções reflorestamento para
                        as gerações presentes e futuras. Colaborando com comunidades locais para promover
                        o equilíbrio entre o desenvolvimento humano e a preservação do meio ambiente.
                        </p>
                        
                    </div>
                   
                </div>
                <div className={Style.divVisao}>
                    <div className={Style.divIntVisao}>
                        <FaBinoculars className={Style.Icones}/>
                        <h2>Visão</h2>
                        <p>
                        Nossa visão é ser líder global na restauração de ecossistemas, 
                        reconhecidos por nossa excelência em práticas de reflorestamento neutralizando o gás carbônico.  
                        Contribuindo para a mitigação das mudanças climáticas e a melhoria da qualidade de vida
                        de todas as formas de vida na Terra. 
                        </p>
                    </div>
                </div>
                <div className={Style.divValor}>
                    <div className={Style.divIntValor}>
                        <FaAnchor className={Style.Icones}/>
                        <h2>Valor</h2>
                        <p>
                            <ul>
                                <li>Sustentabilidade</li>
                                <li>Responsabilidade ambiental</li>
                                <li>Inovação</li>
                                <li>Colaboração</li>
                                <li>Compromisso com resultados</li>
                            </ul>
                            
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}