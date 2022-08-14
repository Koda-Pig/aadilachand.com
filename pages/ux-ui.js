import { useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Vaaib from '../components/ux-ui/Vaaib'
import EarthDirt from '../components/ux-ui/EarthDirt'
import StyleExploration from '../components/ux-ui/StyleExploration'
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
          <Vaaib />
          <EarthDirt />
          <StyleExploration />
        </main>
        <Footer element={container} />
      </div>
      <ScrollToTop element={container} />
    </>
  )
}
