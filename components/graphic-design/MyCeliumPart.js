import Image from 'next/image'
import style from '../../styles/graphic-design/myCelium.module.scss'
import myCelium1 from '../../public/images/graphic-design/my-celium/my-celium-1c.png'
import myCelium2 from '../../public/images/graphic-design/my-celium/my-celium-2c.png'
import myCelium3 from '../../public/images/graphic-design/my-celium/my-celium-3c.png'

const images = [myCelium1, myCelium2, myCelium3]
const imageGallery = images.map((image, index) => {
  return <Image key={index} src={image} quality={100} width={360} alt="" />
})

export default function MyCelium() {
  return (
    <div className={style.container}>
      <section className={style.gallerySection}>
        <div className={style.gallery}>{imageGallery}</div>
      </section>
      <section className={style.writeUp}>
        <div>
          <h2>my.celium</h2>
        </div>
        <p>
          an intergration of science and tradition inspired by traditional
          indian woodblock art and microbiology. <a href="#">(read more)</a>
        </p>
        <div>
          <a href="#" className={style.callToAction}>
            full project
          </a>
        </div>
      </section>
    </div>
  )
}
