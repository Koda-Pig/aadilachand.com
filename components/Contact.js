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
            i like to think in incriments, starting off small, focusing on a
            multitude of micro encounters to build up to a large. though a
            series of small steps in the right direction, can we achieve a goal.
            start small, but think big.
            <br />
            i have a fond interest conceptualizing and creating meaning. my
            approach is a minimalist intergration of styles
            <br />
            let&apos;s collab!
          </p>
          <Link href="#" passHref>
            <a className={style.callToAction}>get in touch</a>
          </Link>
        </section>
      </div>
    </div>
  )
}
