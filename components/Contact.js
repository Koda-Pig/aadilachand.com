import style from '../styles/contact.module.css'
import Link from 'next/link'
import Image from 'next/image'
import illustrationCircle from '../public/illustration-circle.png'
import profilePic from '../public/profile.png'
import resumeTxt from '../public/resume.svg'

export default function Contact() {
  return (
    <div className={style.contact} id="contact">
      <div className={style.container}>
        <section className={style.imageOverlap}>
          <div className={style.illustration}>
            <Image src={illustrationCircle} alt="ADD DESCRIPTION" />
          </div>
          <div className={style.profile}>
            <Image src={profilePic} alt="ADD DESCRIPTION" />
          </div>
          <div className={style.resumeTxt}>
            <Image
              src={resumeTxt}
              alt="ADD DESCRIPTION"
              className={style.resumeTxtImg}
            />
          </div>
        </section>
        <section className={style.connect}>
          <h2>connect</h2>
          <p>
            hey thurr! i am art hoe from rhodes university ‘21. i like to make
            vibez. i have a fond interest conceptualizing and creating meaning.
            my approach is a minimalist intergration of styles
          </p>
          <Link href="#" passHref>
            <a className={style.callToAction}>get in touch</a>
          </Link>
        </section>
      </div>
    </div>
  )
}
