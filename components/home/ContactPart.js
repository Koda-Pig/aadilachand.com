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
            Hi there! My name is Aadila and I am a curious learner. I have only
            just begun my ux/ui journey with one year of self-studying and
            practicing. I completed my honours in fine art at Rhodes University
            in 2019. I am a detail driven individual with a natural knack for
            conceptualizing and problem solving using interconnective,
            intergrative thinking and empathy above all.
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
