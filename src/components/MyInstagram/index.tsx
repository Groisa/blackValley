import React from 'react';
import { ContainerInstaCard, ContainerMyInstagram } from './styled';
import BlackValley from '../../assests/images/BGrande.png'
import InstaContainer from '../../assests/images/car.png'

import InstaContainer2 from '../../assests/images/car2.png'
import InstaContainer3 from '../../assests/images/car3.png'
import InstaContainer4 from '../../assests/images/car4.png'



import styled from './index.module.css'
import Image, { StaticImageData } from 'next/image';
import { FaInstagram } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { UseHookDimensionsContext } from '@/utils/hook';

// import { Container } from './styles';

const ContainerInstaDardania: React.FC = () => {
    const { pageSize } = UseHookDimensionsContext()
    const route = useRouter()
    return (
        <div className={styled.containerInsta} style={{ width: 'auto' }}>
            <div className={styled.containerSVG}>
                {pageSize.width > 765 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="226" height="53" viewBox="0 0 226 53" fill="none">
                        <path d="M225.198 15.7334C225.051 6.99762 217.929 0 209.192 0H16C7.16345 0 1.03488e-05 7.16344 1.03488e-05 16V30.5664C1.03488e-05 39.7643 7.63811 47.0835 16.8243 46.6202C69.2224 43.9775 226 37.1843 226 50.5144C226 61.3618 225.513 34.2999 225.198 15.7334Z" fill="url(#paint0_linear_153_6)" />
                        <defs>
                            <linearGradient id="paint0_linear_153_6" x1="112.47" y1="0" x2="112.47" y2="56.0159" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#ff0000" />
                                <stop offset="1" stop-color="#edbe02" />
                            </linearGradient>
                        </defs>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="166" height="53" viewBox="0 0 226 53" fill="none">
                        <path d="M225.198 15.7334C225.051 6.99762 217.929 0 209.192 0H16C7.16345 0 1.03488e-05 7.16344 1.03488e-05 16V30.5664C1.03488e-05 39.7643 7.63811 47.0835 16.8243 46.6202C69.2224 43.9775 226 37.1843 226 50.5144C226 61.3618 225.513 34.2999 225.198 15.7334Z" fill="url(#paint0_linear_153_6)" />
                        <defs>
                            <linearGradient id="paint0_linear_153_6" x1="112.47" y1="0" x2="112.47" y2="56.0159" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#ff0000" />
                                <stop offset="1" stop-color="#edbe02" />
                            </linearGradient>
                        </defs>
                    </svg>
                )}
                <Link
                    href={'https://www.instagram.com/vally_performance/'}
                    target='_blank'
                    style={{ cursor: 'pointer' }}
                >
                    <div>
                        <FaInstagram
                            color="#fff"
                            fontSize={30}
                        />
                        <p>Seguir</p>
                    </div>
                </Link>
            </div>
            <Image
                src={BlackValley}
                style={{ position: pageSize.width < 765 ? 'relative' : 'unset', zIndex: -1, left: 40 }}
                width={pageSize.width < 765 ? InstaContainer.width * 0.5 : InstaContainer.width * 0.6}
                alt='imagem da personal trainer dardania'
            />
        </div>
    )
}

const ArrayImage = [
    {
        image: InstaContainer,
        text: 'Depois da troca de velas e bobina queimada meu carro ficou outro'
    },
    {
        image: InstaContainer2,
        text: 'Depois da troca de filtro combustível meu carro está mais confiável'
    },
    {
        image: InstaContainer3,
        text: 'Depois da troca dos bicos meu carro nunca mais deu problema'
    },
    {
        image: InstaContainer4,
        text: 'Melhor Revisão que já tive no meu carro, sem dúvidas'
    },

]
interface InstaCardProps {
    image: StaticImageData
    text: string
}
const InstaCard: React.FC<InstaCardProps> = ({ image, text }) => {
    return (
        <ContainerInstaCard>
            <Image
                style={{ borderRadius: '50%', objectFit: 'cover' }}
                width={150}
                height={150}

                src={image}
                alt='imagens da personal'
            />
            <p>{text}</p>
        </ContainerInstaCard>
    )
}


const MyInstagram: React.FC = () => {
    const { pageSize } = UseHookDimensionsContext()
    return (
        <ContainerMyInstagram>
            <div style={{ display: 'flex', justifyContent: pageSize.width > 765 ? 'flex-end' : 'center' }}>
                <h2 className={styled.title}>FeedBacks</h2>
            </div>
            <div className={styled.containerInstagram}>
                {
                    pageSize.width > 765 ? (
                        <>
                            <div className={styled.containerCardInsta}>
                                {ArrayImage.map((item, index) => (
                                    <InstaCard
                                        text={item.text}
                                        image={item.image}
                                    />
                                ))}

                            </div>
                            <ContainerInstaDardania />
                        </>
                    ) : (
                        <>
                            <ContainerInstaDardania />
                            <div className={styled.containerCardInsta}>
                                {ArrayImage.map((item, index) => (
                                    <InstaCard
                                        text={item.text}
                                        image={item.image}
                                    />
                                ))}
                            </div>
                        </>
                    )
                }
            </div>
        </ContainerMyInstagram>
    );
}

export default MyInstagram;