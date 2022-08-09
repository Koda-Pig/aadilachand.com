import Image from 'next/image'
import style from '../../styles/ux-ui/vaaib.module.scss'
import iPhoneImg from '../../public/images/ux-ui/iPhone.png'

export default function Vaiib() {
  return (
    <div className={style.culture}>
      <div className={style.container}>
        <section className={style.gallerySection}>
          <div className={style.gallery}>
            {' '}
            <Image src={iPhoneImg} quality={100} alt="" />
          </div>
        </section>
        <section className={style.writeUp}>
          <div>
            <h2>vʌɪb</h2>
          </div>
          <p>designing for diversity and intergration</p>
        </section>
      </div>
    </div>
  )
}
