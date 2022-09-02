import { useRef } from 'react'
import Navbar from '../components/Navbar'
import CustomHead from '../components/CustomHead'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import InOrganicPart from '../components/fine-art/InOrganicPart'
import HoloScenePart from '../components/fine-art/HoloScenePart'
import SitePart from '../components/fine-art/SitePart'
import HumanNaturePart from '../components/fine-art/HumanNaturePart'
import styles from '../styles/fine-art/fineArt.module.scss'

export default function FineArt() {
  const container = useRef(null)

  return (
    <>
      <CustomHead page="fine art" />
      <Navbar element={container} />
      <div className={styles.container} ref={container}>
        <h1 className={styles.pageHeading}>fine art</h1>
        <main>
          <InOrganicPart className={styles.section} />
          <HoloScenePart className={styles.section} />
          <SitePart className={styles.section} />
          <HumanNaturePart className={styles.section} />
        </main>
        <Footer />
      </div>
      <ScrollToTop element={container} />
    </>
  )
}
