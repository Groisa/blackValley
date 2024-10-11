import Head from 'next/head'
import Image from 'next/image'
import { Inter, Montserrat } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LandingPageStructure from '@/components/LandingPageStructure'
import HookDimensionsProvider from '@/utils/hook'

const inter = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={`${styles.main} ${inter.className}`}>
        <LandingPageStructure />
      </div>
    </>
  )
}
