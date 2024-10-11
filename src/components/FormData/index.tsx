import React, { useEffect, useState } from 'react';
import { ContainerFormData, ContainerElipse, ElipseLogo, ContainerRightFormData, FormContainerData, ButtonForm, ContainerInput, CheckBox } from './styled';
import Image from 'next/image';

// import { Container } from './styles';
import Logo from '../../assests/images/logoBlackValley.png';

import styled from './index.module.css'
import { UseHookDimensionsContext } from '@/utils/hook';
import { useRouter } from 'next/router';
import Modal from '../Modal';

const LeftFormDataSection: React.FC = () => {
    const { pageSize } = UseHookDimensionsContext();
    return (
        <ContainerElipse>

            <Image
                src={Logo}
                className={styled.logoImage}
                width={pageSize.width > 765 ? Logo.width * 0.8 : Logo.width * 0.5}
                alt="Logo"
            />
        </ContainerElipse>
    )
}
interface PropsForm {
    name: string;
    objective: string;
    city: string;
    personal: boolean;
    consultoria: boolean;
}
interface ObjectChecked {
    checked: boolean;
    name: string;
}
interface StateChecked {
    personal?: ObjectChecked;
    consultoria?: ObjectChecked;
}

const RightFormDataSection: React.FC = () => {
    const route = useRouter()
    const [checked, setChecked] = useState<StateChecked>({
        consultoria: {
            checked: false,
            name: 'consultoria'
        },
        personal: {
            checked: false,
            name: 'personal'
        }
    })

    const [show, setShow] = useState(false)
    const [initialValue, setInitialValue] = useState<PropsForm>({
        city: '',
        name: '',
        objective: '',
        personal: false,
        consultoria: false
    })
    const [width, setWidth] = useState<number>(0)
    const [heigth, setHeigth] = useState<number>(0)

    useEffect(() => {
        if (typeof document !== 'undefined') {
            setWidth(document.documentElement.clientWidth)
            setHeigth(document.documentElement.clientHeight)

        }
    }, [])
    const subdomain = width > 768 ? 'web' : 'api'
    useEffect(() => {
        console.log(initialValue)
    }, [initialValue])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const phone = "5531971400250"
        const text = `
            *BlackValley Orçamento*\n-------------------------------------\n *Nome:* ${initialValue.name}\n *Objetivo com o carro:* ${initialValue.objective}\n *Carro/Ano:* ${initialValue.city}\n *Atendimento Escolhido:* ${initialValue.consultoria === true ? 'Manutenção' : initialValue.personal === true ? 'VCDS' : ''}
        `
        route.push(`https://${subdomain}.whatsapp.com/send?phone=${phone}&text=${encodeURI(text)}`)

    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
        if (e.target.type === 'checkbox') {
            setChecked({

                [e.target.name]: {
                    checked: e.target.checked,
                    name: e.target.name
                }
            })

            if (e.target.name === 'personal') {
                setInitialValue({
                    ...initialValue,
                    personal: e.target.checked,
                    consultoria: false
                })
            } else {
                setInitialValue({
                    ...initialValue,
                    consultoria: e.target.checked,
                    personal: false
                })
            }
        } else {
            setInitialValue({
                ...initialValue,
                [e.target.name]: e.target.value
            })
        }
    }
    return (
        <>
            <Modal showModal={show}>
                <div className={styled.containerBodyModal}>
                    <div
                        className={styled.subContainerBodyModal}
                        style={{ height: width < 765 ? heigth * 0.7 : 'auto' }}
                    >
                        <span
                            onClick={() => setShow(false)}
                        >
                            X
                        </span>
                        <div className={styled.containerText}>
                            <div>
                                <h4>Consultoria</h4>
                                <p>
                                    A Consultoria da Dardânia tem como objetivo principal montar um plano de ação personalizado que irá contribuir para o seu desenvolvimento físico e saúde. Através desse plano, você terá orientações específicas para melhorar sua forma física, aumentar sua resistência e adotar hábitos saudáveis, proporcionando assim uma vida mais equilibrada e satisfatória
                                </p>
                            </div>
                            <div>
                                <h4>Personal Trainer</h4>
                                <p>
                                    Um personal trainer é um profissional especializado em orientar e acompanhar indivíduos em sua jornada de condicionamento físico. Ele oferece suporte personalizado, criando programas de treinamento adaptados às necessidades e metas específicas de cada pessoa. O personal trainer fornece instruções sobre exercícios, técnicas corretas, monta planos de treino eficientes e motiva seus clientes a alcançarem seus objetivos, garantindo segurança e maximizando os resultados.
                                </p>
                            </div>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <p style={{ color: 'red', fontSize: '1rem', width: '80%', textAlign: 'center' }}>Vale salientar que a consultoria apenas prescreve e o personal aplica a prescrição e ensina a prática!</p>
                        </div>

                    </div>
                </div>
            </Modal>
            <ContainerRightFormData>
                <h2 className={styled.title}>Fazer Orçamento</h2>
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
                    <FormContainerData>
                        <ContainerInput>
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={initialValue.name}
                                onChange={(e) => handleChange(e)}
                                required />
                        </ContainerInput>
                        <ContainerInput>
                            <label htmlFor="objetivo">Objetivo com o carro</label>
                            <input
                                value={initialValue.objective}
                                type="text"
                                onChange={(e) => handleChange(e)}
                                name="objective"
                                id="objective"
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <label htmlFor="cidade">Carro/Ano</label>
                            <input
                                type="text"
                                name="city"
                                onChange={(e) => handleChange(e)}
                                value={initialValue.city}
                                id="city"
                                required />
                        </ContainerInput>
                        <div>
                            <p style={{ color: "#fff" }}>Atendimento de interesse</p>

                            <div style={{
                                display: 'flex', flexDirection: 'column',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}>
                                <div className={styled.containerChecks}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <CheckBox
                                            checked={checked?.personal?.checked}
                                            style={{ width: 15, height: 15 }}
                                            type="checkbox"
                                            name="personal"

                                            onChange={(e: any) => handleChange(e)}
                                            id="personal" />
                                        <label style={{ color: "#fff" }} htmlFor="Personal">VCDS</label>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} >
                                        <CheckBox
                                            style={{ width: 15, height: 15 }}
                                            type="checkbox"
                                            checked={checked?.consultoria?.checked}
                                            name="consultoria"
                                            onChange={(e: any) => handleChange(e)}
                                            id="consultoria" />
                                        <label style={{ color: "#fff" }} htmlFor="Personal">Manutenção</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </FormContainerData>
                    <ButtonForm>
                        Enviar para o WhatsApp
                    </ButtonForm>
                </form>
            </ContainerRightFormData>
        </>
    )
}
const FormData: React.FC = () => {
    return (
        <ContainerFormData>
            <section style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <LeftFormDataSection />
            </section>
            <section style={{ width: '100%' }}>
                <RightFormDataSection />
            </section>
        </ContainerFormData>
    );
}

export default FormData;