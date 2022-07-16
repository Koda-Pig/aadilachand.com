import Head from 'next/head'
import { useRef, useState } from 'react'
import utilStyles from '../styles/utils.module.css'
import fineArtStyles from '../styles/fine-art/fineArt.module.css'
import Navbar from '../components/Navbar'
import MenuCtx from '../components/MenuCtx'
import ScrollToTop from '../components/ScrollToTop'
import Culture from '../components/illustration/Culture'
import AncientOrbit from '../components/illustration/AncientOrbit'

export default function Illustration() {
  const container = useRef(null)
  const [currentSection, setCurrentSection] = useState([])

  return (
    <>
      <Head>
        <title>illustration | aadila chand - multidisciplinary artist</title>
        <meta
          name="description"
          content="illustration | aadila chand | multidisciplinary artist"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <MenuCtx.Provider value={{ currentSection, setCurrentSection }}>
        <Navbar />
        <main ref={container} className={fineArtStyles.main}>
          <h1 className={utilStyles.pageHeading}>illustration</h1>
          <Culture />
          <AncientOrbit />
        </main>
        <ScrollToTop element={container} />
      </MenuCtx.Provider>
    </>
  )
}
