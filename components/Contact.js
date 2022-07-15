import style from '../styles/contact.module.css'
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
              className={style.img}
              src={aboutImgs}
              alt="ADD DESCRIPTION"
            />
          </div>
          <div className={style.resumeTxt}>
            <Image
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
            Invent the universe tesseract cosmic fugue descended from
            astronomers rich in mystery inconspicuous motes of rock and gas. How
            far away great turbulent clouds the sky calls to us network of
            wormholes
          </p>
          <Link href="#" passHref>
            <a className={style.callToAction}>get in touch</a>
          </Link>
        </section>
      </div>
    </div>
  )
}
