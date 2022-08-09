import Head from 'next/head'
import { useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Vaaib from '../components/ux-ui/Vaaib'
import styles from '../styles/ux-ui/uxUi.module.scss'

export default function UxUi() {
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
        <h1 className={styles.pageHeading}>ux/ui</h1>
        <main>
          <Vaaib />
        </main>
        <Footer element={container} />
      </div>
      <ScrollToTop element={container} />
    </>
  )
}
