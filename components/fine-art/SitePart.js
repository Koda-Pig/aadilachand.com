import Image from 'next/image'
import styles from '../../styles/fine-art/site.module.scss'
import site1 from '../../public/images/fine-art/site/site-1.png'
import site2 from '../../public/images/fine-art/site/site-2.png'
import site3 from '../../public/images/fine-art/site/site-3.png'

const images = [site1, site2, site3]
const imageGallery = images.map((image, index) => {
  return (
    <div key={index} className={styles.img}>
      <Image src={image} quality={100} alt="" />
    </div>
  )
})

export default function Site() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.gallery}>{imageGallery}</div>
      </section>
      <section className={styles.writeUp}>
        <div>
          <h2>site</h2>
          <h3>SEM (photography)</h3>
          <h4>2018</h4>
        </div>
        <p>
          Using a Scanning Electron Microscope (SEM), these images reveal tiny
          intricacies of how our world extends beyond the surface level. This
          new vision challenges the perspective of the seemingly mundane by
          using site-specific common plant life collected in and around
          Makhanda. Hover over the images to see the magnification of tree bark,
          Spanish moss, and usnea lichen (respectively from the left).
        </p>
      </section>
    </div>
  )
}
