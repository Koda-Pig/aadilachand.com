import { useRef, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Work from '../components/Work'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import ScrollToTop from '../components/ScrollToTop'
import { menuContext } from '../components/menuContext'

export default function Home() {
  const container = useRef(null)
  const [currentSection, setCurrentSection] = useState([])

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
      <menuContext.Provider value={{ currentSection, setCurrentSection }}>
        <Navbar />
        <main ref={container} className={styles.container}>
          <Hero element={container} />
          <Work element={container} />
          <About element={container} />
          <Contact element={container} />
        </main>
        <ScrollToTop element={container} />
      </menuContext.Provider>
    </>
  )
}
