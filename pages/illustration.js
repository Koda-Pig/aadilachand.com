import Head from 'next/head'
import { useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Culture from '../components/illustration/Culture'
import AncientOrbit from '../components/illustration/AncientOrbit'
import styles from '../styles/illustration/illustration.module.scss'

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
      <div className={styles.container} ref={container}>
        <h1 className={styles.pageHeading}>illustration</h1>
        <main>
          <Culture />
          <AncientOrbit />
        </main>
        <Footer element={container} />
      </div>
      <ScrollToTop element={container} />
    </>
  )
}
