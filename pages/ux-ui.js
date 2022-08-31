import { useRef } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Link from 'next/link'

import Footer from '../components/Footer'
import CustomHead from '../components/CustomHead'
import ScrollToTop from '../components/ScrollToTop'
import styles from '../styles/ux-ui/uxUi.module.scss'
import vaaibImg from '../public/images/ux-ui/vibe-phone.png'
import vaaibTxt from '../public/images/ux-ui/vaaib.svg'
import earthdirtImg from '../public/images/ux-ui/earthdirt-laptop.png'
import tuneImg from '../public/images/ux-ui/tune-phone.png'
import tuneTxt from '../public/images/ux-ui/tune.svg'

export default function UxUi() {
  const container = useRef(null)

  return (
    <>
      <CustomHead page="ux/ ui" />
      <Navbar element={container} />
      <div className={styles.container} ref={container}>
        <h1 className={styles.pageHeading}>ux/ui</h1>
        <main>
          <section className={styles.images}>
            <div className={styles.vaaib}>
              <div className={styles.heading}>
                <Image src={vaaibTxt} quality={100} alt="" />
              </div>
              <div className={styles.img}>
                <Image src={vaaibImg} quality={100} alt="" />
              </div>
            </div>
            <div className={styles.earthdirt}>
              <h2 className={styles.heading}>earthdirt</h2>
              <div className={styles.img}>
                <Image src={earthdirtImg} quality={100} alt="" />
              </div>
            </div>
            <div className={styles.tune}>
              <div className={styles.heading}>
                <Image src={tuneTxt} quality={100} alt="" />
              </div>
              <div className={styles.img}>
                <Image src={tuneImg} quality={100} alt="" />
              </div>
            </div>
          </section>
          <section className={styles.writeups}>
            <div className={styles.vaaib}>
              <p>
                <strong>case study</strong>
                <br />A very small stage in a vast cosmic arena worldlets star
                stuff harvesting star light
              </p>
              <Link href="#" passHref>
                <a className={styles.callToAction}>view project</a>
              </Link>
            </div>
            <div className={styles.earthdirt}>
              <p>
                <strong>case study</strong>
                <br />A very small stage in a vast cosmic arena worldlets star
                stuff harvesting star light
              </p>
              <Link href="/ux-ui/earthdirt" passHref>
                <a className={styles.callToAction}>view project</a>
              </Link>
            </div>
            <div className={styles.tune}>
              <p>
                <strong>case study</strong>
                <br />A very small stage in a vast cosmic arena worldlets star
                stuff harvesting star light
              </p>
              <Link href="/ux-ui/tune" passHref>
                <a className={styles.callToAction}>view project</a>
              </Link>
            </div>
          </section>
        </main>
        <Footer element={container} />
      </div>
      <ScrollToTop element={container} />
    </>
  )
}
