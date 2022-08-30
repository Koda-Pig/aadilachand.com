import Link from 'next/link'
import style from '../styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.innerFooter}>
        <ul>
          <li>
            <Link href="/ux-ui" passHref>
              <a title="ux/ui">ux/ui</a>
            </Link>
          </li>
          <li>
            <Link href="/fine-art" passHref>
              <a title="fine art">fine art</a>
            </Link>
          </li>
          <li>
            <Link href="/graphic-design" passHref>
              <a title="graphic design">graphic design</a>
            </Link>
          </li>
        </ul>
        <div className={style.logo}>
          <Link href="/#home" passHref>
            <a className={style.logoLink} title="home">
              ac
            </a>
          </Link>
        </div>
        <p></p>
      </div>
    </footer>
  )
}
