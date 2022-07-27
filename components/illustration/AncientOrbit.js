import Image from 'next/image'
import style from '../../styles/illustration/ancientOrbit.module.scss'
import ancientOrbit1 from '../../public/images/illustration/ancient-orbit/ancient-orbit-1.png'
import ancientOrbit2 from '../../public/images/illustration/ancient-orbit/ancient-orbit-2.png'
import ancientOrbit3 from '../../public/images/illustration/ancient-orbit/ancient-orbit-3.png'
import ancientOrbit4 from '../../public/images/illustration/ancient-orbit/ancient-orbit-4.png'
import ancientOrbit5 from '../../public/images/illustration/ancient-orbit/ancient-orbit-5.png'
import ancientOrbit6 from '../../public/images/illustration/ancient-orbit/ancient-orbit-6.png'

export default function AncientOrbit() {
  return (
    <div className={style.ancientOrbit}>
      <div className={style.container}>
        <section className={style.gallerySection}>
          <div className={style.gallery}>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={ancientOrbit1} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={ancientOrbit2} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={ancientOrbit3} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={ancientOrbit4} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={ancientOrbit5} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={ancientOrbit6} alt="" />
            </a>
          </div>
        </section>
        <section className={style.writeUp}>
          <div>
            <h2>ancient orbit</h2>
          </div>
          <p>an archive of cosmic occurances transcending thru tym n space</p>
        </section>
      </div>
    </div>
  )
}
