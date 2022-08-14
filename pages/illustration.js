import { useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomHead from '../components/CustomHead'
import ScrollToTop from '../components/ScrollToTop'
import CulturePart from '../components/illustration/CulturePart'
import AncientOrbitPart from '../components/illustration/AncientOrbitPart'
import styles from '../styles/illustration/illustration.module.scss'

export default function Illustration() {
  const container = useRef(null)

  return (
    <>
      <CustomHead page="illustration" />
      <Navbar element={container} />
      <div className={styles.container} ref={container}>
        <h1 className={styles.pageHeading}>illustration</h1>
        <main>
          <CulturePart />
          <AncientOrbitPart />
        </main>
        <Footer element={container} />
      </div>
      <ScrollToTop element={container} />
    </>
  )
}
