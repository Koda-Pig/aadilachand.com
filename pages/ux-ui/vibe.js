import { useRef } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CustomHead from '../../components/CustomHead'
import ScrollToTop from '../../components/ScrollToTop'
import VibeIntro from '../../components/vibe/VibeIntro'
import VibeDesignThinking from '../../components/vibe/VibeDesignThinking'
import styles from '../../styles/ux-ui/earthdirt/earthdirt.module.scss'
import bannerImg from '../../public/images/ux-ui/earthdirt/Banner.png'
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
            <Image src={bannerImg} quality={100} alt="" />
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
