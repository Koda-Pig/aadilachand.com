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
        {/* <a
          href="https://www.figma.com/file/fBFBTL3piLExHjGTS5HBga/earthdirt?node-id=1101%3A1063"
          target="_blank"
          rel="noreferrer"
          className={styles.callToAction}
        >
          full project
        </a> */}
      </div>
    </div>
  )
}
