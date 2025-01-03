import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/home/work.module.scss'
import uxUiCircle from '../../public/images/home/ux-ui-circle.png'
import fineArtCircle from '../../public/images/home/fine-art-circle.png'
import digitalArtCircle from '../../public/images/home/digital-art-circle.png'

const list = [
  ['fine art', '/fine-art', fineArtCircle],
  ['ux/ ui', '/ux-ui', uxUiCircle],
  ['digital art', '/digital-art', digitalArtCircle]
]
const items = list.map((item, index) => {
  return (
    <section key={index} className={styles.section}>
      <Link href={item[1]} passHref>
        <a>
          <Image src={item[2]} quality={100} alt="" />
        </a>
      </Link>
      <h2>{item[0]}</h2>
    </section>
  )
})

export default function Work() {
  return (
    <div className={styles.work} id="work">
      <div className={styles.container}>{items}</div>
    </div>
  )
}
