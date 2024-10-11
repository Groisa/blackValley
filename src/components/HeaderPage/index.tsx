import React, { useEffect, useState } from 'react';
import { BlurOut, ContainerCardStyled, ContainerImage, ContainerNav, MainHeader, TopHeader } from './styled';

import { FaBarsStaggered, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

// import { Container } from './styles';

import JettaSemfundo from "../../assests/images/jetta sem fundo.png";
import LogoBlackValley from "../../assests/images/logoBlackValley.png";
import LogoD from "../../assests/images/BGrande.png"


import Image from 'next/image';

import styled from "./index.module.css"

import { UseHookDimensionsContext } from '@/utils/hook';
import Link from 'next/link';

interface TopHeaderTextType {
    title: string;
    href: string;
}


const TopHeaderText = [
    {
        title: "Trabalhos",
        href: "#trabalhos",
    },
    {
        title: "VCDS",
        href: "#vcds",
    },
    {
        title: "FeedBacks",
        href: "#feedBacks",
    },
    {
        title: "Marcas",
        href: "#marcas",
    },
    {
        title: "Entrar em Contato",
        href: "#entrar-em-contato",
    }

] as TopHeaderTextType[];


interface PageSize {
    width: number;
    height: number;
}

interface PropsContainerCard {
    backgroundColor: string;
    title: string;
    description: string;
    href: string;
}

const containerCardNew: PropsContainerCard[] = [
    {
        backgroundColor: "linear-gradient(180deg, #ff0000 0%, #000000 100%)",
        title: "Trabalhos de qualidade",
        description: "Clique para conhecer",
        href: "#trabalhos"
    },
    {
        backgroundColor: "linear-gradient(180deg, #ffff 0%, #bc1e1e 100%)",
        title: "VCDS",
        description: "Personalize seu carro",
        href: "#vcds"
    },
    {
        backgroundColor: "linear-gradient(180deg, #ffff 0%, #e73131 100%)",
        title: "FeedBacks",
        description: "Respostas de clientes",
        href: '#feedBacks'
    }

]

const ContainerCard: React.FC<PropsContainerCard> = ({ href, backgroundColor, description, title }) => {
    return (
        <ContainerCardStyled backgroundColor={backgroundColor}>

            <a href={href}>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4>{title}</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M8.14123 1.28966L9.31623 3.63966C9.47456 3.96466 9.89956 4.27299 10.2579 4.33966L12.3829 4.68966C13.7412 4.91466 14.0579 5.898 13.0829 6.88133L11.4246 8.53967C11.1496 8.81467 10.9912 9.35633 11.0829 9.748L11.5579 11.798C11.9329 13.4147 11.0662 14.048 9.64123 13.198L7.64956 12.0147C7.29123 11.798 6.69123 11.798 6.33289 12.0147L4.34122 13.198C2.91623 14.0397 2.04958 13.4147 2.42458 11.798L2.89958 9.748C2.99125 9.36467 2.83291 8.823 2.55791 8.53967L0.899586 6.88133C-0.075415 5.90633 0.241252 4.92299 1.59959 4.68966L3.72456 4.33966C4.08289 4.28133 4.50789 3.96466 4.66622 3.63966L5.84123 1.28966C6.46623 0.0146542 7.49956 0.0146542 8.14123 1.28966Z" fill="#E9D83F" />
                        </svg>
                    </div>
                    <p>{description}</p>
                </div>
            </a>
        </ContainerCardStyled>
    )
}


const HeaderStrucuture: React.FC = () => {
    const { pageSize } = UseHookDimensionsContext()
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const subdomain = pageSize.width > 768 ? 'web' : 'api'

    const phone = "5531971400250"

    return (
        <>
            <TopHeader>
                {
                    pageSize.width > 765 ? (
                        <>
                            <div>
                                {
                                    TopHeaderText.map((item, index) => (
                                        <a href={item.href} ><p>{item.title}</p></a>
                                    ))
                                }
                            </div>
                            <div>
                                <FaBarsStaggered color="#fff" size={25} />
                            </div>
                        </>
                    ) : (
                        <>
                            <nav className={styled.containerNav} style={{ backgroundColor: menuOpen ? "rgb(000,000,000,0.5)" : "transparent", marginLeft: -30, marginTop: menuOpen ? -30 : 0, transition: '1s', }}>
                                {
                                    menuOpen === false ? (
                                        <FaBarsStaggered
                                            color="#fff"
                                            size={25}
                                            onClick={() => {
                                                setMenuOpen(true);
                                            }}
                                        />
                                    ) : (
                                        <AiOutlineClose
                                            color="#fff"
                                            size={25}
                                            onClick={() => {
                                                setMenuOpen(false);
                                            }}
                                        />
                                    )
                                }
                                <Image
                                    loading={'lazy'}
                                    className={styled.logo}
                                    src={LogoD}
                                    width={LogoD.width * 0.1}
                                    alt="Imagem da logo da personal dardânia"
                                />
                            </nav>
                        </>
                    )
                }
                {
                    <ContainerNav menuOpen={menuOpen} width={pageSize.width}>
                        {
                            TopHeaderText.map((item, index) => (
                                <a href={item.href} ><p>{item.title}</p></a>
                            ))
                        }
                    </ContainerNav>
                }
            </TopHeader>
            <MainHeader>
                <div className={styled.containerMainHeader}>

                    <h1>Dirija com<br /><span className={styled.titleSecond}> Segurança</span></h1>
                    <span className={styled.containerLogo}>

                        <h1 style={{ margin: 45 }}>BlackValley</h1>

                        {
                            pageSize.width <= 765 && (
                                <Image
                                    loading={'lazy'}
                                    className={styled.logo}
                                    src={LogoBlackValley}
                                    width={pageSize.width > 765 ? LogoBlackValley.width * 0.85 : LogoBlackValley.width * 0.45}
                                    alt="Imagem da logo da personal dardânia"
                                />
                            )
                        }
                        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>

                            <h2>Manutenção</h2>
                            <h3>Personalizada para seu carro</h3>
                            <div className={styled.containerWhats}>
                                <span>
                                    <Link
                                        href={`https://${subdomain}.whatsapp.com/send?phone=${phone}&text=Olá , Gostaria de fazer um orçamento para meu carro`}
                                        target='_blank'
                                    >

                                        <FaWhatsapp
                                            color="#fff"
                                            fontSize={30}
                                        />
                                    </Link>
                                </span>
                                <span>
                                    <Link
                                        href={'https://www.instagram.com/vally_performance/'}
                                        target='_blank'
                                    >
                                        <FaInstagram
                                            color="#fff"
                                            fontSize={30}
                                        />
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </span>
                </div >
                {
                    pageSize.width > 765 && (
                        <>
                            <BlurOut />
                            <Image
                                loading={'lazy'}
                                className={styled.logo}
                                src={LogoBlackValley}
                                width={pageSize.width > 765 ? LogoBlackValley.width * 0.85 : LogoBlackValley.width * 0.45}
                                alt="Imagem da logo da personal dardânia"
                            />
                        </>
                    )
                }

            </MainHeader >
            <span className={styled.containerCards}>
                {
                    containerCardNew.map((item, index) => (
                        <ContainerCard
                            backgroundColor={item.backgroundColor}
                            description={item.description}
                            title={item.title}
                            key={index}
                            href={item.href}
                        />
                    ))
                }
            </span>
        </>
    );
}

export default HeaderStrucuture;