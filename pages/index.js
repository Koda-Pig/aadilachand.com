import { useRef } from 'react'
import Navbar from '../components/Navbar'
import CustomHead from '../components/CustomHead'
import ScrollUpDown from '../components/ScrollUpDown'
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
        <HeroPart />
        <WorkPart />
        <AboutPart />
        <ContactPart />
      </main>
      <ScrollUpDown element={container} down={true} />
    </>
  )
}
