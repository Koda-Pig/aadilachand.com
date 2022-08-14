import { useRef } from 'react'
import Navbar from '../components/Navbar'
import CustomHead from '../components/CustomHead'
import ScrollToTop from '../components/ScrollToTop'
import HeroPart from '../components/home/HeroPart'
import WorkPart from '../components/home/WorkPart'
import AboutPart from '../components/home/AboutPart'
import ContactPart from '../components/home/ContactPart'
import styles from '../styles/home/Home.module.scss'

export default function Home() {
  const container = useRef(null)

  return (
    <>
      <CustomHead />
      <Navbar element={container} />
      <main ref={container} className={styles.container}>
        <HeroPart element={container} />
        <WorkPart />
        <AboutPart />
        <ContactPart />
      </main>
      <ScrollToTop element={container} />
    </>
  )
}
