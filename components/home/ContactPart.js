import Link from 'next/link'
import Image from 'next/image'
import Footer from '../Footer'
import styles from '../../styles/home/contact.module.scss'
import resumeTxt from '../../public/images/home/resume.svg'
import profileImg from '../../public/images/home/about-profile.png'
import outerMandalaImg from '../../public/images/home/outer-mandala.png'
import innerMandalaImg from '../../public/images/home/inner-mandala.png'

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <p></p>
      <div className={styles.container}>
        <section className={styles.imageOverlap}>
          <div className={styles.outerMandala}>
            <Image src={outerMandalaImg} quality={100} alt="" />
          </div>
          <div className={styles.profile}>
            <Image src={profileImg} quality={100} alt="" />
          </div>
          <div className={styles.innerMandala}>
            <Image src={innerMandalaImg} quality={100} alt="" />
          </div>
          <div className={styles.resumeTxt}>
            <a href="../../AadilaResume.pdf" target="_blank" rel="noreferrer">
              <Image
                src={resumeTxt}
                className={styles.img}
                quality={100}
                alt=""
              />
            </a>
          </div>
        </section>
        <section className={styles.connect}>
          <h2>connect</h2>
          <p>
            I am a detail-driven designer with a natural knack for
            conceptualizing and problem-solving using interconnective,
            integrative thinking and empathy above all.
          </p>
          <Link href="mailto:aadila.chand.ac@gmail.com" passHref>
            <a className={styles.callToAction}>get in touch</a>
          </Link>
        </section>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
