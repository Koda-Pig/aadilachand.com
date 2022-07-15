import Head from 'next/head'
import { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import MenuCtx from '../components/MenuCtx'
import utilStyles from '../styles/utils.module.css'
import ScrollToTop from '../components/ScrollToTop'
import HoloScene from '../components/fine-art/HoloScene'
import InOrganic from '../components/fine-art/InOrganic'
import fineArtStyles from '../styles/fine-art/fineArt.module.css'
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuCtx.Provider value={{ currentSection, setCurrentSection }}>
        <Navbar />
        <main ref={container} className={fineArtStyles.main}>
          <h1 className={utilStyles.pageHeading}>fine art</h1>
          <InOrganic />
          <HoloScene />
          <Site />
          <HumanNature />
        </main>
        <ScrollToTop element={container} />
      </MenuCtx.Provider>
    </>
  )
}
