import Image from 'next/image'
import style from '../../styles/graphic-design/ancientOrbit.module.scss'
import ancientOrbit1 from '../../public/images/graphic-design/ancient-orbit/ancient-orbit-1.png'
import ancientOrbit2 from '../../public/images/graphic-design/ancient-orbit/ancient-orbit-2.png'
import ancientOrbit3 from '../../public/images/graphic-design/ancient-orbit/ancient-orbit-3.png'
import ancientOrbit4 from '../../public/images/graphic-design/ancient-orbit/ancient-orbit-4.png'
import ancientOrbit5 from '../../public/images/graphic-design/ancient-orbit/ancient-orbit-5.png'
import ancientOrbit6 from '../../public/images/graphic-design/ancient-orbit/ancient-orbit-6.png'

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
    <div className={style.container}>
      <div className={style.gallery}>{imageGallery}</div>
      <section className={style.writeUp}>
        <h2>ancient orbit</h2>
        <p>
          Rogue corpus callosum stirred by starlight two ghostly white figures
          in coveralls and helmets are softly dancing the sky calls to us invent
          the universe. <br />
          <a href="#">https://hereisalink.to/awebsitewithsomestuff</a>
        </p>
      </section>
    </div>
  )
}
