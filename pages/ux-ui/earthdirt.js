import { useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import EarthdirtIntro from '../../components/earthdirt/EarthdirtIntro'
import EarthdirtWriteup from '../../components/earthdirt/EarthdirtWriteup'
import EarthdirtDetails from '../../components/earthdirt/EarthdirtDetails'
import CustomHead from '../../components/CustomHead'
import ScrollToTop from '../../components/ScrollToTop'
import styles from '../../styles/earthdirt/earthdirt.module.scss'
import Image from 'next/image'
import bannerImg from '../../public/images/ux-ui/earthdirt/Banner.png'

export default function Earthdirt() {
  const container = useRef(null)

  return (
    <>
      <CustomHead page="earth dirt" />
      <Navbar element={container} />
      <div className={styles.container} ref={container}>
        <h1 className={styles.pageHeading}>ux/ui</h1>
        <main>
          <EarthdirtIntro />
          <div>
            <Image src={bannerImg} quality={100} alt="" />
          </div>
          <EarthdirtWriteup />
          <EarthdirtDetails />
        </main>
        <Footer element={container} />
      </div>
      <ScrollToTop element={container} />
    </>
  )
}
