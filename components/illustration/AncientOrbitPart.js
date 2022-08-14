import Image from 'next/image'
import style from '../../styles/illustration/ancientOrbit.module.scss'
import ancientOrbit1 from '../../public/images/illustration/ancient-orbit/ancient-orbit-1.png'
import ancientOrbit2 from '../../public/images/illustration/ancient-orbit/ancient-orbit-2.png'
import ancientOrbit3 from '../../public/images/illustration/ancient-orbit/ancient-orbit-3.png'
import ancientOrbit4 from '../../public/images/illustration/ancient-orbit/ancient-orbit-4.png'
import ancientOrbit5 from '../../public/images/illustration/ancient-orbit/ancient-orbit-5.png'
import ancientOrbit6 from '../../public/images/illustration/ancient-orbit/ancient-orbit-6.png'

const images = [
  ancientOrbit1,
  ancientOrbit2,
  ancientOrbit3,
  ancientOrbit4,
  ancientOrbit5,
  ancientOrbit6
]
const imageGallery = images.map((image, index) => {
  return <Image key={index} src={image} quality={100} alt="" />
})

export default function AncientOrbit() {
  return (
    <div className={style.ancientOrbit}>
      <div className={style.container}>
        <section className={style.gallerySection}>
          <div className={style.gallery}>{imageGallery}</div>
        </section>
        <section className={style.writeUp}>
          <h2>ancient orbit</h2>
          <p>an archive of cosmic occurances transcending thru tym n space</p>
        </section>
      </div>
    </div>
  )
}
