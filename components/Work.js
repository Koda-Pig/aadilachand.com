import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/work.module.scss'
import uxUiCircle from '../public/images/home/ux-ui-circle.png'
import fineArtCircle from '../public/images/home/fine-art-circle.png'
import illustrationCircle from '../public/images/home/illustration-circle.png'

export default function Work() {
  return (
    <div className={style.work} id="work">
      <div className={style.container}>
        <section className={style.section}>
          <Link href="#" passHref>
            <a>
              <Image
                src={uxUiCircle}
                className={style.img}
                quality={100}
                alt=""
              />
            </a>
          </Link>
          <h2>ux/ ui</h2>
        </section>
        <section className={style.section}>
          <Link href="/illustration" passHref>
            <a>
              <Image
                src={illustrationCircle}
                className={style.img}
                quality={100}
                alt=""
              />
            </a>
          </Link>
          <h2>illustration</h2>
        </section>
        <section className={style.section}>
          <Link href="/fine-art" passHref>
            <a>
              <Image
                src={fineArtCircle}
                className={style.img}
                quality={100}
                alt=""
              />
            </a>
          </Link>
          <h2>fine art</h2>
        </section>
      </div>
    </div>
  )
}
