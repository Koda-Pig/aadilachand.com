import Link from 'next/link'
import Image from 'next/image'
import style from '../../styles/ux-ui/styleExploration.module.scss'
import iPhoneImg from '../../public/images/ux-ui/style-exploration/iPhone.png'

export default function StyleExploration() {
  return (
    <div className={style.container}>
      <div className={style.writeup}>
        <p>
          <strong>style exploration</strong>
          <br />
          using an integration of styles to create a classic yet futuristic
          music library.
        </p>
        <Link href="#" passHref>
          <a className={style.callToAction}>view project</a>
        </Link>
      </div>
      <div className={style.iPhoneImg}>
        <Image src={iPhoneImg} quality={100} alt="" />
      </div>
    </div>
  )
}
