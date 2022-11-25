import Image from 'next/image'
import ReadMore from '../ReadMore'
import { BsInstagram } from 'react-icons/bs'
import styles from '../../styles/fine-art/InOrganic.module.scss'
import inorganicImg1 from '../../public/images/fine-art/inorganic/inorganic-1.png'
import inorganicImg2 from '../../public/images/fine-art/inorganic/inorganic-2.png'
import inorganicImg3 from '../../public/images/fine-art/inorganic/inorganic-3.png'
import inorganicImg4 from '../../public/images/fine-art/inorganic/inorganic-4.png'
import inorganicImg5 from '../../public/images/fine-art/inorganic/inorganic-5.png'
import inorganicImg6 from '../../public/images/fine-art/inorganic/inorganic-6.png'
import inorganicImg7 from '../../public/images/fine-art/inorganic/inorganic-7.png'
import inorganicImg8 from '../../public/images/fine-art/inorganic/inorganic-8.png'
import inorganicImg9 from '../../public/images/fine-art/inorganic/inorganic-9.png'

const images = [
  [inorganicImg1, 'CDTu8ywnTB_'],
  [inorganicImg2, 'CDTu24BnvDV'],
  [inorganicImg3, 'CDTu1SUnP4i'],
  [inorganicImg4, 'CDTuwAEHGob'],
  [inorganicImg5, 'CDTugeenIH2'],
  [inorganicImg6, 'CDTubK5n9ml'],
  [inorganicImg7, 'CDTt_GPnwqs'],
  [inorganicImg8, 'CDTt1penyTD'],
  [inorganicImg9, 'CDTtydbna8M']
]
const imageGallery = images.map((image, index) => {
  return (
    <a
      key={index}
      target="_blank"
      rel="noreferrer"
      className={styles.galleryLink}
      href={'https://www.instagram.com/p/' + image[1]}
    >
      <div className={styles.galleryCaption}>
        <BsInstagram size={'1.5rem'} />
        <span>more</span>
      </div>
      <Image alt="" priority quality={100} src={image[0]} />
    </a>
  )
})

export default function InOrganic() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.gallery}>{imageGallery}</div>
        <p className={styles.caption}>
          Gallery in the Round Monument Building Makhanda
        </p>
      </section>
      <section className={styles.writeUp}>
        <h2>(in)organic</h2>
        <h3>installation</h3>
        <h4>2019</h4>
        <p>
          Patterned pathways of interconnectedness exist within us but perhaps
          years of conditioning have rewired our brains a bit too far by
          inadvertently accepting the dismally concrete reality that has become
          ever-present and normalized.
        </p>
        <ReadMore>
          <p>
            (in) organic explores the complex and intricate relationship between
            humans and nature, touching on the Anthropocene- the current era we
            live in whereby humans are the dominant and most influential force
            on Earth and the workings of the natural world.
          </p>
        </ReadMore>
      </section>
    </div>
  )
}
