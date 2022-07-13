import { useRef, useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import InOrganic from '../components/fine-art/InOrganic'
import ScrollToTop from '../components/ScrollToTop'
import MenuCtx from '../components/MenuCtx'
import utilStyles from '../styles/utils.module.css'
import fineArtStyles from '../styles/fine-art/fineArt.module.css'

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
        </main>
        <ScrollToTop element={container} />
      </MenuCtx.Provider>
    </>
  )
}
