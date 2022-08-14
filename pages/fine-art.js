import { useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Site from '../components/fine-art/Site'
import CustomHead from '../components/CustomHead'
import ScrollToTop from '../components/ScrollToTop'
import HoloScene from '../components/fine-art/HoloScene'
import InOrganic from '../components/fine-art/InOrganic'
import styles from '../styles/fine-art/fineArt.module.scss'
import HumanNature from '../components/fine-art/HumanNature'

export default function FineArt() {
  const container = useRef(null)

  return (
    <>
      <CustomHead page="fine art" />
      <Navbar element={container} />
      <div className={styles.container} ref={container}>
        <h1 className={styles.pageHeading}>fine art</h1>
        <main>
          <InOrganic className={styles.section} />
          <HoloScene className={styles.section} />
          <Site className={styles.section} />
          <HumanNature className={styles.section} />
        </main>
        <Footer element={container} />
      </div>
      <ScrollToTop element={container} />
    </>
  )
}
