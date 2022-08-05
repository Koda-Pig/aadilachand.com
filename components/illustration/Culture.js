import Image from 'next/image'
import style from '../../styles/illustration/culture.module.scss'
import cultureImg1 from '../../public/images/illustration/culture/culture-1a.png'
import cultureImg2 from '../../public/images/illustration/culture/culture-2a.png'
import cultureImg3 from '../../public/images/illustration/culture/culture-3a.png'

const images = [cultureImg1, cultureImg2, cultureImg3]
const imageGallery = images.map((image, index) => {
  return <Image key={index} src={image} quality={100} width={360} alt="" />
})

console.log(imageGallery)

export default function Culture() {
  return (
    <div className={style.culture}>
      <div className={style.container}>
        <section className={style.gallerySection}>
          <div className={style.gallery}>{imageGallery}</div>
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
