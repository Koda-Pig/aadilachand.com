import Link from 'next/link'
import style from '../styles/footer.module.scss'

export default function Footer(elem) {
  return (
    <footer className={style.footer}>
      <div className={style.logo}>
        <Link href="/#home" passHref>
          <a className={style.logoLink} title="home">
            ac
          </a>
        </Link>
      </div>
    </footer>
  )
}
