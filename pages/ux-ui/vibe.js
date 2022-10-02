import { useRef } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CustomHead from '../../components/CustomHead'
import VibeIntro from '../../components/vibe/VibeIntro'
import ScrollUpDown from '../../components/ScrollUpDown'
import VibeDesignThinking from '../../components/vibe/VibeDesignThinking'
import styles from '../../styles/ux-ui/vibe/vibe.module.scss'
import vibeTxt from '../../public/images/ux-ui/vibe/vibe-text.svg'
import vibeTxtSmol from '../../public/images/ux-ui/vibe/vaaib-smol.svg'

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
                <h3>
                  <Image src={vibeTxtSmol} quality={100} alt="vaaib" />
                </h3>
                <p>
                  the atmosphere of a place as communicated to and felt by
                  others.
                </p>
              </div>
              <a
                href="https://www.figma.com/file/4iMvRt0sYN0whHpvewqgtM/vibe?node-id=865%3A1436"
                target="_blank"
                rel="noreferrer"
                className={styles.callToAction}
              >
                try protoype
              </a>
            </div>
          </div>
          <VibeIntro />
          <VibeDesignThinking />
        </main>
        <Footer />
      </div>
      <ScrollUpDown element={container} />
    </>
  )
}
