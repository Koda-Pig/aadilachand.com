import Link from 'next/link'
import Image from 'next/image'
import star from '../public/images/star.svg'
import style from '../styles/footer.module.scss'

export default function Footer() {
  return (
    <footer>
      <div className={style.home}>
        <Link href="/#home" passHref>
          <a className={style.link}>ac</a>
        </Link>
      </div>
      <div className={style.menu}>
        <Image
          src={star}
          width={17}
          height={30}
          className={style.star}
          aria-hidden="true"
          alt=""
        />
        <Link href="/#contact" passHref>
          <a className={style.link}>contact</a>
        </Link>
      </div>
    </footer>
  )
}
