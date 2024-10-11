import React, { useState, useEffect } from 'react';
import { BlurOut, CardContainerResult, ContainerResults, ResultsTeamContainer } from './styled';
import Image, { StaticImageData } from 'next/image';

import BlackValley from '../../assests/images/BGrande.png'

import ImagemTest from '../../assests/images/car.png'
import ImagemTest1 from '../../assests/images/car2.png'
import ImagemTest2 from '../../assests/images/car3.png'
import ImagemTest3 from '../../assests/images/car4.png'
import ImagemTest4 from '../../assests/images/car4.jpeg'
import ImagemTest5 from '../../assests/images/car6.jpeg'
import ImagemTest6 from '../../assests/images/car5.jpeg'






import ImageGroupStar from '../../assests/images/imageStar.png'

import styled from './index.module.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { UseHookDimensionsContext } from '@/utils/hook';

// import { Container } from './styles';

interface CardResultsProps {
    image: StaticImageData;
    alt: string;
}

const cardsContent: CardResultsProps[] = [
    {
        alt: "Imagem de resultado",
        image: ImagemTest
    },

    {
        alt: "Imagem de resultado",
        image: ImagemTest2
    },
    {
        alt: "Imagem de resultado",
        image: ImagemTest3
    },
    {
        alt: "Imagem de resultado",
        image: ImagemTest1
    },
    {
        alt: "Imagem de resultado",
        image: ImagemTest4
    },
    {
        alt: "Imagem de resultado",
        image: ImagemTest6
    },
    {
        alt: "Imagem de resultado",
        image: ImagemTest5
    },



]

const CardResults: React.FC<CardResultsProps> = ({ image, alt }) => {
    return (
        <CardContainerResult>
            <div>
                <Image
                    style={{ borderRadius: 20 }}
                    src={image}
                    alt=''
                    width={267}
                    height={340}
                />
            </div>

            <Image
                src={ImageGroupStar}
                alt={"Imagem de estralas"}
            />
        </CardContainerResult>
    )
}


const ResultSections: React.FC = () => {
    const [currentSection, setCurrentSection] = useState<number>(0);
    const [section, setSection] = useState<number>(2);
    const [cardLengthNumber, setCardLengthNumber] = useState<number[]>();
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [countLength, setCountLength] = useState<number>(0)

    const { pageSize } = UseHookDimensionsContext()

    useEffect(() => {
        let lengthCount = cardsContent.length / 2;
        Math.round(lengthCount);
        setCountLength(lengthCount);
        const array: number[] = [];
        for (let i = 0; i < lengthCount; i++) {
            array.push(i + 1)
        };
        setCardLengthNumber(array);
    }, [cardsContent])


    const handleCountPage = (state: "prox" | "ant" | "number", number?: number) => {
        if (number && state === "number") {
            setCurrentPage(number);
            if (number > currentPage) {
                setCurrentSection(number * 2 - 2)
                setSection((number * 2))
            } else {
                setCurrentSection(number * 2 - 2)
                setSection((number * 2))
            }
        }
        if (state === "prox") {

            if (currentPage < countLength) {
                setCurrentSection(e => e + 2)
                setSection(e => e + 2)
                setCurrentPage(e => e + 1)
            }
        }
        if (state === "ant") {

            if (currentPage > 1) {
                setCurrentSection(e => e - 2)
                setSection(e => e - 2)
                setCurrentPage(e => e - 1)
            }
        }
    }
    return (
        <ContainerResults>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
                <Image
                    src={BlackValley}

                    height={pageSize.width > 765 ? BlackValley.height * 0.7 : BlackValley.height * 0.6}
                    alt="foto da personal dardânia com sua roupa e uma #teamDardanete"
                />
            </div>
            {
                pageSize.width > 765 && (
                    <BlurOut />
                )
            }
            <ResultsTeamContainer>
                <h2 className={styled.title}>Trabalhos</h2>
                <p>
                    Potencialize o desempenho do seu veículo com a BlackValley! A combinação da sua confiança com a experiência especializada dos nossos técnicos irá garantir que seu carro esteja sempre no auge, otimizando cada aspecto do desempenho e assegurando um diagnóstico preciso com a nossa tecnologia VCDS. Não deixe a sorte definir a saúde do seu automóvel. Invista na manutenção de alta qualidade com a BlackValley e experimente uma transformação completa, levando o seu carro a um novo patamar de excelência e segurança.
                </p>
                {
                    pageSize.width > 765 ? (
                        <>
                            <div className={styled.containerPhotosResults}>
                                {
                                    cardsContent.slice(currentSection, section).map((item, index) => (
                                        <CardResults
                                            image={item.image}
                                            alt={item.alt}
                                            key={index}
                                        />
                                    ))
                                }
                            </div>
                            <div className={styled.containerCarrousel}>
                                <FaArrowLeft
                                    onClick={() => handleCountPage("ant")}
                                    color='#fff'
                                    style={{ cursor: "pointer" }}
                                />
                                <div>
                                    {
                                        cardLengthNumber?.map((item, index) => (
                                            <p
                                                onClick={() => handleCountPage("number", item)}
                                                style={{ backgroundColor: item === currentPage ? "rgba(000,000,000,0.5)" : "" }}
                                            >
                                                {item}
                                            </p>
                                        ))
                                    }
                                </div>
                                <FaArrowRight
                                    onClick={() => handleCountPage("prox")}
                                    color='#fff'
                                    style={{ cursor: "pointer" }}
                                />
                            </div>
                        </>
                    ) : (
                        <div className={styled.containerPhotosResults}>
                            {
                                cardsContent.map((item, index) => (
                                    <CardResults
                                        image={item.image}
                                        alt={item.alt}
                                        key={index}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </ResultsTeamContainer>

        </ContainerResults>
    );
}

export default ResultSections;