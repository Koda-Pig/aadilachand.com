import Image from 'next/image'
import style from '../../styles/illustration/culture.module.css'
import culture1 from '../../public/images/illustration/culture/culture-1.png'
import culture2 from '../../public/images/illustration/culture/culture-2.png'
import culture3 from '../../public/images/illustration/culture/culture-3.png'

export default function Culture() {
  return (
    <div className={style.culture}>
      <div className={style.container}>
        <section className={style.gallerySection}>
          <div className={style.gallery}>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={culture1} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={culture2} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={culture3} alt="" />
            </a>
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
