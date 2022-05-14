import style from '../styles/work.module.css'
import Image from 'next/image'
import Ellipse5 from '../public/Ellipse5.png'
import Ellipse6 from '../public/Ellipse6.png'
import Ellipse7 from '../public/Ellipse7.png'

export default function Work() {
  return (
    <div className={style.work} id="work">
      <div className={style.container}>
        <section className={style.section}>
          <Image
            src={Ellipse7}
            alt="ADD DESCRIPTION"
            className={style.profilePic}
            width={420}
            height={420}
            priority
          />
          <h2>projects</h2>
        </section>
        <section className={style.section}>
          <Image
            src={Ellipse5}
            alt="ADD DESCRIPTION"
            className={style.profilePic}
            width={420}
            height={420}
            priority
          />
          <h2>ui library</h2>
        </section>
        <section className={style.section}>
          <Image
            src={Ellipse6}
            alt="ADD DESCRIPTION"
            className={style.profilePic}
            width={420}
            height={420}
            priority
          />
          <h2>art</h2>
        </section>
      </div>
    </div>
  )
}
