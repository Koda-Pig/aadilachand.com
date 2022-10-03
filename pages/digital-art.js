import { useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomHead from '../components/CustomHead'
import ScrollUpDown from '../components/ScrollUpDown'
import MyCelium from '../components/digital-art/MyCeliumPart'
import AncientOrbitPart from '../components/digital-art/AncientOrbitPart'
import styles from '../styles/digital-art/digitalArt.module.scss'

export default function DigitalArt() {
  const container = useRef(null)

  return (
    <>
      <CustomHead page="digital art" />
      <Navbar element={container} />
      <div className={styles.container} ref={container}>
        <h1 className={styles.pageHeading}>digital art</h1>
        <main>
          <MyCelium />
          <AncientOrbitPart />
        </main>
        <Footer />
      </div>
      <ScrollUpDown element={container} />
    </>
  )
}
