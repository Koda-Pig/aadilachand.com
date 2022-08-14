import Image from 'next/image'
import Link from 'next/link'
import mockupImg from '../../public/images/ux-ui/earthdirt/Mockup.png'
import styleguideImg from '../../public/images/ux-ui/earthdirt/StyleGuide.png'
import style from '../../styles/earthdirt/details.module.scss'

export default function EarthdirtDetails() {
  return (
    <div className={style.container}>
      <div>
        <Image src={mockupImg} quality={100} alt="" />
      </div>
      <div className={style.styleguide}>
        <Image src={styleguideImg} quality={100} alt="" />
        <h3>embodied by earth</h3>
        <Link href="#" passHref>
          <a className={style.callToAction}>full figma file</a>
        </Link>
      </div>
    </div>
  )
}
