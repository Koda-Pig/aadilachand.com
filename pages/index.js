import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>aadila chand - multidisciplinary artist</title>
        <meta
          name="description"
          content="aadila chand | multidisciplinary artist"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </div>
  )
}
