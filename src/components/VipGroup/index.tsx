import React from 'react';
import { ArticleImage, ArticleText, ContainerGroup } from './styled';

// import { Container } from './styles';

import ImageGroup from '../../assests/images/logoBlackValley.png';
import Pin from '../../assests/images/jetta sem fundo.png';


import styled from './index.module.css';
import Image from 'next/image';
import { ButtonForm } from '../FormData/styled';
import { UseHookDimensionsContext } from '@/utils/hook';

const VipGroup: React.FC = () => {
    const { pageSize } = UseHookDimensionsContext();
    return (
        <ContainerGroup>
            <h2 className={styled.title}>Marcas</h2>
            <div>
                <ArticleImage>
                    <Image
                        src={ImageGroup}
                        alt='Imagem Dardania'
                        height={pageSize.width > 765 ? ImageGroup.height * 0.7 : ImageGroup.height * 0.5}
                    />
                    <ArticleText>
                        <p>
                            Na BlackValley, somos especialistas em manutenção de veículos e diagnósticos VCDS, oferecendo atendimento especializado para diversas marcas renomadas do mercado automotivo. Cuidamos de veículos Mercedes-Benz, BMW, Volkswagen, Toyota, Audi, Fiat, Honda e Hyundai. Nossa equipe está preparada para realizar serviços de alta qualidade, garantindo o perfeito funcionamento do seu carro. Seja qual for a marca, contamos com os melhores recursos e tecnologia de ponta para atender suas necessidades com eficiência e precisão.
                        </p>
                        <Image
                            src={Pin}
                            alt='Imagem Dardania'
                            height={Pin.height * 0.1}
                        />

                    </ArticleText>
                </ArticleImage>
            </div>
        </ContainerGroup>
    );
}

export default VipGroup;