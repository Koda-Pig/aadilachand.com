import { useRef } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
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
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Navbar element={container} />
      <main ref={container} className={styles.container}>
        <Hero element={container} />
        <Work />
        <About />
        <Contact />
      </main>
      <ScrollToTop element={container} />
    </>
  )
}
