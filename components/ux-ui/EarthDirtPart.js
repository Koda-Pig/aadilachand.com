import Link from 'next/link'
import Image from 'next/image'
import style from '../../styles/ux-ui/earthDirt.module.scss'
import macbookImg from '../../public/images/ux-ui/earthdirt/MacBook.png'

export default function EarthDirtPart() {
  return (
    <div className={style.container}>
      <div className={style.macbookImg}>
        <Image src={macbookImg} quality={100} alt="" />
      </div>
      <div className={style.writeup}>
        <h2>earthdirt</h2>
        <p>
          <strong>brand design</strong>
          <br />
          an online shop for a craft boutique.
        </p>
        <Link href="#" passHref>
          <a className={style.callToAction}>view project</a>
        </Link>
      </div>
    </div>
  )
}
