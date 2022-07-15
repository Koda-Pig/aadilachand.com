import Image from 'next/image'
import style from '../../styles/fine-art/humanNature.module.css'
import humanNature1 from '../../public/images/fine-art/human-nature/human-nature-1.png'
import humanNature2 from '../../public/images/fine-art/human-nature/human-nature-2.png'
import humanNature3 from '../../public/images/fine-art/human-nature/human-nature-3.png'
import humanNature4 from '../../public/images/fine-art/human-nature/human-nature-4.png'

export default function Site() {
  return (
    <div className={style.holoScene}>
      <div className={style.container}>
        <section className={style.gallerySection}>
          <div className={style.gallery}>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={humanNature1} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={humanNature2} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={humanNature3} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={humanNature4} alt="" />
            </a>
          </div>
        </section>
        <section className={style.writeUp}>
          <div>
            <h2>human/nature</h2>
            <h3>digital art</h3>
            <h4>2019</h4>
          </div>
          <p>
            cross sections of plant cells merged with human eyes to create a new
            cell. portraying the interconnnection between humans and nature
          </p>
        </section>
      </div>
    </div>
  )
}
