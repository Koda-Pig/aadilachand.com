import Image from 'next/image'
import styles from '../../styles/digital-art/ancientOrbit.module.scss'
import ancientOrbit1 from '../../public/images/digital-art/ancient-orbit/ancient-orbit-1.png'
import ancientOrbit2 from '../../public/images/digital-art/ancient-orbit/ancient-orbit-2.png'
import ancientOrbit3 from '../../public/images/digital-art/ancient-orbit/ancient-orbit-3.png'
import ancientOrbit4 from '../../public/images/digital-art/ancient-orbit/ancient-orbit-4.png'
import ancientOrbit5 from '../../public/images/digital-art/ancient-orbit/ancient-orbit-5.png'
import ancientOrbit6 from '../../public/images/digital-art/ancient-orbit/ancient-orbit-6.png'

const images = [
  ancientOrbit1,
  ancientOrbit2,
  ancientOrbit3,
  ancientOrbit4,
  ancientOrbit5,
  ancientOrbit6,
]
const imageGallery = images.map((image, index) => {
  return <Image key={index} src={image} quality={100} alt="" />
})

export default function AncientOrbit() {
  return (
    <div className={styles.container}>
      <div className={styles.gallery}>{imageGallery}</div>
      <section className={styles.writeUp}>
        <h2>ancient orbit</h2>
        <p>
          An archive of peculiar cosmic occurrences transcending through time
          and space. Available as NFTs on opensea.
        </p>
        <a
          href="https://opensea.io/collection/ancientorbit"
          target="_blank"
          rel="noreferrer"
        >
          opensea
        </a>
      </section>
    </div>
  )
}
