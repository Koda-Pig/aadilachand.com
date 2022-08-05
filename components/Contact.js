import style from '../styles/contact.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import aboutImgs from '../public/images/home/about-imgs.png'
import resumeTxt from '../public/images/home/resume.svg'

export default function Contact() {
  return (
    <div className={style.contact} id="contact">
      <div className={style.container}>
        <section className={style.imageOverlap}>
          <div className={style.aboutImgs}>
            <Image
              quality={100}
              className={style.img}
              src={aboutImgs}
              alt="ADD DESCRIPTION"
            />
          </div>
          <div className={style.resumeTxt}>
            <Image
              quality={100}
              src={resumeTxt}
              alt="ADD DESCRIPTION"
              className={style.resumeTxtImg}
              width={120}
              height={120}
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
    </div>
  )
}
