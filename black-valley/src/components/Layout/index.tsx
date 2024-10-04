'use client'

import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import Logo from '../../assets/imgs/logoBlackValley.png'
import { Special_Elite } from 'next/font/google'
import Image from 'next/image';


interface Props {
    children: React.ReactNode;
}

const specialElit = Special_Elite({
    weight: "400",
    subsets: ["latin"],

})
const Layout: React.FC<Props> = ({
    children
}) => {
    const [title, setTitle] = useState<string>('')

    useEffect(() => {
        const messageTitle = 'BlackValley Performance'
        setTimeout(() => {
            if (title.length === messageTitle.length) {
                setTimeout(() => {
                    setTitle('')
                }, 1000)
            } else {
                setTitle(`${title}${messageTitle[title.length]}`)
            }
        }, 200)
    }, [title])
    return (
        <>
            <header className={styles.containerHeader}>
                <section className={styles.headerSection}>
                    <nav className={styles.nav}>
                        <p className={`${specialElit.className} ${styles.title}`} >{title}</p>
                        <div className={styles.containerhref}>
                            <p>Quem Somos</p>
                            <p>Serviços</p>
                            <p>Galeria</p>
                            <p>Contato</p>
                        </div>
                    </nav>
                    <article className={styles.containerAll}>
                        <div>
                            <div>
                                <div className={styles.containerText}>
                                    <h2>BlackValley -</h2>
                                    <p>Dirija</p>

                                </div>
                                <p>com Segurança</p>
                            </div>
                            <p className={styles.message}>Na BlackValley, nossa prioridade é garantir que você dirija com total segurança e tranquilidade. Oferecemos uma gama completa de serviços automotivos voltados para a confiabilidade do seu veículo. Nossos profissionais qualificados utilizam tecnologia de ponta e peças de alta qualidade para realizar manutenções preventivas e corretivas.</p>
                        </div>
                        <div>
                            <Image src={Logo} alt='logo blackValley' width={200} />
                        </div>
                    </article>
                </section>
                <section className={styles.containerBrands}>
                    <article className={styles.brand}>

                    </article>
                </section>
            </header>
            <main className={styles.containerMain}>
                {children}
            </main>
        </>
    );
}

export default Layout;