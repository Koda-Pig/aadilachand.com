import { useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomHead from '../components/CustomHead'
import ScrollToTop from '../components/ScrollToTop'
import MyCelium from '../components/graphic-design/MyCeliumPart'
import AncientOrbitPart from '../components/graphic-design/AncientOrbitPart'
import styles from '../styles/graphic-design/graphicDesign.module.scss'

export default function GraphicDesign() {
  const container = useRef(null)

  return (
    <>
      <CustomHead page="graphic design" />
      <Navbar element={container} />
      <div className={styles.container} ref={container}>
        <h1 className={styles.pageHeading}>graphic design</h1>
        <main>
          <MyCelium />
          <AncientOrbitPart />
        </main>
        <Footer />
      </div>
      <ScrollToTop element={container} />
    </>
  )
}
