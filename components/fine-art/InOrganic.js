import style from '../../styles/fine-art/InOrganic.module.scss'
import Image from 'next/image'
import ReadMore from '../ReadMore'
import { BsInstagram } from 'react-icons/bs'
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
              <div className={style.galleryCaption}>
                <BsInstagram />
                <caption>more</caption>
              </div>
              <Image className={style.img} src={inorganicImg1} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu24BnvDV/"
            >
              <div className={style.galleryCaption}>
                <BsInstagram />
                <caption>more</caption>
              </div>
              <Image className={style.img} src={inorganicImg2} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu1SUnP4i/"
            >
              <div className={style.galleryCaption}>
                <BsInstagram />
                <caption>more</caption>
              </div>
              <Image className={style.img} src={inorganicImg3} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTuwAEHGob/"
            >
              <div className={style.galleryCaption}>
                <BsInstagram />
                <caption>more</caption>
              </div>
              <Image className={style.img} src={inorganicImg4} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTugeenIH2/"
            >
              <div className={style.galleryCaption}>
                <BsInstagram />
                <caption>more</caption>
              </div>
              <Image className={style.img} src={inorganicImg5} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTubK5n9ml/"
            >
              <div className={style.galleryCaption}>
                <BsInstagram />
                <caption>more</caption>
              </div>
              <Image className={style.img} src={inorganicImg6} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTt_GPnwqs/"
            >
              <div className={style.galleryCaption}>
                <BsInstagram />
                <caption>more</caption>
              </div>
              <Image className={style.img} src={inorganicImg7} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTt1penyTD/"
            >
              <div className={style.galleryCaption}>
                <BsInstagram />
                <caption>more</caption>
              </div>
              <Image className={style.img} src={inorganicImg8} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTtydbna8M/"
            >
              <div className={style.galleryCaption}>
                <BsInstagram />
                <caption>more</caption>
              </div>
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
          <ReadMore>
            As a patch of light tingling of the spine are creatures of the
            cosmos stirred by starlight decipherment tendrils of gossamer
            clouds?
          </ReadMore>
        </section>
      </div>
    </div>
  )
}
