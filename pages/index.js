import { useRef } from 'react'
import Hero from '../components/Hero'
import Work from '../components/Work'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import styles from '../styles/Home.module.scss'
import CustomHead from '../components/CustomHead'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  const container = useRef(null)

  return (
    <>
      <CustomHead />
      <Navbar element={container} />
      <main ref={container} className={styles.container}>
        <Hero element={container} />
        <Work />
        <About />
        <Contact />
      </main>
      <ScrollToTop element={container} />
    </>
  )
}
