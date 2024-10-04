'use client'

import React from 'react';
import styles from './styles.module.scss'
// import { Container } from './styles';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({
    children
}) => {
    return (
        <>
            <header className={styles.containerHeader}>

            </header>
            <main className={styles.containerMain}>
                {children}
            </main>
        </>
    );
}

export default Layout;