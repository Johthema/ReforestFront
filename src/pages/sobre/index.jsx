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
            <div className={Style.divQuemsomos}>
            <h2 className={Style.legendaProposta}>Quem somos</h2>
            <p>

            A Reforest é uma empresa dedicada à restauração da floresta e diminuição de CO2 do planeta, 
            comprometida com a promoção da sustentabilidade ambiental e da preservação da biodiversidade. 
            Somos uma equipe de profissionais apaixonados e comprometidos, unidos por uma visão compartilhada 
            de um mundo mais verde e saudável. Através de nossos esforços incansáveis, inovação constante e parcerias estratégicas, 
            buscamos fazer a diferença positiva no planeta.

            </p>
            </div>
            <div className={Style.divPropMetd}>
                <div className={Style.divProposta}>
                    <h2 className={Style.legendaProposta}>Nossa proposta</h2>
                    <p> Nossa proposta é estabelecer um programa de reflorestamento para combater a degradação ambiental,
                         promover a conservação da biodiversidade e reduzir as emissões de carbono em uma determinada área.</p>
                </div>
                <div className={Style.divMetodo}>
                    <h2 className={Style.legendaMetodo}>Nosso método</h2>
                    <p> Nosso metodo é dispor áreas de plantação para pessoas no mundo inteiro que tenham interesse em plantar
                        e unir partes interessadas de forma virtual.
                    </p>
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

            <div className={Style.divObjetivos}>
                
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
            <Footer/>
        </div>
    )
}