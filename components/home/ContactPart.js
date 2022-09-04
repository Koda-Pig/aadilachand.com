import Link from 'next/link'
import Image from 'next/image'
import style from '../../styles/home/contact.module.scss'
import resumeTxt from '../../public/images/home/resume.svg'
import Footer from '../Footer'
import profileImg from '../../public/images/home/about-profile.png'
import outerMandalaImg from '../../public/images/home/outer-mandala.png'
import innerMandalaImg from '../../public/images/home/inner-mandala.png'

export default function Contact() {
  return (
    <div className={style.contact} id="contact">
      <p></p>
      <div className={style.container}>
        <section className={style.imageOverlap}>
          <div className={style.outerMandala}>
            <Image src={outerMandalaImg} quality={100} alt="ADD DESCRIPTION" />
          </div>
          <div className={style.profile}>
            <Image src={profileImg} quality={100} alt="ADD DESCRIPTION" />
          </div>
          <div className={style.innerMandala}>
            <Image src={innerMandalaImg} quality={100} alt="ADD DESCRIPTION" />
          </div>
          <div className={style.resumeTxt}>
            <Image
              src={resumeTxt}
              className={style.img}
              quality={100}
              alt="ADD DESCRIPTION"
            />
          </div>
        </section>
        <section className={style.connect}>
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
            <a className={style.callToAction}>get in touch</a>
          </Link>
        </section>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  )
}
