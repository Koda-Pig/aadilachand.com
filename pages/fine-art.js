import Head from 'next/head'
import { useRef, useState } from 'react'
import styles from '../styles/fine-art/fineArt.module.scss'
import Navbar from '../components/Navbar'
import MenuCtx from '../components/MenuCtx'
import ScrollToTop from '../components/ScrollToTop'
import HoloScene from '../components/fine-art/HoloScene'
import InOrganic from '../components/fine-art/InOrganic'
import Site from '../components/fine-art/Site'
import HumanNature from '../components/fine-art/HumanNature'

export default function FineArt() {
  const container = useRef(null)
  const [currentSection, setCurrentSection] = useState([])

  return (
    <>
      <Head>
        <title>fine art | aadila chand - multidisciplinary artist</title>
        <meta
          name="description"
          content="fine art | aadila chand | multidisciplinary artist"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <MenuCtx.Provider value={{ currentSection, setCurrentSection }}>
        <Navbar />
        <main ref={container} className={styles.main}>
          <h1 className={styles.pageHeading}>fine art</h1>
          <InOrganic className={styles.section} />
          <HoloScene className={styles.section} />
          <Site className={styles.section} />
          <HumanNature className={styles.section} />
        </main>
        <ScrollToTop element={container} />
      </MenuCtx.Provider>
    </>
  )
}
