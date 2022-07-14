import Image from 'next/image'
import style from '../../styles/fine-art/holoScene.module.css'
import holoSceneImg1 from '../../public/fine-art/holoscene/holoscene-1.png'
import holoSceneImg2 from '../../public/fine-art/holoscene/holoscene-2.png'
import holoSceneImg3 from '../../public/fine-art/holoscene/holoscene-3.png'
import holoSceneImg4 from '../../public/fine-art/holoscene/holoscene-4.png'
import holoSceneImg5 from '../../public/fine-art/holoscene/holoscene-5.png'
import holoSceneImg6 from '../../public/fine-art/holoscene/holoscene-6.png'

export default function HoloScene() {
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
              <Image className={style.img} src={holoSceneImg1} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu24BnvDV/"
            >
              <Image className={style.img} src={holoSceneImg2} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTu1SUnP4i/"
            >
              <Image className={style.img} src={holoSceneImg3} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTuwAEHGob/"
            >
              <Image className={style.img} src={holoSceneImg4} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTugeenIH2/"
            >
              <Image className={style.img} src={holoSceneImg5} alt="" />
            </a>
            <a
              className={style.galleryLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/p/CDTubK5n9ml/"
            >
              <Image className={style.img} src={holoSceneImg6} alt="" />
            </a>
          </div>
        </section>
        <section className={style.writeUp}>
          <div>
            <h2>holo.scene</h2>
            <h3>photography</h3>
            <h4>2019</h4>
          </div>
          <p>
            imagines a post anthropscene world where microscopic life start to
            reclaim the scorched earth.nexplorinng a post anthropscene world
            where microscopic life start to reclaim the scorched
            earth.nexplorinng a post anthropscene world where microscopic life
            start to reclaim the scorched earth.
          </p>
        </section>
      </div>
    </div>
  )
}
