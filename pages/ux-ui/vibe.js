import { useRef } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CustomHead from '../../components/CustomHead'
import ScrollToTop from '../../components/ScrollToTop'
import VibeIntro from '../../components/vibe/VibeIntro'
import VibeDesignThinking from '../../components/vibe/VibeDesignThinking'
import styles from '../../styles/ux-ui/vibe/vibe.module.scss'
import bannerImg from '../../public/images/ux-ui/vibe/banner.png'
import vibeTxt from '../../public/images/ux-ui/vibe.svg'

export default function Vibe() {
  const container = useRef(null)

  return (
    <>
      <CustomHead page="Vibe" />
      <Navbar element={container} />
      <div className={styles.container} ref={container}>
        <h1 className={styles.pageHeading}>
          <Image src={vibeTxt} quality={100} alt="" />
        </h1>
        <main>
          <div className={styles.bannerImg}>
            <div className={styles.inner}>
              <div className={styles.intro}>
                <h2>vibe</h2>
                <h3>/vʌɪb/noun</h3>
                <p>
                  the atmosphere of a place as communicated to and felt by
                  others.
                </p>
              </div>

              <a href="" className={styles.callToAction}>
                full figma file
              </a>
            </div>
          </div>
          <VibeIntro />
          <VibeDesignThinking />
        </main>
        <Footer element={container} />
      </div>
      <ScrollToTop element={container} />
    </>
  )
}
