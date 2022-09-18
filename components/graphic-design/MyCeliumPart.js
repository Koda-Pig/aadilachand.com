import Image from 'next/image'
import styles from '../../styles/graphic-design/myCelium.module.scss'
import myCelium1 from '../../public/images/graphic-design/my-celium/my-celium-1c.png'
import myCelium2 from '../../public/images/graphic-design/my-celium/my-celium-2c.png'
import myCelium3 from '../../public/images/graphic-design/my-celium/my-celium-3c.png'

const images = [myCelium1, myCelium2, myCelium3]
const imageGallery = images.map((image, index) => {
  return <Image key={index} src={image} quality={100} alt="" />
})

export default function MyCelium() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.gallery}>{imageGallery}</div>
      </section>
      <section className={styles.writeUp}>
        <div>
          <h2>my.celium</h2>
        </div>
        <p>
          an intergration of science and tradition inspired by traditional
          indian woodblock art and microbiology. <a href="#">(read more)</a>
        </p>
        <div>
          <a href="#" className={styles.callToAction}>
            full project
          </a>
        </div>
      </section>
    </div>
  )
}
