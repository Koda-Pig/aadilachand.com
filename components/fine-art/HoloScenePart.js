import Image from 'next/image'
import styles from '../../styles/fine-art/holoScene.module.scss'
import holoSceneImg1 from '../../public/images/fine-art/holoscene/holoscene-5.png'
import holoSceneImg2 from '../../public/images/fine-art/holoscene/holoscene-2.png'
import holoSceneImg3 from '../../public/images/fine-art/holoscene/holoscene-4.png'

const images = [holoSceneImg1, holoSceneImg2, holoSceneImg3]
const imageGallery = images.map((image, index) => {
  return (
    <a key={index} className={styles.galleryLink}>
      <Image src={image} quality={100} alt="" />
    </a>
  )
})

export default function HoloScene() {
  return (
    <div className={styles.holoScene}>
      <div className={styles.container}>
        <section className={styles.gallerySection}>
          <div className={styles.gallery}>{imageGallery}</div>
        </section>
        <section className={styles.writeUp}>
          <div>
            <h2>holo.scene</h2>
            <h3>photography</h3>
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
