import { useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VaaibPart from '../components/ux-ui/VaaibPart'
import EarthdirtPart from '../components/ux-ui/EarthdirtPart'
import StyleExplorationPart from '../components/ux-ui/StyleExplorationPart'
import CustomHead from '../components/CustomHead'
import ScrollToTop from '../components/ScrollToTop'
import styles from '../styles/ux-ui/uxUi.module.scss'

export default function UxUi() {
  const container = useRef(null)

  return (
    <>
      <CustomHead page="ux/ ui" />
      <Navbar element={container} />
      <div className={styles.container} ref={container}>
        <h1 className={styles.pageHeading}>ux/ui</h1>
        <main>
          <VaaibPart />
          <EarthdirtPart />
          <StyleExplorationPart />
        </main>
        <Footer element={container} />
      </div>
      <ScrollToTop element={container} />
    </>
  )
}
