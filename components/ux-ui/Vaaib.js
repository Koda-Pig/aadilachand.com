import Link from 'next/link'
import style from '../../styles/ux-ui/vaaib.module.scss'

export default function Vaiib() {
  return (
    <div className={style.container}>
      <div className={style.writeup}>
        <h2>vʌɪb</h2>
        <p>
          <strong>case study</strong>
          <br />
          designing for diversity and intergration
        </p>
        <Link href="#" passHref>
          <a className={style.callToAction}>get in touch</a>
        </Link>
      </div>
    </div>
  )
}
