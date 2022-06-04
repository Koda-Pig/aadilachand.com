import style from '../styles/work.module.css'
import Image from 'next/image'
import uiCircle from '../public/ui-circle.png'
import illustrationCircle from '../public/illustration-circle.png'
import fineArtCircle from '../public/fine-art-circle.png'

export default function Work() {
  return (
    <div className={style.work} id="work">
      <div className={style.container}>
        <section className={style.section}>
          <Image
            src={uiCircle}
            alt="ADD DESCRIPTION"
            className={style.img}
            width={420}
            height={420}
          />
          <h2>projects</h2>
        </section>
        <section className={style.section}>
          <Image
            src={illustrationCircle}
            alt="ADD DESCRIPTION"
            className={style.img}
            width={420}
            height={420}
          />
          <h2>ui library</h2>
        </section>
        <section className={style.section}>
          <Image
            src={fineArtCircle}
            alt="ADD DESCRIPTION"
            className={style.img}
            width={420}
            height={420}
          />
          <h2>art</h2>
        </section>
      </div>
    </div>
  )
}
