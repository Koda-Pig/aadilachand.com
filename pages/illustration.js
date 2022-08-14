import { useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomHead from '../components/CustomHead'
import ScrollToTop from '../components/ScrollToTop'
import Culture from '../components/illustration/Culture'
import AncientOrbit from '../components/illustration/AncientOrbit'
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
          <Culture />
          <AncientOrbit />
        </main>
        <Footer element={container} />
      </div>
      <ScrollToTop element={container} />
    </>
  )
}
