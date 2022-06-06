import { useRef } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Work from '../components/Work'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  const container = useRef(null)
  return (
    <>
      <Head>
        <title>aadila chand - multidisciplinary artist</title>
        <meta
          name="description"
          content="aadila chand | multidisciplinary artist"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar element={container} />
      <div className={styles.container} ref={container}>
        <Hero element={container} />
        <Work />
        <About />
        <Contact />
      </div>
      <ScrollToTop element={container} />
    </>
  )
}
