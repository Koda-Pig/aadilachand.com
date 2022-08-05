import Image from 'next/image'
import style from '../../styles/illustration/culture.module.scss'
import culture1 from '../../public/images/illustration/culture/culture-1a.png'
import culture2 from '../../public/images/illustration/culture/culture-2a.png'
import culture3 from '../../public/images/illustration/culture/culture-3a.png'

export default function Culture() {
  return (
    <div className={style.culture}>
      <div className={style.container}>
        <section className={style.gallerySection}>
          <div className={style.gallery}>
            <Image className={style.img1} quality={100} src={culture1} alt="" />
            <Image className={style.img2} quality={100} src={culture2} alt="" />
            <Image className={style.img3} quality={100} src={culture3} alt="" />
          </div>
        </section>
        <section className={style.writeUp}>
          <div>
            <h2>culture</h2>
          </div>
          <p>
            an intergration of science and tradition inspired by traditional
            indian woodblock art and microbiology. <a href="#">(read more)</a>
          </p>
        </section>
      </div>
    </div>
  )
}
