import { useRef } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CustomHead from '../../components/CustomHead'
import ScrollUpDown from '../../components/ScrollUpDown'
import TuneIntro from '../../components/tune/TuneIntro'
import TuneDetails from '../../components/tune/TuneDetails'
import styles from '../../styles/ux-ui/tune/tune.module.scss'
import titleSVG from '../../public/images/ux-ui/tune/tune.svg'

export default function Tune() {
  const container = useRef(null)

  return (
    <>
      <CustomHead page="tune" />
      <Navbar element={container} />
      <div className={styles.container} ref={container}>
        <h1 className={styles.pageHeading}>
          <Image src={titleSVG} quality={100} alt="" />
        </h1>
        <main>
          <TuneIntro />
          <TuneDetails />
        </main>
        <Footer />
      </div>
      <ScrollUpDown element={container} down={true} />
    </>
  )
}
