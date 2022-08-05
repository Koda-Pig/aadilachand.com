import Image from 'next/image'
import style from '../../styles/fine-art/site.module.scss'
import site1 from '../../public/images/fine-art/site/site-1.png'
import site2 from '../../public/images/fine-art/site/site-2.png'
import site3 from '../../public/images/fine-art/site/site-3.png'
import site4 from '../../public/images/fine-art/site/site-4.png'
import site5 from '../../public/images/fine-art/site/site-5.png'
import site6 from '../../public/images/fine-art/site/site-6.png'

const images = [site1, site2, site3, site4, site5, site6]
const imageGallery = images.map((image, index) => {
  return <Image key={index} src={image} quality={100} alt="" />
})

export default function Site() {
  return (
    <div className={style.holoScene}>
      <div className={style.container}>
        <section className={style.gallerySection}>
          <div className={style.gallery}>{imageGallery}</div>
        </section>
        <section className={style.writeUp}>
          <div>
            <h2>site</h2>
            <h3>SEM (photography)</h3>
            <h4>2018</h4>
          </div>
          <p>
            As a patch of light tingling of the spine are creatures of the
            cosmos stirred by starlight decipherment tendrils of gossamer
            clouds?
          </p>
        </section>
      </div>
    </div>
  )
}
