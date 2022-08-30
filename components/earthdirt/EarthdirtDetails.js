import Image from 'next/image'
import mockupImg from '../../public/images/ux-ui/earthdirt/Mockup.png'
import styleguideImg from '../../public/images/ux-ui/earthdirt/StyleGuide.png'
import style from '../../styles/ux-ui/earthdirt/details.module.scss'

export default function EarthdirtDetails() {
  return (
    <div className={style.container}>
      <div>
        <Image src={mockupImg} quality={100} alt="" />
      </div>
      <div className={style.styleguide}>
        <div>
          <Image src={styleguideImg} quality={100} alt="" />
        </div>
        <a href="" className={style.callToAction}>
          full figma file
        </a>
        <h3>embodied by earth</h3>
      </div>
    </div>
  )
}
