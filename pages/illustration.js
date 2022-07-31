import Head from 'next/head'
import { useRef } from 'react'
import styles from '../styles/illustration/illustration.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Culture from '../components/illustration/Culture'
import AncientOrbit from '../components/illustration/AncientOrbit'

export default function Illustration() {
  const container = useRef(null)

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
      <Navbar element={container} />
      <main ref={container} className={styles.container}>
        <h1 className={styles.pageHeading}>illustration</h1>
        <Culture />
        <AncientOrbit />
      </main>
      <Footer />
      <ScrollToTop element={container} />
    </>
  )
}
