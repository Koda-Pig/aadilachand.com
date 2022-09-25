import Image from 'next/image'
import styles from '../../styles/fine-art/humanNature.module.scss'
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
    <div className={styles.container}>
      <div className={styles.gallery}>{imageGallery}</div>
      <section className={styles.writeUp}>
        <div>
          <h2>human/nature</h2>
          <h3>digital art</h3>
          <h4>2016</h4>
        </div>
        <p>
          Cross sections of plant cells merged with human eyes to create a new
          cell. Portraying the interconnnection between humans and nature.
        </p>
      </section>
    </div>
  )
}
