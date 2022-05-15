import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Work from '../components/Work'
import ScrollToTop from '../components/ScrollToTop'
import { useRef } from 'react'

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
      <div className={styles.container} ref={container}>
        <Hero />
        <Work />
      </div>
      <ScrollToTop element={container} />
    </>
  )
}
