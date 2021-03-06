import style from '../styles/work.module.scss'
import Image from 'next/image'
import fineArtCircle from '../public/images/home/fine-art-circle.png'

export default function Template() {
  return (
    <div className={style.work}>
      <div className={style.container}>
        <section className={style.section}>
          <Image src={uxUiCircle} alt="" className={style.img} />
          <h2>template</h2>
        </section>
      </div>
    </div>
  )
}
