import { useRef } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CustomHead from '../../components/CustomHead'
import ScrollUpDown from '../../components/ScrollUpDown'
import EarthdirtWriteup from '../../components/earthdirt/EarthdirtWriteup'
import EarthdirtDetails from '../../components/earthdirt/EarthdirtDetails'
import styles from '../../styles/ux-ui/earthdirt/earthdirt.module.scss'
import bannerImg from '../../public/images/ux-ui/earthdirt/Banner.png'

export default function Earthdirt() {
  const container = useRef(null)

  return (
    <>
      <CustomHead page="earthdirt" />
      <Navbar element={container} />
      <div className={styles.container} ref={container}>
        <h1 className={styles.pageHeading}>earthdirt</h1>
        <main>
          <div className={styles.bannerImg}>
            <Image src={bannerImg} quality={100} alt="" />
          </div>
          <EarthdirtWriteup />
          <EarthdirtDetails />
        </main>
        <Footer />
      </div>
      <ScrollUpDown element={container} down={true} />
    </>
  )
}
