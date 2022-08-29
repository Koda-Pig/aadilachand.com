import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Link from 'next/link'
import Image from 'next/image'
import style from '../../styles/home/work.module.scss'
import uxUiCircle from '../../public/images/home/ux-ui-circle.png'
import fineArtCircle from '../../public/images/home/fine-art-circle.png'
import graphicDesignCircle from '../../public/images/home/graphic-design-circle.png'

export default function Work() {
  return (
    <div className={style.work} id="work">
      <div className={style.container}>
        <section className={style.section}>
          <Link href="/ux-ui" passHref>
            <a>
              {(
                <Image
                  src={uxUiCircle}
                  className={style.img}
                  quality={100}
                  alt=""
                />
              ) || <Skeleton />}
            </a>
          </Link>
          <h2>ux/ ui</h2>
        </section>
        <section className={style.section}>
          <Link href="/graphic-design" passHref>
            <a>
              {(
                <Image
                  src={graphicDesignCircle}
                  className={style.img}
                  quality={100}
                  alt=""
                />
              ) || <Skeleton />}
            </a>
          </Link>
          <h2>graphic design</h2>
        </section>
        <section className={style.section}>
          <Link href="/fine-art" passHref>
            <a>
              {(
                <Image
                  src={fineArtCircle}
                  className={style.img}
                  quality={100}
                  alt=""
                />
              ) || <Skeleton />}
            </a>
          </Link>
          <h2>fine art</h2>
        </section>
      </div>
    </div>
  )
}
