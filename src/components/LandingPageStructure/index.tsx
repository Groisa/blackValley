import React, { useState, useEffect } from 'react';



// import { Container } from './styles';
import HeaderStrucuture from "@/components/HeaderPage"
import ResultSections from '../ResultSections';
import MyStudio from '../MyStudio';
import MyInstagram from '../MyInstagram';
import FormData from '../FormData';
import VipGroup from '../VipGroup';
import Footer from '../Footer';
import ButtonFloating from '../ButtonFloating';
const LandingPageStructure: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <>
            <header>
                <HeaderStrucuture />
            </header>
            <main style={{scrollBehavior: 'smooth'}}>
                <section id='trabalhos'>
                    <ResultSections />
                </section>
                <section id="vcds">
                    <MyStudio />
                </section>
                <section id="feedBacks">
                    <MyInstagram />
                </section>
                <section id="entrar-em-contato">
                    <FormData />
                </section>
                <section id="marcas">
                    <VipGroup />
                </section>
                {
                    isVisible && (
                        <ButtonFloating />
                    )
                }
            </main>
           
        </>
    );
}

export default LandingPageStructure;