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
            <Image src={outerMandalaImg} quality={100} alt="ADD DESCRIPTION" />
          </div>
          <div className={styles.profile}>
            <Image src={profileImg} quality={100} alt="ADD DESCRIPTION" />
          </div>
          <div className={styles.innerMandala}>
            <Image src={innerMandalaImg} quality={100} alt="ADD DESCRIPTION" />
          </div>
          <div className={styles.resumeTxt}>
            <Image
              src={resumeTxt}
              className={styles.img}
              quality={100}
              alt="ADD DESCRIPTION"
            />
          </div>
        </section>
        <section className={styles.connect}>
          <h2>connect</h2>
          <p>
            As a patch of light tingling of the spine are creatures of the
            cosmos stirred by starlight decipherment tendrils of gossamer
            clouds? How far away the only home we&apos;ve ever known permanence
            of the stars bits of moving fluff hydrogen atoms two ghostly white
            figures in coveralls and helmets are softly dancing. Bits of moving
            fluff not a sunrise but a galaxyrise vanquish the impossible the sky
            calls to us emerged into consciousness two ghostly white figures in
            coveralls and helmets are softly dancing.
          </p>
          <Link href="#" passHref>
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
