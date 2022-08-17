import Link from 'next/link'
import style from '../../styles/earthdirt/intro.module.scss'

export default function EarthdirtIntro() {
  return (
    <div className={style.container}>
      <div className={style.proto}>
        <h2>earthdirt</h2>
        <div className={style.circles}>
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <Link href="#" passHref>
          <a className={style.callToAction}>prototype</a>
        </Link>
      </div>
      <div className={style.writeup}>
        <p>
          Paroxysm of global death made in the interiors of collapsing stars
          cosmic ocean extraordinary claims require extraordinary evidence
          permanence of the stars corpus callosum. Tendrils of gossamer clouds
          the sky calls to us with pretty stories for which there&apos;s little
          good
        </p>
      </div>
    </div>
  )
}
