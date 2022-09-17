import Image from 'next/image'
import mockupImg from '../../public/images/ux-ui/earthdirt/Mockup.png'
import styleguideImg from '../../public/images/ux-ui/earthdirt/StyleGuide.png'
import styles from '../../styles/ux-ui/earthdirt/details.module.scss'

export default function EarthdirtDetails() {
  return (
    <div className={styles.container}>
      <div>
        <Image src={mockupImg} quality={100} alt="" />
      </div>
      <div>
        <div>
          <Image src={styleguideImg} quality={100} alt="" />
        </div>
        <a href="" className={styles.callToAction}>
          full figma file
        </a>
      </div>
    </div>
  )
}
