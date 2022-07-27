import Image from 'next/image'
import style from '../../styles/fine-art/site.module.scss'
import site1 from '../../public/images/fine-art/site/site-1.png'
import site2 from '../../public/images/fine-art/site/site-2.png'
import site3 from '../../public/images/fine-art/site/site-3.png'
import site4 from '../../public/images/fine-art/site/site-4.png'
import site5 from '../../public/images/fine-art/site/site-5.png'
import site6 from '../../public/images/fine-art/site/site-6.png'

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
              <Image className={style.img} src={site1} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={site2} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={site3} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={site4} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={site5} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu8ywnTB_/"
            >
              <Image className={style.img} src={site6} alt="" />
            </a>
          </div>
        </section>
        <section className={style.writeUp}>
          <div>
            <h2>site</h2>
            <h3>SEM (photography)</h3>
            <h4>2018</h4>
          </div>
          <p>
            exploring hidden microscopic worlds, revealing tiny intricacies to
            challenge the perspective of the seemingly munndane. using
            site-specifc common plant life collected in and around Makhanda.
            Photographed using a Scanning Electron Microscope (SEM)
          </p>
        </section>
      </div>
    </div>
  )
}
