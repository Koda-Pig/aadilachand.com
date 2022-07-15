import style from '../../styles/fine-art/InOrganic.module.css'
import Image from 'next/image'
import inorganicImg1 from '../../public/images/fine-art/inorganic/inorganic-1.png'
import inorganicImg2 from '../../public/images/fine-art/inorganic/inorganic-2.png'
import inorganicImg3 from '../../public/images/fine-art/inorganic/inorganic-3.png'
import inorganicImg4 from '../../public/images/fine-art/inorganic/inorganic-4.png'
import inorganicImg5 from '../../public/images/fine-art/inorganic/inorganic-5.png'
import inorganicImg6 from '../../public/images/fine-art/inorganic/inorganic-6.png'
import inorganicImg7 from '../../public/images/fine-art/inorganic/inorganic-7.png'
import inorganicImg8 from '../../public/images/fine-art/inorganic/inorganic-8.png'
import inorganicImg9 from '../../public/images/fine-art/inorganic/inorganic-9.png'

export default function InOrganic() {
  return (
    <div className={style.inOrganic}>
      <div className={style.container}>
        <section className={style.gallerySection}>
          <div className={style.gallery}>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={inorganicImg1} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu24BnvDV/"
            >
              <Image className={style.img} src={inorganicImg2} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu1SUnP4i/"
            >
              <Image className={style.img} src={inorganicImg3} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTuwAEHGob/"
            >
              <Image className={style.img} src={inorganicImg4} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTugeenIH2/"
            >
              <Image className={style.img} src={inorganicImg5} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTubK5n9ml/"
            >
              <Image className={style.img} src={inorganicImg6} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTt_GPnwqs/"
            >
              <Image className={style.img} src={inorganicImg7} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTt1penyTD/"
            >
              <Image className={style.img} src={inorganicImg8} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTtydbna8M/"
            >
              <Image className={style.img} src={inorganicImg9} alt="" />
            </a>
          </div>
          <p className={style.caption}>
            Gallery in the Round Monument Building Makhanda
          </p>
        </section>
        <section className={style.writeUp}>
          <h2>(in)organic</h2>
          <h3>installation</h3>
          <h4>2019</h4>
          <p>
            Patterned pathways of interconnectedness exist within us but perhaps
            years of conditioning have rewired our brains a bit too far by
            inadvertently accepting the dismally concrete reality that has
            become ever-present and normalized.
          </p>
          <p>
            (in) organic explores the complex and intricate relationship between
            humans and nature, touching on the Anthropocene- the current era we
            live in whereby humans are the dominant and most influential force
            on Earth and the workings of the natural world.
          </p>
        </section>
      </div>
    </div>
  )
}
