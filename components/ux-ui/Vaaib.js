import Link from 'next/link'
import style from '../../styles/ux-ui/vaaib.module.scss'
import Image from 'next/image'
import vaaibImg from '../../public/images/ux-ui/vaaib/vaaib.svg'
import iPhoneImg from '../../public/images/ux-ui/vaaib/iPhone.png'

export default function Vaiib() {
  return (
    <div className={style.container}>
      <div className={style.iPhoneImg}>
        <Image src={iPhoneImg} quality={100} alt="" />
      </div>
      <div className={style.writeup}>
        <div className={style.vaaibImg}>
          <Image src={vaaibImg} quality={100} alt="" />
        </div>
        <p>
          <strong>case study</strong>
          <br />
          designing for diversity and intergration
        </p>
        <Link href="#" passHref>
          <a className={style.callToAction}>view project</a>
        </Link>
      </div>
    </div>
  )
}
