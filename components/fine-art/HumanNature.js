import Image from 'next/image'
import style from '../../styles/fine-art/humanNature.module.scss'
import humanNature1 from '../../public/images/fine-art/human-nature/human-nature-1.png'
import humanNature2 from '../../public/images/fine-art/human-nature/human-nature-2.png'
import humanNature3 from '../../public/images/fine-art/human-nature/human-nature-3.png'
import humanNature4 from '../../public/images/fine-art/human-nature/human-nature-4.png'

const images = [humanNature1, humanNature2, humanNature3, humanNature4]
const imageGallery = images.map((image, index) => {
  return <Image key={index} src={image} quality={100} alt="" />
})

export default function HumanNature() {
  return (
    <div className={style.holoScene}>
      <div className={style.container}>
        <section className={style.gallerySection}>
          <div className={style.gallery}>{imageGallery}</div>
        </section>
        <section className={style.writeUp}>
          <div>
            <h2>human/nature</h2>
            <h3>digital art</h3>
            <h4>2019</h4>
          </div>
          <p>
            As a patch of light tingling of the spine are creatures of the
            cosmos stirred by starlight decipherment tendrils of gossamer
            clouds?
          </p>
        </section>
      </div>
    </div>
  )
}
