import React from 'react';
import { ContainerMyStudio, BlurOut } from './styled';

// import { Container } from './styles';

import vcds from '../../assests/images/vcds.jpeg'
import vcds2 from '../../assests/images/DALL·E-2024-10-10-23.46.png'

import styled from './index.module.css'
import Image from 'next/image';
import { UseHookDimensionsContext } from '@/utils/hook';



const MyStudio: React.FC = () => {

    const { pageSize } = UseHookDimensionsContext();

    return (
        <ContainerMyStudio>
            <div className={styled.containerPrimary}>
                <div>
                    <h2>VCDS</h2>
                    <p>

                        Desvende o Potencial Máximo do Seu Veículo e Alcance a Performance Extraordinária com o VCDS: A Solução para o Desempenho Perfeito e a Segurança que Você Precisa
                        Transforme o desempenho do seu carro e resolva qualquer problema com precisão com a poderosa tecnologia de diagnóstico VCDS. Com a consultoria especializada da BlackValley, você terá a chave para garantir a saúde perfeita do seu veículo e a performance impecável que você sempre desejou. Nossa equipe dedicada está pronta para otimizar cada detalhe, assegurando que seu carro esteja sempre no seu melhor, proporcionando a tranquilidade e segurança que você precisa nas ruas.
                    </p>
                </div>
                <div className={styled.containerImage} style={{ marginTop: pageSize.width > 765 ? 120 : 50 }}>
                    <img
                        style={{ marginTop: "10%", width: '100%', objectFit: 'cover' }}
                        src={vcds.src}


                        height={pageSize.width > 765 ? 300 : 250.5}
                        alt='Imagem de do estúdio'
                    />
                </div>
                {
                    pageSize.width > 765 && (
                        <BlurOut />
                    )
                }


            </div>
            <div className={styled.containerImageSecond}>
                <div className={styled.containerImage}>
                    <img
                        style={{ marginTop: "10%", width: '100%', objectFit: 'cover' }}
                        src={vcds2.src}


                       
                        alt='Imagem de do estúdio'
                    />
                </div>
                {
                    pageSize.width > 765 && (
                        <BlurOut />
                    )
                }
            </div>
        </ContainerMyStudio>
    );
}

export default MyStudio;